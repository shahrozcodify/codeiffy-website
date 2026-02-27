import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import {
    FaCode, FaBrain, FaUsers, FaRocket, FaArrowRight,
    FaCheckCircle, FaLaptopCode, FaChartLine, FaCogs,
    FaShieldAlt, FaCloud, FaSearch, FaDraftingCompass,
    FaBoxOpen, FaVial, FaHeadset
} from 'react-icons/fa';
import ClientLogos from '../../components/ClientLogos/ClientLogos';
import TechStack from '../../components/TechStack/TechStack';
import Industries from '../../components/Industries/Industries';
import CustomerStories from '../../components/CustomerStories/CustomerStories';
import ArticleCarousel from '../../components/ArticleCarousel/ArticleCarousel';
import BenefitSection from '../../components/BenefitSection/BenefitSection';
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
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center hero-row">
                        <div className="col-lg-7 col-md-6">
                            <h1 className="hero-title">
                                End-to-End <br />
                                <span className="text-highlight">Technology Services</span>
                            </h1>
                            <p className="hero-description">
                                At Codeifyy, we deliver comprehensive technology services designed to help businesses innovate, scale, and operate efficiently in a digital-first world.
                            </p>
                            <div className="hero-trust-line">
                                <a href="/contact" className="btn btn-codeifyy-primary rounded-2 fw-bold px-4 py-3">
                                    Talk to Us <FaArrowRight className="ms-2" />
                                </a>
                            </div>
                        </div>
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
                                        <span className="code-line c-gray">// End-to-End Solutions</span>
                                        <span className="code-line">
                                            <span className="c-purple">const</span> <span className="c-blue">Services</span> = <span className="c-yellow">()</span> <span className="c-purple">=&gt;</span> {'{'}
                                        </span>
                                        <span className="code-line indent">
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
                                        <span className="code-line indent">
                                            <span className="c-blue">scale</span>(<span className="c-green">"Unlimited"</span>);
                                        </span>
                                        <span className="code-line">{'}'}</span>
                                    </div>
                                </div>

                                {/* Floating Badges */}
                                <div className="floating-badge badge-security">
                                    <div className="badge-icon icon-security"><FaShieldAlt /></div>
                                    <span>Expertise</span>
                                </div>

                                <div className="floating-badge badge-cloud">
                                    <div className="badge-icon icon-cloud"><FaCloud /></div>
                                    <span>Scalability</span>
                                </div>

                                <div className="floating-badge badge-performance">
                                    <div className="badge-icon icon-performance"><FaRocket /></div>
                                    <span>Performance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ClientLogos />
            </section>

            {/* BENEFIT SECTION - REPLACING MANUALLY CODED STATS SECTION */}
            <BenefitSection
                label="Capabilities & Scale"
                title={
                    <>
                        Flexible Talent. <br />Immediate Impact.
                    </>
                }
                description="Codeifyy’s services enable businesses to expand their technical capabilities quickly and efficiently. We provide the expertise you need, when you need it, ensuring your projects remain on track and high-performing."
                features={[
                    <><FaCheckCircle /> Access engineering talent</>,
                    <><FaCheckCircle /> Scale high-performing teams in 48 hours</>,
                    <><FaCheckCircle /> Risk-free 2-week trial period</>
                ]}
                buttonText="Let's Connect"
                buttonLink="/contact"
                stats={[
                    { value: "750+", label: "IT Professionals" },
                    { value: "500+", label: "Developers" },
                    { value: "45+", label: "Project Managers" },
                    { value: "Global", label: "Delivery Experts" }
                ]}
                showBottomMetrics={false}
            />

            {/* CORE SERVICES SECTION */}
            <section className="core-services-section section-padding">
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
                                </ul>
                                <Link to="/services/software-development" className="explore-link">Explore Software Development <FaArrowRight /></Link>
                            </div>
                        </div>

                        {/* AI Services */}
                        <div className="col-lg-6">
                            <div className="service-overview-card">
                                <span className="service-number">02</span>
                                <div className="service-overview-icon"><FaBrain /></div>
                                <h3 className="service-overview-title">Artificial Intelligence</h3>
                                <p className="service-overview-desc">Intelligent systems that automate processes and enable data-driven decision-making.</p>
                                <ul className="service-features-list">
                                    <li><span className="bullet-dot">•</span> AI Strategy & Consulting</li>
                                    <li><span className="bullet-dot">•</span> Machine Learning Development</li>
                                    <li><span className="bullet-dot">•</span> Generative AI Integration</li>
                                    <li><span className="bullet-dot">•</span> Chatbots & Virtual Assistants</li>
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
                                    <li><span className="bullet-dot">•</span> Dedicated Development Team</li>
                                    <li><span className="bullet-dot">•</span> Full-Project Outsourcing</li>
                                    <li><span className="bullet-dot">•</span> On-demand Staff scaling</li>
                                    <li><span className="bullet-dot">•</span> Remote Engineering talent</li>
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
                                    <li><span className="bullet-dot">•</span> MVP Development & Launch</li>
                                    <li><span className="bullet-dot">•</span> UI/UX Experience Design</li>
                                    <li><span className="bullet-dot">•</span> Modern Architecture Design</li>
                                </ul>
                                <Link to="/services/product-development" className="explore-link">Explore Product Engineering <FaArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUSINESS SOLUTIONS SECTION */}
            <section className="business-solutions-section section-padding">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Business Solutions We Provide</h2>
                        <p className="section-subtitle">We deliver ready-to-deploy, customizable business systems designed to solve operational challenges.</p>
                    </div>

                    <div className="solution-card-grid">
                        <div className="solution-card">
                            <span className="solution-number">01</span>
                            <h3 className="solution-title">Customer Relationship Management (CRM)</h3>
                            <p className="solution-desc">Centralize customer data, streamline sales pipelines, and improve customer retention.</p>
                            <ul className="service-features-list solution-features">
                                <li><span className="bullet-dot">•</span> Lead & pipeline management</li>
                                <li><span className="bullet-dot">•</span> Customer tracking & insights</li>
                                <li><span className="bullet-dot">•</span> Sales automation</li>
                                <li><span className="bullet-dot">•</span> Reporting & analytics</li>
                            </ul>
                        </div>

                        <div className="solution-card">
                            <span className="solution-number">02</span>
                            <h3 className="solution-title">Content Management (CMS)</h3>
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
            <section className="services-approach-section section-padding">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title text-white">Our Strategic Approach</h2>
                        <p className="section-subtitle text-white opacity-75">We follow a structured, transparent delivery process to ensure successful outcomes.</p>
                    </div>

                    <div className="services-approach-grid">
                        {[
                            { step: 1, title: 'Discovery & Strategy', desc: 'Understanding business goals and defining the technology roadmap.' },
                            { step: 2, title: 'Design & Architecture', desc: 'Creating scalable, secure, and future-proof system architecture.' },
                            { step: 3, title: 'Development & Build', desc: 'Building high-performance solutions aligned with your requirements.' },
                            { step: 4, title: 'Testing & QA', desc: 'Ensuring reliability, security, and seamless deployment.' },
                            { step: 5, title: 'Support & Scale', desc: 'Continuous monitoring, improvements, and performance enhancements.' }
                        ].map((item, index) => (
                            <div key={index} className="approach-card-simple">
                                <span className="approach-number">0{item.step}</span>
                                <h3 className="approach-title-simple">{item.title}</h3>
                                <p className="approach-desc-simple">{item.desc}</p>
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
            <section className="final-cta-section mt-5">
                <div className="container">
                    <CTA
                        title="Ready to Build Something Scalable?"
                        text="Whether you need custom development, AI solutions, or a dedicated team — we’re ready to help you accelerate your digital journey."
                        btnText="Speak with an Expert"
                        link="/contact"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;
