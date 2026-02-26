import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CTA from '../../components/cta/CTA';
import BenefitSection from '../../components/BenefitSection/BenefitSection';
import PageSkeleton from '../../components/Skeleton/PageSkeleton';
import { FaArrowRight, FaUsers, FaCheckCircle, FaSearch, FaRocket, FaLightbulb, FaShieldAlt, FaChartLine, FaGlobe, FaNetworkWired, FaServer, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './About.css';
import ClientLogos from '../../components/ClientLogos/ClientLogos';
import TechStack from '../../components/TechStack/TechStack';
import ArticleCarousel from '../../components/ArticleCarousel/ArticleCarousel';
import CustomerStories from '../../components/CustomerStories/CustomerStories';
const About = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <PageSkeleton includeHeader={true} includeFooter={true} />;
    }

    return (
        <div className="about-page">
            <Header />
            <main className="about-main">
                {/* HERO SECTION - Matched to Services Style */}
                <section className="hero-section">
                    <div className="container">
                        <div className="row align-items-center hero-row">
                            <div className="col-lg-7">
                                <div className="hero-label">About Codeifyy</div>
                                <h1 className="hero-title">
                                    Your Partner in <br />
                                    <span className="text-highlight">Intelligent Digital Solutions</span>
                                </h1>
                                <p className="hero-description">
                                    Codeifyy is a technology-driven company specializing in scalable software, AI-powered systems, and enterprise digital transformation. We partner with startups, SMEs, and enterprises to design structured, secure, and high-performance technology ecosystems.
                                </p>
                                <div className="hero-trust-line">
                                    <a href="/contact" className="btn btn-codeifyy-primary rounded-2 fw-bold px-4 py-3">
                                        Partner With Us <FaArrowRight className="ms-2" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 d-none d-lg-block">
                                {/* Abstract Graphic: Global Network */}
                                <div className="about-hero-graphic">
                                    <div className="hero-graphic-bg">
                                        {/* Central Hub */}
                                        <div className="central-hub">
                                            <FaGlobe className="globe-icon" />
                                            <div className="hub-center">
                                                <FaNetworkWired className="wired-icon" />
                                            </div>
                                        </div>

                                        {/* Orbiting Elements */}
                                        <div className="orbit-element orbit-top-right">
                                            <div className="orbit-icon-bg bg-blue"><FaServer /></div>
                                            Enterprise Grade
                                        </div>

                                        <div className="orbit-element orbit-bottom-left">
                                            <div className="orbit-icon-bg bg-green"><FaUsers /></div>
                                            Global Talent
                                        </div>

                                        {/* Decorative Lines */}
                                        <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
                                            <circle cx="50%" cy="50%" r="140" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.5" />
                                            <circle cx="50%" cy="50%" r="200" stroke="#e2e8f0" strokeWidth="1" fill="none" opacity="0.5" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="client-logos-wrapper">
                    <ClientLogos />
                </div>

                {/* STATS SECTION - Replaced with BenefitSection */}
                <BenefitSection />

                {/* VISION & MISSION - Updated with Images */}
                {/* VISION SECTION */}
                <section className="vision-section">
                    <div className="container">
                        <div className="row align-items-center mb-5">
                            <div className="col-lg-6">
                                <div className="vision-text-content">
                                    <h2 className="section-title text-start mb-4">Our Vision</h2>
                                    <p className="section-subtitle text-start mb-5">
                                        To become a globally trusted technology partner recognized for delivering intelligent, scalable, and future-ready digital solutions.
                                    </p>
                                    {/* <div className="vision-stats-row">
                                        <div className="vision-stat-item">
                                            <h3 className="stat-value">10M+</h3>
                                            <p className="stat-label">Active Users</p>
                                        </div>
                                        <div className="vision-stat-item">
                                            <h3 className="stat-value">150+</h3>
                                            <p className="stat-label">Countries</p>
                                        </div>
                                        <div className="vision-stat-item">
                                            <h3 className="stat-value">99.9%</h3>
                                            <p className="stat-label">Uptime</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="vision-image-wrapper">
                                    <img src="/images/vision.jpg" alt="Our Vision" className="img-fluid rounded-4 shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MISSION SECTION - Reverse Layout */}
                <section className="mission-section pb-5">
                    <div className="container">
                        <div className="row align-items-center flex-row-reverse">
                            <div className="col-lg-6">
                                <div className="vision-text-content ps-lg-5">
                                    <h2 className="section-title text-start mb-4">Our Mission</h2>
                                    <p className="section-subtitle text-start mb-5">
                                        To empower businesses with innovative, secure, and high-performance technology systems that solve real operational challenges.
                                        Our leadership, guided by strong technical direction at the CTO level, ensures every solution is architected with scalability, security, and long-term sustainability in mind.

                                    </p>
                                    {/* <div className="vision-stats-row">
                                        <div className="vision-stat-item">
                                            <h3 className="stat-value">500+</h3>
                                            <p className="stat-label">Projects</p>
                                        </div>
                                        <div className="vision-stat-item">
                                            <h3 className="stat-value">50+</h3>
                                            <p className="stat-label">Experts</p>
                                        </div>
                                        <div className="vision-stat-item">
                                            <h3 className="stat-value">24/7</h3>
                                            <p className="stat-label">Support</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="vision-image-wrapper">
                                    <img src="/images/cto.png" alt="Our Mission - CTO" className="img-fluid rounded-4 shadow-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CORE VALUES - Grid */}
                <section className="section-padding bg-white">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Our Core Values</h2>
                            <p className="section-subtitle">The principles that define who we are.</p>
                        </div>
                        <div className="values-grid-row">
                            {[
                                { title: 'Innovation', desc: 'Embracing modern technologies.', icon: <FaLightbulb /> },
                                { title: 'Integrity', desc: 'Transparent & ethical partnerships.', icon: <FaShieldAlt /> },
                                { title: 'Excellence', desc: 'High engineering standards.', icon: <FaChartLine /> },
                                { title: 'Scalability', desc: 'Designed for long-term growth.', icon: <FaRocket /> },
                                { title: 'Client-Centricity', desc: 'Aligning tech with business goals.', icon: <FaUsers /> }
                            ].map((val, i) => (
                                <div key={i}>
                                    <div className="core-value-card">
                                        <div className="core-value-icon-box">{val.icon}</div>
                                        <h4 className="core-value-title">{val.title}</h4>
                                        <p className="core-value-desc">{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* EXPERTISE SECTION - Columns */}
                <section className="expertise-grid-section">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Our Expertise</h2>
                            <p className="section-subtitle">Delivering excellence across services, solutions, and industries.</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4">
                                <div className="expertise-col-card">
                                    <span className="expertise-number">01</span>
                                    <h3><Link to="/services" className="text-decoration-none">Services</Link></h3>
                                    <ul className="expertise-list-styled">
                                        <li><FaCheckCircle /> Software Development</li>
                                        <li><FaCheckCircle /> Artificial Intelligence</li>
                                        <li><FaCheckCircle /> Staff Augmentation</li>
                                        <li><FaCheckCircle /> Product Engineering</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="expertise-col-card">
                                    <span className="expertise-number">02</span>
                                    <h3>Solutions</h3>
                                    <ul className="expertise-list-styled">
                                        <li><FaCheckCircle /> CRM Systems</li>
                                        <li><FaCheckCircle /> ERP Solutions</li>
                                        <li><FaCheckCircle /> CMS Platforms</li>
                                        <li><FaCheckCircle /> School Management</li>
                                        <li><FaCheckCircle /> POS & Retail Systems</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="expertise-col-card">
                                    <span className="expertise-number">03</span>
                                    <h3><Link to="/industries" className="text-decoration-none">Industries</Link></h3>
                                    <ul className="expertise-list-styled">
                                        <li><FaCheckCircle /> Automobile & Manufacturing</li>
                                        <li><FaCheckCircle /> Oil & Gas</li>
                                        <li><FaCheckCircle /> Ecommerce & Retail</li>
                                        <li><FaCheckCircle /> Education & Fintech</li>
                                        <li><FaCheckCircle /> Real Estate</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <TechStack />
                <ArticleCarousel />
                <CustomerStories />
                {/* LOCATION SECTION */}
                <section className="location-section-styled">
                    <div className="container">
                        <div className="location-flex-container">
                            <div className="location-text">
                                <h2 className="section-title">Our Location</h2>
                                <p className="section-subtitle">
                                    We serve clients across multiple regions, delivering remote-first collaboration with global standards.
                                </p>
                                <div className="headquarter-card">
                                    <h3 className="hq-title">Headquarter</h3>
                                    <div className="contact-details">
                                        <p className="contact-item">
                                            <FaMapMarkerAlt className="contact-icon" />
                                            <strong>National Town, Lahore, 05453, Pakistan</strong>
                                        </p>
                                        <p className="contact-item">
                                            <FaPhoneAlt className="contact-icon" />
                                            +923112601310
                                        </p>
                                        <p className="contact-item">
                                            <FaEnvelope className="contact-icon" />
                                            hello@codeifyy.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Map Embed */}
                            <div className="map-container">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    src="https://maps.google.com/maps?q=National%20Town%2C%20Lahore%2C%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    title="Codeifyy Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <div className="container">
                    <CTA
                        title="Let’s Build the Future Together"
                        text="At Codeifyy, we don’t just develop software; we engineer intelligent systems that enable sustainable digital growth."
                        btnText="Talk to Our Experts"
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;
