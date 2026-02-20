import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { FaCode, FaBrain, FaUsers, FaRocket, FaArrowRight, FaCheckCircle, FaLaptopCode, FaChartLine, FaCogs, FaShieldAlt, FaCloud } from 'react-icons/fa';
import ClientLogos from '../../components/ClientLogos/ClientLogos';
import TechStack from '../../components/TechStack/TechStack';
import Industries from '../../components/Industries/Industries';
import CustomerStories from '../../components/CustomerStories/CustomerStories';
import ArticleCarousel from '../../components/ArticleCarousel/ArticleCarousel';
import CTA from '../../components/cta/CTA';
import PageSkeleton from '../../components/Skeleton/PageSkeleton';
import './Services.css';
import '../../components/Hero/Hero.css';
import '../../components/BenefitSection/BenefitSection.css';

const Services = () => {
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
        <div className="services-page">
            <Header />

            {/* HERO SECTION */}
            <section className="hero-section py-5">
                <div className="container">
                    <div className="row align-items-center" style={{ minHeight: '500px' }}>
                        <div className="col-lg-7">
                            <h1 className="hero-title">
                                End-to-End <br />
                                <span style={{ color: 'var(--codeifyy-green)' }}>Technology Services</span>
                            </h1>
                            <p className="hero-description">
                                At Codeifyy, we deliver comprehensive technology services designed to help businesses innovate, scale, and operate efficiently.
                            </p>
                            <div className="hero-trust-line">
                                <a href="/contact" className="btn btn-codeifyy-primary rounded-2 fw-bold px-4 py-3">
                                    Talk to Us <FaArrowRight className="ms-2" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <div className="hero-graphic-wrapper">
                                {/* Base Layer: Code Window */}
                                <div className="code-window">
                                    <div className="window-header">
                                        <div className="dot red"></div>
                                        <div className="dot yellow"></div>
                                        <div className="dot green"></div>
                                    </div>
                                    <div className="window-body">
                                        <span className="code-line c-gray">// End-to-End Solutions</span>
                                        <span className="code-line">
                                            <span className="c-purple">const</span> <span className="c-blue">Services</span> = <span className="c-yellow">()</span> <span className="c-purple">=&gt;</span> {'{'}
                                        </span>
                                        <span className="code-line pl-3" style={{ paddingLeft: '1.5rem' }}>
                                            <span className="c-purple">return</span> <span className="c-green">"Full Lifecycle"</span>;
                                        </span>
                                        <span className="code-line">{'}'}</span>
                                        <br />
                                        <span className="code-line c-gray">// Strategy & Execution</span>
                                        <span className="code-line">
                                            <span className="c-purple">await</span> <span className="c-blue">Codeifyy</span>.<span className="c-yellow">deliver</span>(<span className="c-white">Excellence</span>);
                                        </span>
                                        <br />
                                        <span className="code-line c-gray">// Global Scale</span>
                                        <span className="code-line">
                                            <span className="c-purple">if</span> (<span className="c-white">growth</span> &gt; <span className="c-yellow">0</span>) {'{'}
                                        </span>
                                        <span className="code-line pl-3" style={{ paddingLeft: '1.5rem' }}>
                                            <span className="c-blue">scale</span>(<span className="c-green">"Unlimited"</span>);
                                        </span>
                                        <span className="code-line">{'}'}</span>
                                    </div>
                                </div>

                                {/* Floating Badges */}
                                <div className="floating-badge badge-security">
                                    <div className="badge-icon" style={{ background: '#10b981' }}><FaShieldAlt /></div>
                                    <span>Expertise</span>
                                </div>

                                <div className="floating-badge badge-cloud">
                                    <div className="badge-icon" style={{ background: '#3b82f6' }}><FaCloud /></div>
                                    <span>Scalability</span>
                                </div>

                                <div className="floating-badge badge-performance">
                                    <div className="badge-icon" style={{ background: '#f59e0b' }}><FaRocket /></div>
                                    <span>Performance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ClientLogos />
            </section>

            {/* STATS / FLEXIBLE TALENT SECTION */}
            <section className="section-padding" style={{ background: '#fff' }}>
                <div className="container">
                    <div className="flexible-talent-wrapper">
                        <div className="flexible-content">
                            <h2>Flexible Talent. <br />Immediate Impact.</h2>
                            <p className="hero-description">
                                Codeifyy’s services enable businesses to expand their technical capabilities quickly and efficiently.
                                We provide the expertise you need, when you need it.
                            </p>
                            <ul className="model-features">
                                <li><FaCheckCircle /> Access top engineering talent</li>
                                <li><FaCheckCircle /> Scale teams in 48 hours</li>
                                <li><FaCheckCircle /> Risk-free trial period</li>
                            </ul>
                            <a href="/contact" className="btn btn-codeifyy-primary">Let's Connect</a>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="benefit-cards-grid">
                                <div className="stat-card animate-up delay-1">
                                    <div className="stat-value">750+</div>
                                    <div className="stat-label">IT Professionals</div>
                                </div>
                                <div className="stat-card animate-up delay-2">
                                    <div className="stat-value">500+</div>
                                    <div className="stat-label">Developers</div>
                                </div>
                                <div className="stat-card animate-up delay-3">
                                    <div className="stat-value">45</div>
                                    <div className="stat-label">Project Managers</div>
                                </div>
                                <div className="stat-card animate-up delay-4">
                                    <div className="stat-value">Certified</div>
                                    <div className="stat-label">Platform Experts</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE SERVICES SECTION */}
            <section className="core-services-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Our Core Services</h2>
                        <p className="section-subtitle">Scalable technology solutions for modern enterprises.</p>
                    </div>

                    <div className="row g-4">
                        {/* Software Development */}
                        <div className="col-lg-6">
                            <div className="service-overview-card">
                                <span className="service-number">01</span>
                                <div className="service-overview-icon"><FaCode /></div>
                                <h3 className="service-overview-title">Software Development</h3>
                                <p className="service-overview-desc">Custom-built web, mobile, and enterprise applications designed for scalability and performance.</p>
                                <ul className="service-features-list">
                                    <li><span className="bullet-dot">•</span> Web Application Development</li>
                                    <li><span className="bullet-dot">•</span> Mobile App Development</li>
                                    <li><span className="bullet-dot">•</span> Enterprise Systems</li>
                                    <li><span className="bullet-dot">•</span> SaaS Platforms</li>
                                    <li><span className="bullet-dot">•</span> API Development & Integration</li>
                                    <li><span className="bullet-dot">•</span> Cloud-Based Applications</li>
                                </ul>
                                <Link to="/services/software-development" className="explore-link">Explore Software Development <FaArrowRight /></Link>
                            </div>
                        </div>

                        {/* AI Services */}
                        <div className="col-lg-6">
                            <div className="service-overview-card">
                                <span className="service-number">02</span>
                                <div className="service-overview-icon"><FaBrain /></div>
                                <h3 className="service-overview-title">Artificial Intelligence Services</h3>
                                <p className="service-overview-desc">Intelligent systems that automate processes and enable data-driven decision-making.</p>
                                <ul className="service-features-list">
                                    <li><span className="bullet-dot">•</span> AI Strategy & Consulting</li>
                                    <li><span className="bullet-dot">•</span> Machine Learning Development</li>
                                    <li><span className="bullet-dot">•</span> Generative AI Integration</li>
                                    <li><span className="bullet-dot">•</span> Chatbots & Virtual Assistants</li>
                                    <li><span className="bullet-dot">•</span> Computer Vision</li>
                                    <li><span className="bullet-dot">•</span> AI Automation Solutions</li>
                                </ul>
                                <Link to="/services/artificial-intelligence" className="explore-link">Explore AI Services <FaArrowRight /></Link>
                            </div>
                        </div>

                        {/* Staff Augmentation */}
                        <div className="col-lg-6">
                            <div className="service-overview-card">
                                <span className="service-number">03</span>
                                <div className="service-overview-icon"><FaUsers /></div>
                                <h3 className="service-overview-title">Staff Augmentation</h3>
                                <p className="service-overview-desc">Extend your in-house capabilities with skilled developers and engineers.</p>
                                <ul className="service-features-list">
                                    <li><span className="bullet-dot">•</span> IT Staff augmentation</li>
                                    <li><span className="bullet-dot">•</span> Dedicated Development Team</li>
                                    <li><span className="bullet-dot">•</span> Full-Project Outsourcing</li>
                                    <li><span className="bullet-dot">•</span> Software Outsourcing</li>
                                </ul>
                                <Link to="/services/staff-augmentation" className="explore-link">Explore Staff Augmentation <FaArrowRight /></Link>
                            </div>
                        </div>

                        {/* Product Engineering */}
                        <div className="col-lg-6">
                            <div className="service-overview-card">
                                <span className="service-number">04</span>
                                <div className="service-overview-icon"><FaRocket /></div>
                                <h3 className="service-overview-title">Product Engineering</h3>
                                <p className="service-overview-desc">End-to-end product lifecycle support — from idea validation to deployment and scaling.</p>
                                <ul className="service-features-list">
                                    <li><span className="bullet-dot">•</span> Product Strategy & Planning</li>
                                    <li><span className="bullet-dot">•</span> MVP Development</li>
                                    <li><span className="bullet-dot">•</span> UI/UX Design</li>
                                    <li><span className="bullet-dot">•</span> Architecture Design</li>
                                    <li><span className="bullet-dot">•</span> Ongoing Optimization</li>
                                </ul>
                                <Link to="/services/product-development" className="explore-link">Explore Product Engineering <FaArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUSINESS SOLUTIONS SECTION */}
            <section className="business-solutions-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Business Solutions We Provide</h2>
                        <p className="section-subtitle">We deliver ready-to-deploy, customizable business systems designed to solve operational challenges and improve efficiency across departments.</p>
                    </div>

                    <div className="solution-card-grid">
                        {/* CRM */}
                        <div className="solution-card">
                            <span className="solution-number">01</span>
                            <h3 className="solution-title">Customer Relationship Management (CRM)</h3>
                            <p className="solution-desc">Centralize customer data, streamline sales pipelines, and improve customer retention.</p>
                            <ul className="service-features-list solution-features">
                                <li><span className="bullet-dot">•</span> Lead & pipeline management</li>
                                <li><span className="bullet-dot">•</span> Customer tracking</li>
                                <li><span className="bullet-dot">•</span> Sales automation</li>
                                <li><span className="bullet-dot">•</span> Reporting & analytics</li>
                            </ul>
                        </div>

                        {/* CMS */}
                        <div className="solution-card">
                            <span className="solution-number">02</span>
                            <h3 className="solution-title">Content Management System (CMS)</h3>
                            <p className="solution-desc">Manage your website and digital content without technical complexity.</p>
                            <ul className="service-features-list solution-features">
                                <li><span className="bullet-dot">•</span> Easy content editing</li>
                                <li><span className="bullet-dot">•</span> Role-based access control</li>
                                <li><span className="bullet-dot">•</span> SEO-friendly architecture</li>
                                <li><span className="bullet-dot">•</span> Media & asset management</li>
                                <li><span className="bullet-dot">•</span> Multi-language support</li>
                                <li><span className="bullet-dot">•</span> Custom workflow approvals</li>
                            </ul>
                        </div>

                        {/* ERP */}
                        <div className="solution-card">
                            <span className="solution-number">03</span>
                            <h3 className="solution-title">Enterprise Resource Planning (ERP)</h3>
                            <p className="solution-desc">Integrate core business processes into a single unified platform.</p>
                            <ul className="service-features-list solution-features">
                                <li><span className="bullet-dot">•</span> Finance & accounting</li>
                                <li><span className="bullet-dot">•</span> Inventory & supply chain</li>
                                <li><span className="bullet-dot">•</span> HR management</li>
                                <li><span className="bullet-dot">•</span> Procurement workflows</li>
                                <li><span className="bullet-dot">•</span> Cross-department reporting</li>
                            </ul>
                        </div>

                        {/* School Management */}
                        <div className="solution-card">
                            <span className="solution-number">04</span>
                            <h3 className="solution-title">School Management System</h3>
                            <p className="solution-desc">Digitize academic and administrative operations for educational institutions.</p>
                            <ul className="service-features-list solution-features">
                                <li><span className="bullet-dot">•</span> Student information management</li>
                                <li><span className="bullet-dot">•</span> Attendance & examination tracking</li>
                                <li><span className="bullet-dot">•</span> Fee management</li>
                                <li><span className="bullet-dot">•</span> Parent-teacher communication</li>
                                <li><span className="bullet-dot">•</span> Reporting dashboards</li>
                            </ul>
                        </div>

                        {/* Retail & POS */}
                        <div className="solution-card">
                            <span className="solution-number">05</span>
                            <h3 className="solution-title">Retail & Point of Sale (POS)</h3>
                            <p className="solution-desc">Manage sales transactions, inventory, and multi-location retail operations efficiently.</p>
                            <ul className="service-features-list solution-features">
                                <li><span className="bullet-dot">•</span> Billing & invoicing</li>
                                <li><span className="bullet-dot">•</span> Inventory tracking</li>
                                <li><span className="bullet-dot">•</span> Multi-store synchronization</li>
                                <li><span className="bullet-dot">•</span> Barcode integration</li>
                                <li><span className="bullet-dot">•</span> Sales analytics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES */}
            <Industries />

            {/* TECH STACK */}
            <TechStack />

            {/* OUR APPROACH */}
            <section className="services-approach-section">
                <div className="container">
                    <h2 className="section-title text-white">Our Approach</h2>
                    <p className="section-subtitle text-white opacity-75">We follow a structured, transparent delivery process to ensure successful outcomes.</p>

                    <div className="approach-timeline">
                        {[
                            { step: 1, title: 'Discovery & Strategy', desc: 'Understanding business goals and defining the right technology roadmap.' },
                            { step: 2, title: 'Design & Architecture', desc: 'Creating scalable, secure system architecture.' },
                            { step: 3, title: 'Development & Integration', desc: 'Building high-performance solutions aligned with your requirements.' },
                            { step: 4, title: 'Testing & Deployment', desc: 'Ensuring reliability, security, and seamless integration.' },
                            { step: 5, title: 'Support & Optimization', desc: 'Continuous monitoring, improvements, and scalability enhancements.' }
                        ].map((item, index) => (
                            <div key={index} className="approach-step">
                                <div className="services-step-circle">{item.step}</div>
                                <h4 className="step-title">{item.title}</h4>
                                <p className="step-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <ArticleCarousel />

            {/* CASE STUDIES */}
            <CustomerStories />

            {/* FINAL CTA */}
            {/* FINAL CTA */}
            <section className="final-cta-section mt-5">
                <div className="container">
                    <CTA
                        title="Let’s Build Something Scalable"
                        text="Whether you need custom development, AI solutions, or a dedicated team — we’re ready to help."
                        btnText="Talk to Our Experts"
                        link="/contact"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;
