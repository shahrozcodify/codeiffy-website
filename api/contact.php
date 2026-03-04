<?php

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/EmailService.php';

// CORS headers
header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$firstName    = trim($input['firstName'] ?? '');
$phone        = trim($input['phone'] ?? '');
$email        = trim($input['email'] ?? '');
$message      = trim($input['message'] ?? '');
$captchaToken = $input['captchaToken'] ?? '';

// Validate required fields
if (!$firstName || !$phone || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'All fields are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid email address.']);
    exit;
}

// Verify reCAPTCHA
if (!$captchaToken) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'reCAPTCHA verification is required.']);
    exit;
}

$captchaResponse = file_get_contents(
    'https://www.google.com/recaptcha/api/siteverify?secret=' . RECAPTCHA_SECRET_KEY . '&response=' . $captchaToken
);
$captchaData = json_decode($captchaResponse, true);

// if (!$captchaData['success']) {
//     http_response_code(400);
//     echo json_encode(['success' => false, 'error' => 'reCAPTCHA verification failed.']);
//     exit;
// }

// Save to MySQL
try {
    $pdo = new PDO(
        'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=utf8mb4',
        DB_USER,
        DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

    $stmt = $pdo->prepare(
        'INSERT INTO contacts (first_name, phone, email, message, created_at) VALUES (?, ?, ?, ?, NOW())'
    );
    $stmt->execute([$firstName, $phone, $email, $message]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Database error. Please try again.']);
    exit;
}

// Send email notification via Resend
$emailService = new EmailService(RESEND_API_KEY);
$emailResult = $emailService->sendContactNotification(
    NOTIFICATION_EMAIL,
    compact('firstName', 'phone', 'email', 'message')
);

if ($emailResult['success']) {
    $pdo->prepare('UPDATE contacts SET email_sent = 1 WHERE id = ?')->execute([$pdo->lastInsertId()]);
}

echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent successfully. We will get back to you soon!']);
