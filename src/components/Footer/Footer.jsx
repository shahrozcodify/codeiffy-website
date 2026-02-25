import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaGlobe,
    FaChevronDown,
    FaExternalLinkAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
    const [isWorldwideOpen, setIsWorldwideOpen] = useState(false);

    return (
        <footer className="footer">
            {/* Main Footer Content */}
            <div className="container footer-main">
                {/* Final CTA */}
                {/* <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '3rem', background: '#f8fafc', borderRadius: '16px' }}>
                    <h2 className="footer-cta-title" style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--codeifyy-navy)', marginBottom: '1rem' }}>
                        Ready to Transform Your Technology Landscape?
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                        Partner with Codeifyy to build scalable systems that power long-term growth.
                    </p>
                    <a href="#" className="btn btn-codeifyy-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
                        Discuss Your Project
                    </a>
                </div> */}

                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <img
                            src="/full-Logo.png"
                            alt="Codeifyy"
                            className="footer-logo"
                        />
                        <div className="social-icons">
                            <a href="https://www.facebook.com/codeifyy" target='_blank' className="social-link"><FaFacebookF /></a>
                            <a href="https://x.com/Codeifyy" target='_blank' className="social-link"><FaTwitter /></a>
                            <a href="https://www.linkedin.com/company/codeifyy" target='_blank' className="social-link"><FaLinkedinIn /></a>
                            <a href="https://www.instagram.com/codeifyyglobal/" target='_blank' className="social-link"><FaInstagram /></a>
                            {/* <a href="#" className="social-link"><FaYoutube /></a> */}
                        </div>
                        <div className="footer-contact-info">
                            <div className="contact-item">
                                <FaEnvelope className="contact-icon" />
                                <span>hello@codeifyy.com</span>
                            </div>
                            <div className="contact-item">
                                <FaPhoneAlt className="contact-icon" />
                                <span>+92 311 2601310</span>
                            </div>
                            <div className="contact-item">
                                <FaMapMarkerAlt className="contact-icon" />
                                <div>
                                    <div style={{ fontWeight: '700', fontSize: '0.9rem', opacity: 0.8 }}>Headquarter</div>
                                    <div style={{ fontSize: '0.95rem' }}>National Town, Lahore, 05453, Pakistan</div>
                                </div>
                            </div>


                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="footer-links-col">
                        <h4>Solutions</h4>
                        <ul>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/industries">Industries</Link></li>
                            <li><Link to="/services/staff-augmentation">Staff Augmentation</Link></li>
                            <li><Link to="/services/software-development">Software Development</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links-col">
                        <h4>About Codeifyy</h4>
                        <ul>
                            <li><Link to="/about">Our Story</Link></li>
                            <li><Link to="/casestudy">Case Studies</Link></li>
                            <li><Link to="/career">Careers</Link></li>
                            <li><Link to="/blog">Blog <FaExternalLinkAlt className="ext-icon d-none" /></Link></li>
                        </ul>
                    </div>

                    <div className="footer-links-col">
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/privacy-policy">Privacy Information</Link></li>
                            <li><Link to="/terms-of-use">Terms of Use</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Legal Bottom Bar */}
            <div className="footer-bottom">
                <div className="container footer-bottom-container d-none">
                    <div className="footer-bottom-left">
                        <div className="worldwide-selector-wrapper">
                            <button
                                className={`worldwide-btn ${isWorldwideOpen ? 'active' : ''}`}
                                onClick={() => setIsWorldwideOpen(!isWorldwideOpen)}
                            >
                                <FaGlobe /> <span>Worldwide</span> <FaChevronDown className={`caret ${isWorldwideOpen ? 'rotate' : ''}`} />
                            </button>

                            {/* Worldwide Dropdown */}
                            {isWorldwideOpen && (
                                <div className="worldwide-dropdown animate-pop-in">
                                    <h3 className="dropdown-heading">Worldwide</h3>
                                    <div className="dropdown-regions">
                                        <div className="region-col">
                                            <h4>Americas</h4>
                                            <ul>
                                                <li><a href="#">América Latina (Español)</a></li>
                                                <li><a href="#">Brasil (Português)</a></li>
                                                <li><a href="#">Canada (English)</a></li>
                                                <li><a href="#">Canada (Français)</a></li>
                                                <li><a href="#">United States (English)</a></li>
                                            </ul>
                                        </div>
                                        <div className="region-col">
                                            <h4>Europe, Middle East, and Africa</h4>
                                            <ul>
                                                <li><a href="#">España (Español)</a></li>
                                                <li><a href="#">Deutschland (Deutsch)</a></li>
                                                <li><a href="#">France (Français)</a></li>
                                                <li><a href="#">Italia (Italiano)</a></li>
                                                <li><a href="#">Nederland (Nederlands)</a></li>
                                                <li><a href="#">Sverige (Svenska)</a></li>
                                                <li><a href="#">United Kingdom (English)</a></li>
                                                <li><a href="#">All other countries (English)</a></li>
                                            </ul>
                                        </div>
                                        <div className="region-col">
                                            <h4>Asia Pacific</h4>
                                            <ul>
                                                <li><a href="#">Australia and New Zealand (English)</a></li>
                                                <li><a href="#">India (English)</a></li>
                                                <li><a href="#">日本 (日本語)</a></li>
                                                <li><a href="#">中国 (简体中文)</a></li>
                                                <li><a href="#">台灣 (繁體中文)</a></li>
                                                <li><a href="#">한국 (한국어)</a></li>
                                                <li><a href="#">ประเทศไทย (ไทย)</a></li>
                                                <li><a href="#">All other countries (English)</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="footer-bottom-links">
                        <Link to="/legal">Legal</Link>
                        <Link to="/terms-of-use">Terms of Service</Link>
                        <Link to="/privacy-policy">Privacy Information</Link>
                        <Link to="/contact">Trust</Link>
                        <Link to="/contact">Contact</Link>
                        <a href="#" className="privacy-choices">
                            <img src="https://www.codeifyy.com/content/dam/sfdc-docs/www/logos/privacy-choices-icon.png" alt="" />
                            Your Privacy Choices
                        </a>
                    </div>
                </div>
                <div className="container footer-copyright text-center">
                    <p style={{ marginBottom: '0' }}>
                        © Copyright 2026 Codeifyy, Inc. All rights reserved.

                    </p>
                </div>
            </div>

            {/* Ask Codeifyy CRM Float Button */}
            {/* <button className="ask-codeifyy-crm">
                <div className="ask-icon">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                    </svg>
                </div>
                <span>Ask Codeifyy CRM</span>
            </button> */}
        </footer>
    );
};

export default Footer;
