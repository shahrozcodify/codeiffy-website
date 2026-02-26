import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeadset, FaComments, FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contact.css';
import '../../components/Hero/Hero.css';

const Popup = ({ message, type, onClose }) => {
    if (!message) return null;

    return (
        <div className="popup-overlay">
            <div className={`popup-content ${type}`}>
                <button className="popup-close" onClick={onClose}><FaTimes /></button>
                <div className="popup-icon">
                    {type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                </div>
                <p className="popup-message">{message}</p>
                <button className="popup-btn" onClick={onClose}>Okay</button>
            </div>
        </div>
    );
};

const API_URL = import.meta?.env?.VITE_API_URL || '/api';

const Contact = () => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
    const [captchaValue, setCaptchaValue] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [popup, setPopup] = useState({ show: false, message: '', type: 'success' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const closePopup = () => {
        setPopup({ ...popup, show: false });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!captchaValue) {
            setPopup({ show: true, message: "Please complete the reCAPTCHA verification to proceed.", type: 'error' });
            return;
        }

        setIsSubmitting(true);
        try {
            const res = await fetch(`${API_URL}/contact.php`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, captchaToken: captchaValue }),
            });
            const data = await res.json();

            if (res.ok) {
                setPopup({ show: true, message: data.message, type: 'success' });
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
                setCaptchaValue(null);
            } else {
                setPopup({ show: true, message: data.error || 'Something went wrong.', type: 'error' });
            }
        } catch {
            setPopup({ show: true, message: 'Network error. Please try again later.', type: 'error' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            <Header />

            {popup.show && (
                <Popup
                    message={popup.message}
                    type={popup.type}
                    onClose={closePopup}
                />
            )}

            {/* HERO SECTION */}
            <section className="hero-section py-5">
                <div className="container">
                    <div className="row align-items-center" style={{ minHeight: '500px' }}>
                        <div className="col-lg-7">
                            <div className="hero-label">Contact Us</div>
                            <h1 className="hero-title">
                                Get in <span style={{ color: 'var(--codeifyy-green)' }}>Touch</span> <br />
                                with Our Team.
                            </h1>
                            <p className="hero-description">
                                Have questions about our AI CRM or need a custom solution?
                                Our team is here to help you find the right path for your business growth.
                            </p>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <div className="hero-graphic-wrapper">
                                {/* Contact Graphic / Message Window */}
                                <div className="code-window">
                                    <div className="window-header">
                                        <div className="dot red"></div>
                                        <div className="dot yellow"></div>
                                        <div className="dot green"></div>
                                    </div>
                                    <div className="window-body">
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}><FaHeadset size={14} /></div>
                                                <div style={{ background: '#f1f5f9', padding: '10px 15px', borderRadius: '0 12px 12px 12px', fontSize: '0.9rem', color: '#334155' }}>
                                                    Hi there! How can we help you today?
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
                                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}><FaEnvelope size={14} /></div>
                                                <div style={{ background: '#ecfdf5', padding: '10px 15px', borderRadius: '12px 0 12px 12px', fontSize: '0.9rem', color: '#065f46' }}>
                                                    I'd like to discuss a new project.
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}><FaHeadset size={14} /></div>
                                                <div style={{ background: '#f1f5f9', padding: '10px 15px', borderRadius: '0 12px 12px 12px', fontSize: '0.9rem', color: '#334155' }}>
                                                    Great! Let's schedule a call.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Floating Badges */}
                                <div className="floating-badge badge-security">
                                    <div className="badge-icon" style={{ background: '#f59e0b' }}><FaComments /></div>
                                    <span>24/7 Support</span>
                                </div>
                                <div className="floating-badge badge-cloud">
                                    <div className="badge-icon" style={{ background: '#3b82f6' }}><FaPaperPlane /></div>
                                    <span>Quick Response</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="contact-main section-padding">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info animate-up delay-1">
                            <h2 className="contact-info-title">Global Offices</h2>
                            <div className="contact-details-list">
                                <div className="contact-detail-item">
                                    <div className="contact-icon-box"><FaMapMarkerAlt /></div>
                                    <div className="contact-item-content">
                                        <h4>Headquarter</h4>
                                        <p>National Town, Lahore, 05453, Pakistan</p>
                                    </div>
                                </div>
                                <div className="contact-detail-item">
                                    <div className="contact-icon-box"><FaPhoneAlt /></div>
                                    <div className="contact-item-content">
                                        <h4>Sales Inquiry</h4>
                                        <p>+92 311 2601310</p>
                                    </div>
                                </div>
                                <div className="contact-detail-item">
                                    <div className="contact-icon-box"><FaEnvelope /></div>
                                    <div className="contact-item-content">
                                        <h4>Email Support</h4>
                                        <p>hello@codeifyy.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-container animate-up delay-2">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">First Name</label>
                                        <input type="text" name="firstName" className="form-input" placeholder="John" value={formData.firstName} onChange={handleChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Last Name</label>
                                        <input type="text" name="lastName" className="form-input" placeholder="Doe" value={formData.lastName} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Work Email</label>
                                    <input type="email" name="email" className="form-input" placeholder="john@company.com" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">How can we help?</label>
                                    <textarea name="message" className="form-textarea" placeholder="Tell us more about your needs..." value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <div className="form-group" style={{ marginBottom: '20px' }}>
                                    <ReCAPTCHA
                                        sitekey="6Lf03nEsAAAAAG2ka1oA9KIVx-mYL2WkPymjVhd1"
                                        onChange={handleCaptchaChange}
                                    />
                                </div>
                                <button className="btn-submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
