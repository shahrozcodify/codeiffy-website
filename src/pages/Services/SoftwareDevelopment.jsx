import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import TechStack from '../../components/TechStack/TechStack';
import Industries from '../../components/Industries/Industries';
import ArticleCarousel from '../../components/ArticleCarousel/ArticleCarousel';
import {
    FaArrowRight, FaCheckCircle, FaLaptopCode, FaDatabase, FaCloud, FaSyncAlt,
    FaSearch, FaPencilRuler, FaTasks, FaBug, FaRocket, FaChartLine, FaShieldAlt
} from 'react-icons/fa';
import './SoftwareDevelopment.css';
import '../../components/Hero/Hero.css'; // Reusing Hero styles
import '../../components/BenefitSection/BenefitSection.css'; // Reusing Benefit Stylings
import ClientLogos from '../../components/ClientLogos/ClientLogos';
import CustomerStories from '../../components/CustomerStories/CustomerStories';
import CTA from '../../components/cta/CTA';
import PageSkeleton from '../../components/Skeleton/PageSkeleton';

const SoftwareDevelopment = () => {
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
        <div className="software-dev-page">
            <Header />

            {/* HERO SECTION */}
            <section className="hero-section py-5">
                <div className="container">
                    <div className="row align-items-center" style={{ minHeight: '600px' }}>
                        <div className="col-lg-7">
                            <div className="hero-label">Software Engineering</div>
                            <h1 className="hero-title">
                                Engineering Software for <br />
                                <span style={{ color: 'var(--codeifyy-green)' }}>Modern</span> Businesses.
                            </h1>
                            <p className="hero-description">
                                We design and develop secure, scalable, and future-ready software solutions that solve complex business challenges and drive measurable growth.
                            </p>
                            <div className="hero-trust-line">
                                <a href="/contact" className="btn btn-codeifyy-primary  rounded-2 fw-bold">
                                    Schedule a Call <FaArrowRight className="ms-2" />
                                </a>
                            </div>
                        </div>
                        {/* Right side graphic: Development Ecosystem */}
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
                                        <span className="code-line c-gray">// Enterprise Systems</span>
                                        <span className="code-line">
                                            <span className="c-purple">const</span> <span className="c-blue">Architecture</span> = <span className="c-yellow">()</span> <span className="c-purple">=&gt;</span> {'{'}
                                        </span>
                                        <span className="code-line pl-3" style={{ paddingLeft: '1.5rem' }}>
                                            <span className="c-purple">return</span> <span className="c-green">"Scalable & Secure"</span>;
                                        </span>
                                        <span className="code-line">{'}'}</span>
                                        <br />
                                        <span className="code-line c-gray">// Cloud Integration</span>
                                        <span className="code-line">
                                            <span className="c-purple">await</span> <span className="c-blue">AWS</span>.<span className="c-yellow">deploy</span>(<span className="c-white">Microservices</span>);
                                        </span>
                                        <br />
                                        <span className="code-line c-gray">// Performance Optimization</span>
                                        <span className="code-line">
                                            <span className="c-purple">if</span> (<span className="c-white">latency</span> &gt; <span className="c-yellow">0.1</span>) {'{'}
                                        </span>
                                        <span className="code-line pl-3" style={{ paddingLeft: '1.5rem' }}>
                                            <span className="c-blue">optimize</span>(<span className="c-green">"Edge Computing"</span>);
                                        </span>
                                        <span className="code-line">{'}'}</span>
                                    </div>
                                </div>

                                {/* Floating Badges */}
                                <div className="floating-badge badge-security">
                                    <div className="badge-icon" style={{ background: '#10b981' }}><FaShieldAlt /></div>
                                    <span>Security First</span>
                                </div>

                                <div className="floating-badge badge-cloud">
                                    <div className="badge-icon" style={{ background: '#3b82f6' }}><FaCloud /></div>
                                    <span>Cloud Native</span>
                                </div>

                                <div className="floating-badge badge-performance">
                                    <div className="badge-icon" style={{ background: '#f59e0b' }}><FaRocket /></div>
                                    <span>High Performance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ClientLogos />
            </section>

            {/* FLEXIBLE TALENT CROSS-SELL (Reused from Staff Aug) */}
            <section className="section-padding" style={{ background: '#fff' }}>
                <div className="container">
                    <div className="flexible-talent-wrapper">
                        <div className="flexible-content">
                            <h2>Flexible Talent. <br />Immediate Impact.</h2>
                            <p className="hero-description">
                                Codeifyy’s Staff Augmentation services enable businesses to expand their technical capabilities quickly and efficiently.
                            </p>
                            <ul className="model-features">
                                <li><FaCheckCircle /> Access top engineering talent</li>
                                <li><FaCheckCircle /> Scale teams in 48 hours</li>
                                <li><FaCheckCircle /> Risk-free trial period</li>
                            </ul>
                            <a href="/contact" className="btn btn-codeifyy-primary ">Let's Connect</a>
                        </div>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="benefit-cards-grid">
                                <div className="stat-card animate-up delay-1">
                                    <div className="stat-value">30+</div>
                                    <div className="stat-label">IT Professionals</div>
                                </div>
                                <div className="stat-card animate-up delay-2">
                                    <div className="stat-value">15+</div>
                                    <div className="stat-label">Countries Served</div>
                                </div>
                                <div className="stat-card animate-up delay-3">
                                    <div className="stat-value">90%</div>
                                    <div className="stat-label">Retention Rate</div>
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

            {/* SERVICES GRID */}
            <section className="services-grid-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Software Development Services</h2>
                        <p className="section-subtitle">We build secure, scalable, and high-performance software tailored to your goals.</p>
                    </div>

                    <div className="services-grid">
                        {/* 01 Bespoke */}
                        <div className="service-card">
                            <span className="service-number">01</span>
                            <div className="service-content">
                                <h3 className="service-title">Bespoke Software Development</h3>
                                <p className="service-desc">We develop fully tailored applications aligned with your workflows, industry requirements, and growth goals.</p>
                                <div className="service-capabilities">
                                    <h5>Capabilities</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Custom Web Apps</li>
                                        <li><FaCheckCircle /> Internal Systems</li>
                                        <li><FaCheckCircle /> SaaS Platforms</li>
                                        <li><FaCheckCircle /> Workflow Automation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 02 ERP */}
                        <div className="service-card">
                            <span className="service-number">02</span>
                            <div className="service-content">
                                <h3 className="service-title">ERP Software <br /> Development</h3>
                                <p className="service-desc">Integrated systems for operational excellence. Unify core business functions into a centralized platform.</p>
                                <div className="service-capabilities">
                                    <h5>Capabilities</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Finance & Accounting</li>
                                        <li><FaCheckCircle /> Supply Chain Mgmt</li>
                                        <li><FaCheckCircle /> HR & Payroll</li>
                                        <li><FaCheckCircle /> Analytics Dashboards</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 03 Cloud */}
                        <div className="service-card">
                            <span className="service-number">03</span>
                            <div className="service-content">
                                <h3 className="service-title">Cloud Application Development</h3>
                                <p className="service-desc">Cloud-native systems built for scale. Deliver flexibility, high availability, and global accessibility.</p>
                                <div className="service-capabilities">
                                    <h5>Capabilities</h5>
                                    <ul>
                                        <li><FaCheckCircle /> SaaS Product Dev</li>
                                        <li><FaCheckCircle /> Cloud-Native Arch</li>
                                        <li><FaCheckCircle /> Microservices</li>
                                        <li><FaCheckCircle /> Serverless Solutions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 04 Modernization */}
                        <div className="service-card">
                            <span className="service-number">04</span>
                            <div className="service-content">
                                <h3 className="service-title">Software Modernization</h3>
                                <p className="service-desc">Transform legacy systems into scalable platforms. Re-architect for improved performance.</p>
                                <div className="service-capabilities">
                                    <h5>Capabilities</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Code Refactoring</li>
                                        <li><FaCheckCircle /> Cloud Migration</li>
                                        <li><FaCheckCircle /> UI/UX Redesign</li>
                                        <li><FaCheckCircle /> Security Upgrades</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CASE STUDIES LINK IS HANDLED BY REUSED COMPONENTS OR FUTURE SECTIONS - Placeholder here if needed */}
            <CustomerStories />
            {/* ENGAGEMENT MODELS */}
            <section className="engagement-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Engagement Models</h2>
                        <p className="section-subtitle">Flexible partnership options to match your business needs.</p>
                    </div>
                    <div className="engagement-grid">
                        <div className="engagement-card">
                            <h3>Full Outsourcing</h3>
                            <p>We take full ownership of your project lifecycle — from strategy and architecture to deployment and maintenance.</p>
                        </div>
                        <div className="engagement-card">
                            <h3>Dedicated Teams</h3>
                            <p>We assemble a custom group of developers, designers, and PMs who work exclusively on your product.</p>
                        </div>
                        <div className="engagement-card">
                            <h3>Staff Augmentation</h3>
                            <p>Strengthen your existing team with specialized expertise. Backend, Frontend, DevOps, or AI experts ready to plug in.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTEGRATED: INDUSTRIES */}
            <Industries />

            {/* INTEGRATED: TESTIMONIALS */}
            <ArticleCarousel />

            {/* INTEGRATED: TECH STACK */}
            <div className="integrated-tech-stack bg-white">
                <TechStack />
            </div>


            {/* DEVELOPMENT APPROACH */}
            <section className="approach-section">
                <div className="container">
                    <h2 className="section-title text-white">Our Development Approach</h2>
                    <p className="section-subtitle opacity-75 text-white">Structured. Agile. Results-Driven.</p>

                    <div className="approach-steps">
                        <div className="approach-step-card">
                            <FaSearch className="step-icon" />
                            <span className="step-name">Discovery</span>
                        </div>
                        <div className="approach-step-card">
                            <FaPencilRuler className="step-icon" />
                            <span className="step-name">Architecture</span>
                        </div>
                        <div className="approach-step-card">
                            <FaTasks className="step-icon" />
                            <span className="step-name">Agile Dev</span>
                        </div>
                        <div className="approach-step-card">
                            <FaBug className="step-icon" />
                            <span className="step-name">QA Testing</span>
                        </div>
                        <div className="approach-step-card">
                            <FaRocket className="step-icon" />
                            <span className="step-name">Deployment</span>
                        </div>
                        <div className="approach-step-card">
                            <FaChartLine className="step-icon" />
                            <span className="step-name">Optimization</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            {/* FINAL CTA */}
            <section className="final-cta-section mt-5" >
                <div className="container">
                    <CTA
                        title="Ready to Build Scalable Software?"
                        text="Let’s design a solution that supports your long-term growth."
                        btnText="Discuss Your Project"
                        link="/contact"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SoftwareDevelopment;
