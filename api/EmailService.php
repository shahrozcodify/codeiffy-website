<?php

/**
 * Reusable Resend Email Service
 * Drop this file into any PHP project to send emails via Resend.
 *
 * Usage:
 *   $email = new EmailService('re_your_api_key');
 *   $email->send('user@example.com', 'Subject', '<p>HTML body</p>');
 */
class EmailService
{
    private string $apiKey;
    private string $defaultFrom;

    public function __construct(string $apiKey, string $defaultFrom = 'Codeifyy <onboarding@resend.dev>')
    {
        $this->apiKey = $apiKey;
        $this->defaultFrom = $defaultFrom;
    }

    public function setDefaultFrom(string $from): self
    {
        $this->defaultFrom = $from;
        return $this;
    }

    /**
     * Send a generic email.
     */
    public function send(string $to, string $subject, string $html, ?string $from = null): array
    {
        $payload = json_encode([
            'from'    => $from ?? $this->defaultFrom,
            'to'     => [$to],
            'subject' => $subject,
            'html'    => $html,
        ]);

        $ch = curl_init('https://api.resend.com/emails');
        $opts = [
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST           => true,
            CURLOPT_POSTFIELDS     => $payload,
            CURLOPT_HTTPHEADER     => [
                'Authorization: Bearer ' . $this->apiKey,
                'Content-Type: application/json',
            ],
        ];

        $caBundle = __DIR__ . '/cacert.pem';
        if (file_exists($caBundle)) {
            $opts[CURLOPT_CAINFO] = $caBundle;
        } elseif (PHP_OS_FAMILY === 'Windows') {
            $opts[CURLOPT_SSL_VERIFYPEER] = false;
            $opts[CURLOPT_SSL_VERIFYHOST] = false;
        }

        curl_setopt_array($ch, $opts);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $error = curl_error($ch);
        curl_close($ch);

        if ($error) {
            return ['success' => false, 'error' => $error];
        }

        $data = json_decode($response, true);

        if ($httpCode >= 400) {
            return ['success' => false, 'error' => $data['message'] ?? 'Email send failed'];
        }

        return ['success' => true, 'data' => $data];
    }

    /**
     * Send a contact form notification email.
     */
    public function sendContactNotification(string $to, array $formData): array
    {
        $firstName = htmlspecialchars($formData['firstName']);
        $phone  = htmlspecialchars($formData['phone']);
        $email     = htmlspecialchars($formData['email']);
        $message   = nl2br(htmlspecialchars($formData['message']));

        $subject = "New Contact Form: {$firstName} ";

        $html = <<<HTML
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #0f172a; padding: 20px 30px; border-radius: 8px 8px 0 0;">
                <h2 style="color: #10b981; margin: 0;">New Contact Submission</h2>
            </div>
            <div style="background: #f8fafc; padding: 30px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #334155; width: 120px;">Name:</td>
                        <td style="padding: 10px 0; color: #1e293b;">{$firstName} </td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #334155;">Email:</td>
                        <td style="padding: 10px 0; color: #1e293b;"><a href="mailto:{$email}">{$email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px 0; font-weight: bold; color: #334155;">Phone:</td>
                        <td style="padding: 10px 0; color: #1e293b;">{$phone}</td>
                    </tr>
                </table>
                <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">
                    <p style="margin: 0 0 5px; font-weight: bold; color: #334155;">Message:</p>
                    <p style="margin: 0; color: #475569; line-height: 1.6;">{$message}</p>
                </div>
                <p style="margin-top: 20px; font-size: 12px; color: #94a3b8;">
                    Sent from codeifyy.com contact form
                </p>
            </div>
        </div>
        HTML;

        return $this->send($to, $subject, $html);
    }
}
