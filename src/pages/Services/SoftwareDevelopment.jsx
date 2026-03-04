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
import BenefitSection from '../../components/BenefitSection/BenefitSection';
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
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center hero-row">
                        <div className="col-lg-7 col-md-6">
                            <div className="hero-label">Software Engineering Services</div>
                            <h1 className="hero-title">
                                Engineering Software for <br />
                                <span style={{ color: 'var(--codeifyy-green)' }}>Modern</span> Businesses.
                            </h1>
                            <p className="hero-description">
                                We design and develop secure, scalable, and future-ready software solutions that solve complex business challenges and drive measurable growth.
                            </p>
                            <div className="hero-trust-line">
                                <a href="/contact" className="btn btn-codeifyy-primary rounded-2 fw-bold px-4 py-3">
                                    Schedule a Call <FaArrowRight className="ms-2" />
                                </a>
                            </div>
                        </div>
                        {/* Right side graphic: Development Ecosystem */}
                        <div className="col-lg-5 col-md-6 d-none d-md-block">
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

            <BenefitSection
                label=""
                title={
                    <>
                        Flexible Talent. <br />Immediate Impact.
                    </>
                }
                description="Codeifyy’s Staff Augmentation services enable businesses to expand their technical capabilities quickly and efficiently."
                features={[
                    <><FaCheckCircle /> Access top engineering talent </>,
                    <><FaCheckCircle /> Scale teams in 48 hours</>,
                    <><FaCheckCircle /> Risk-free trial period</>
                ]}
                buttonText="Let's Connect"
                buttonLink="/contact"
                stats={[
                    { value: "30+", label: "IT Professionals" },
                    { value: "15+", label: "Countries Served" },
                    { value: "90%", label: "Retention Rate" },
                    { value: "Certified", label: "Platform Experts" }
                ]}
                showBottomMetrics={false}
            />

            {/* SERVICES GRID */}
            <section className="services-grid-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Software Development Services</h2>
                        <p className="section-subtitle">We build secure, scalable, and high-performance software tailored to your goals. Our engineering approach ensures clean architecture, reliable delivery, and products built to evolve with your business.</p>
                    </div>

                    <div className="services-grid">
                        {/* 01 Bespoke */}
                        <div className="service-card">
                            <span className="service-number">01</span>
                            <div className="service-content">
                                <h3 className="service-title">Bespoke Software Development</h3>
                                <p className="service-detail">We develop fully tailored applications aligned with your workflows, industry requirements, and growth goals.</p>
                                <div className="service-capabilities">
                                    <h5>Our capabilities include:</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Custom web applications</li>
                                        <li><FaCheckCircle /> Internal business systems</li>
                                        <li><FaCheckCircle /> SaaS platforms</li>
                                        <li><FaCheckCircle /> Customer-facing portals</li>
                                        <li><FaCheckCircle /> Workflow automation systems</li>
                                    </ul>
                                </div>
                                <p className="service-detail">Every solution is engineered for scalability, maintainability, and long-term performance.</p>
                            </div>
                        </div>

                        {/* 02 ERP */}
                        <div className="service-card">
                            <span className="service-number">02</span>
                            <div className="service-content">
                                <h3 className="service-title">ERP Software Development</h3>
                                <p className="service-desc">Integrated Systems for Operational Excellence</p>
                                <p className="service-detail">We design and develop ERP solutions that unify core business functions into a centralized, streamlined platform.</p>
                                <div className="service-capabilities">
                                    <h5>ERP capabilities include:</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Finance & accounting modules</li>
                                        <li><FaCheckCircle /> Inventory & supply chain management</li>
                                        <li><FaCheckCircle /> HR & payroll systems</li>
                                        <li><FaCheckCircle /> CRM integration</li>
                                        <li><FaCheckCircle /> Reporting & analytics dashboards</li>
                                    </ul>
                                </div>
                                <p className="service-detail">Our ERP solutions improve visibility, reduce inefficiencies, and enable data-driven decision-making.</p>
                            </div>
                        </div>

                        {/* 03 Cloud */}
                        <div className="service-card">
                            <span className="service-number">03</span>
                            <div className="service-content">
                                <h3 className="service-title">Cloud Application Development</h3>
                                <p className="service-desc">Cloud-Native Systems Built for Scale</p>
                                <p className="service-detail">We design and deploy cloud-based applications that deliver flexibility, high availability, and global accessibility.</p>
                                <div className="service-capabilities">
                                    <h5>Our cloud expertise covers:</h5>
                                    <ul>
                                        <li><FaCheckCircle /> SaaS product development</li>
                                        <li><FaCheckCircle /> Cloud-native architecture</li>
                                        <li><FaCheckCircle /> Microservices implementation</li>
                                        <li><FaCheckCircle /> Serverless solutions</li>
                                        <li><FaCheckCircle /> Secure cloud deployments</li>
                                    </ul>
                                </div>
                                <p className="service-detail">Built for performance, elasticity, and long-term cost efficiency.</p>
                            </div>
                        </div>

                        {/* 04 Modernization */}
                        <div className="service-card">
                            <span className="service-number">04</span>
                            <div className="service-content">
                                <h3 className="service-title">Software Modernization</h3>
                                <p className="service-desc">Transform Legacy Systems into Scalable Platforms</p>
                                <p className="service-detail">We help businesses modernize outdated systems and re-architect applications for improved performance and scalability.</p>
                                <div className="service-capabilities">
                                    <h5>Modernization services include:</h5>
                                    <ul>
                                        <li><FaCheckCircle /> Code refactoring</li>
                                        <li><FaCheckCircle /> Cloud migration</li>
                                        <li><FaCheckCircle /> UI/UX redesign</li>
                                        <li><FaCheckCircle /> Monolith-to-microservices transformation</li>
                                        <li><FaCheckCircle /> Security upgrades</li>
                                    </ul>
                                </div>
                                <p className="service-detail">Future-proof your technology investments while minimizing operational disruption.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CASE STUDIES */}
            <section className="section-padding-md">
                <CustomerStories />
            </section>
            {/* ENGAGEMENT MODELS */}
            <section className="engagement-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Engagement Models for Software Development</h2>
                        <p className="section-subtitle">At Codeifyy, we partner with businesses to design, build, scale, and optimize digital products. From concept validation to post-launch support, we deliver tailored software solutions aligned with your business goals, timelines, and growth plans.</p>
                    </div>
                    <div className="engagement-grid">
                        <div className="engagement-card">
                            <h3>Full Software Development Outsourcing</h3>
                            <p>We take full ownership of your project lifecycle — from strategy and architecture to deployment and maintenance. Our cross-functional team handles planning, UI/UX design, development, testing, and delivery under one roof.</p>
                        </div>
                        <div className="engagement-card">
                            <h3>Dedicated Development Teams</h3>
                            <p>We assemble a custom group of developers, designers, QA engineers, and project managers who work exclusively on your product. The team integrates with your internal workflows, giving you flexibility, scalability, and complete visibility.</p>
                        </div>
                        <div className="engagement-card">
                            <h3>Staff Augmentation</h3>
                            <p>Strengthen your existing team with specialized expertise. Whether you require backend engineers, frontend specialists, mobile app developers, DevOps professionals, or AI experts, we provide skilled professionals ready to plug into your project and accelerate delivery.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTEGRATED: INDUSTRIES */}
            <section className="section-padding-md">
                <Industries />
            </section>

            {/* INTEGRATED: TESTIMONIALS */}
            <section className="section-padding-md">
                <ArticleCarousel />
            </section>

            {/* INTEGRATED: TECH STACK */}
            <section className="section-padding-md integrated-tech-stack bg-white">
                <TechStack />
            </section>


            {/* DEVELOPMENT APPROACH */}
            <section className="approach-section">
                <div className="container">
                    <h2 className="section-title text-white">Our Development Approach</h2>
                    <p className="section-subtitle opacity-75 text-white">Structured. Agile. Results-Driven.</p>
                    <p className="text-white opacity-75 text-center mb-4">We follow a disciplined engineering lifecycle:</p>

                    <div className="approach-steps">
                        <div className="approach-step-card">
                            <FaSearch className="step-icon" />
                            <span className="step-name">Discovery & Planning</span>
                        </div>
                        <div className="approach-step-card">
                            <FaPencilRuler className="step-icon" />
                            <span className="step-name">Architecture Design</span>
                        </div>
                        <div className="approach-step-card">
                            <FaTasks className="step-icon" />
                            <span className="step-name">Agile Development</span>
                        </div>
                        <div className="approach-step-card">
                            <FaBug className="step-icon" />
                            <span className="step-name">Quality Assurance</span>
                        </div>
                        <div className="approach-step-card">
                            <FaRocket className="step-icon" />
                            <span className="step-name">Deployment</span>
                        </div>
                        <div className="approach-step-card">
                            <FaChartLine className="step-icon" />
                            <span className="step-name">Continuous Optimization</span>
                        </div>
                    </div>

                    <p className="text-white opacity-75 text-center mt-4">Every phase is executed with transparency, documentation, and measurable milestones.</p>
                </div>
            </section>

            {/* FINAL CTA */}
            {/* FINAL CTA */}
            <section className=" final-cta-section mt-5" >
                <div className="container">
                    <CTA
                        title="Ready to Build Dependable, Scalable Software?"
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
