import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
    FaRocket, FaPencilRuler, FaUserTie, FaCheckCircle, FaLaptopCode, FaCogs,
    FaMobileAlt, FaCloud, FaShieldAlt, FaArrowRight, FaUsers, FaChartLine
} from 'react-icons/fa';
import ClientLogos from '../../components/ClientLogos/ClientLogos';
import '../../components/Hero/Hero.css';
import '../../components/BenefitSection/BenefitSection.css';
import Industries from '../../components/Industries/Industries';
import TechStack from '../../components/TechStack/TechStack';
import ArticleCarousel from '../../components/ArticleCarousel/ArticleCarousel';
import ProductDeliveryApproach from '../../components/ProductDeliveryApproach/ProductDeliveryApproach';
import './ProductDevelopment.css';
import CustomerStories from '../../components/CustomerStories/CustomerStories';
import BenefitSection from '../../components/BenefitSection/BenefitSection';
import CTA from '../../components/cta/CTA';
import PageSkeleton from '../../components/Skeleton/PageSkeleton';


import SEO from '../../components/SEO/SEO';

const ProductDevelopment = () => {
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

    const services = [
        {
            title: "Development Consulting",
            subtitle: "Strategic Direction Before Execution",
            description: "Successful products begin with strategic clarity.",
            capabilitiesHeading: "Our development consulting services help you:",
            capabilities: ["Validate product feasibility", "Define product scope and roadmap", "Identify risks and technical constraints", "Select optimal technology stacks", "Plan scalable architecture"],
            closingLine: "We ensure your product vision is technically sound, strategically aligned, and ready for execution.",
            bestFor: ["Early-stage product ideas", "Scaling product teams", "Businesses entering new digital markets"]
        },
        {
            title: "Product Development",
            subtitle: "Agile, Scalable, Market-Ready Solutions",
            description: "We build robust product features and modules tailored to your roadmap and growth objectives.",
            capabilitiesHeading: "Our approach includes:",
            capabilities: ["MVP development", "Iterative feature expansion", "Agile sprint-based delivery", "Modular engineering architecture", "Secure and scalable backend systems"],
            closingLine: "Whether launching a new SaaS platform or expanding an enterprise solution, we ensure predictable, high-quality delivery."
        },
        {
            title: "Product Design",
            subtitle: "Designing Competitive Digital Experiences",
            description: "We research, define, and shape the product vision before development begins.",
            capabilitiesHeading: "Our product design process includes:",
            capabilities: ["Market and competitor research", "Product positioning strategy", "Feature definition & prioritization", "Concept validation", "Functional documentation"],
            closingLine: "We transform ideas into structured product blueprints ready for engineering."
        },
        {
            title: "Architecture Design",
            subtitle: "Engineering for Scalability & Performance",
            description: "Strong architecture determines long-term product stability.",
            capabilitiesHeading: "We design:",
            capabilities: ["Multi-tenant product architectures", "High-availability systems", "Microservices frameworks", "Secure data infrastructures", "Scalable cloud-native systems"],
            closingLine: "Every architecture is built to support performance, user growth, and long-term evolution."
        },
        {
            title: "UI & UX Design",
            subtitle: "User-Centered Interfaces That Drive Adoption",
            description: "We create intuitive, engaging, and conversion-focused product interfaces.",
            capabilitiesHeading: "Our UI/UX services include:",
            capabilities: ["User journey mapping", "Wireframing & prototyping", "Interaction design", "Design systems creation", "Usability testing"],
            closingLine: "We ensure your product is not only functional — but desirable and intuitive."
        },
        {
            title: "API Development",
            subtitle: "Secure, Scalable System Connectivity",
            description: "We build robust APIs and integration frameworks that connect your product to external systems and services.",
            capabilitiesHeading: "Our API capabilities include:",
            capabilities: ["RESTful API development", "Third-party system integration", "Payment gateway integration", "CRM/ERP integrations", "Secure authentication mechanisms"],
            closingLine: "This ensures smooth interoperability and ecosystem expansion."
        },
        {
            title: "Testing & Quality Assurance",
            subtitle: "Quality Engineered into Every Release",
            description: "We conduct comprehensive testing across all product layers.",
            capabilitiesHeading: "Our QA processes include:",
            capabilities: ["Functional testing", "Performance testing", "Security testing", "Usability testing", "Automated testing frameworks"],
            closingLine: "We eliminate vulnerabilities and performance gaps before deployment."
        },
        {
            title: "Support & Maintenance",
            subtitle: "Continuous Optimization for Long-Term Success",
            description: "Product development doesn't stop at launch.",
            capabilitiesHeading: "We provide structured post-release support including:",
            capabilities: ["Performance monitoring", "Proactive updates", "Bug fixes & feature enhancements", "Infrastructure management", "Security patches"],
            closingLine: "We ensure your product remains stable, competitive, and future-ready."
        }
    ];


    return (
        <div className="product-development-page">
            {/* <title>Full-Cycle Product Development | Codeifyy</title>
            <meta name="description" content="From idea to MVP to enterprise scale—Codeifyy delivers end-to-end product development services." /> */}

            <Header />

            <main style={{ background: 'var(--background)' }}>
                {/* HERO SECTION */}
                {/* HERO SECTION */}
                <section className="hero-section">
                    <div className="container">
                        <div className="row align-items-center hero-row">
                            <div className="col-lg-7 col-md-6">
                                <div className="hero-label">Product Engineering Services</div>
                                <h1 className="hero-title">
                                    Full-Cycle Product <br />
                                    <span style={{ color: 'var(--codeifyy-green)' }}>Development</span>
                                </h1>
                                <p className="hero-description">
                                    We partner with startups, enterprises, and innovators to design, build, and scale digital products that deliver real user value and measurable business growth.
                                </p>
                                <div className="hero-trust-line">
                                    <a href="#contact" className="btn btn-codeifyy-primary rounded-2 fw-bold px-4 py-3">
                                        Discuss Your Idea <FaArrowRight className="ms-2" />
                                    </a>
                                </div>
                            </div>
                            {/* Right side graphic: Code Window Visual */}
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
                                            <span className="code-line c-gray">// Product Launch Strategy</span>
                                            <span className="code-line">
                                                <span className="c-purple">const</span> <span className="c-blue">MVP</span> = <span className="c-yellow">()</span> <span className="c-purple">=&gt;</span> {'{'}
                                            </span>
                                            <span className="code-line pl-3" style={{ paddingLeft: '1.5rem' }}>
                                                <span className="c-purple">return</span> <span className="c-green">"Market Ready"</span>;
                                            </span>
                                            <span className="code-line">{'}'}</span>
                                            <br />
                                            <span className="code-line c-gray">// Features & UI</span>
                                            <span className="code-line">
                                                <span className="c-purple">await</span> <span className="c-blue">UserJourney</span>.<span className="c-yellow">optimize</span>(<span className="c-white">UX</span>);
                                            </span>
                                            <br />
                                            <span className="code-line c-gray">// Growth & Scale</span>
                                            <span className="code-line">
                                                <span className="c-purple">if</span> (<span className="c-white">users</span> &gt; <span className="c-yellow">1M</span>) {'{'}
                                            </span>
                                            <span className="code-line pl-3" style={{ paddingLeft: '1.5rem' }}>
                                                <span className="c-blue">deploy</span>(<span className="c-green">"Auto-Scaling"</span>);
                                            </span>
                                            <span className="code-line">{'}'}</span>
                                        </div>
                                    </div>

                                    {/* Floating Badges */}
                                    <div className="floating-badge badge-security">
                                        <div className="badge-icon" style={{ background: '#10b981' }}><FaRocket /></div>
                                        <span>Market Ready</span>
                                    </div>

                                    <div className="floating-badge badge-cloud">
                                        <div className="badge-icon" style={{ background: '#3b82f6' }}><FaUsers /></div>
                                        <span>User Centric</span>
                                    </div>

                                    <div className="floating-badge badge-performance">
                                        <div className="badge-icon" style={{ background: '#f59e0b' }}><FaChartLine /></div>
                                        <span>Scalable Growth</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ClientLogos />
                </section>

                {/* TRUST MARQUEE */}
                {/* <div style={{ background: 'white', padding: '1.5rem 0', borderBottom: '1px solid #f1f5f9' }}>
                    <div className="container">
                        <p className="text-center text-muted small fw-bold mb-3 text-uppercase tracking-wider">Trusted by Innovative Companies</p>
                        <ClientLogos />
                    </div>
                </div> */}

                <BenefitSection
                    label=""
                    title={
                        <>
                            Build Scalable.<br />
                            Market-Ready Products.
                        </>
                    }
                    description="At Codeifyy, product development goes beyond coding. We combine product strategy, UX thinking, and scalable engineering to transform ideas into successful digital solutions."
                    buttonText="Discuss Your Product"
                    buttonLink="/contact"
                    stats={[
                        { value: "30+", label: "IT Professionals" },
                        { value: "15+", label: "Countries Served" },
                        { value: "90%", label: "Retention Rate" },
                        { value: "Certified", label: "Platform Experts" }
                    ]}
                    showBottomMetrics={false}
                />

                {/* OUR PRODUCT DEVELOPMENT SERVICES */}
                <section className="services-grid-section">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="section-title">
                                Our Product Development Services
                            </h2>
                        </div>
                        <div className="services-grid">
                            {services.map((service, index) => (
                                <div key={index} className="service-card">
                                    <span className="service-number">{(index + 1).toString().padStart(2, '0')}</span>
                                    <div className="service-content">
                                        <h3 className="service-title">{service.title}</h3>
                                        {service.subtitle && <p className="service-desc">{service.subtitle}</p>}
                                        <p className="service-detail">{service.description}</p>
                                        <div className="service-capabilities">
                                            <h5>{service.capabilitiesHeading}</h5>
                                            <ul>
                                                {service.capabilities.map((cap, i) => (
                                                    <li key={i}>
                                                        <FaCheckCircle /> {cap}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {service.closingLine && <p className="service-detail">{service.closingLine}</p>}
                                        {service.bestFor && (
                                            <div className="service-capabilities">
                                                <h5>BEST FOR</h5>
                                                <ul>
                                                    {service.bestFor.map((item, i) => (
                                                        <li key={i}>
                                                            <FaCheckCircle /> {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* WHY CODEIFYY */}
                <section className="section-padding bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 className="section-title text-start">Why Codeifyy For Product Development?</h2>
                                <p className="lead mb-4">We build digital products designed not just to launch — but to lead.</p>
                                <ul className="list-unstyled" style={{ fontSize: '1.1rem' }}>
                                    <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: 'var(--codeifyy-green)' }} /> Business-aligned product strategy</li>
                                    <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: 'var(--codeifyy-green)' }} /> Agile engineering excellence</li>
                                    <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: 'var(--codeifyy-green)' }} /> Scalable architecture design</li>
                                    <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: 'var(--codeifyy-green)' }} /> Security-first mindset</li>
                                    <li className="mb-3"><FaCheckCircle className="me-2" style={{ color: 'var(--codeifyy-green)' }} /> Long-term product partnership</li>
                                </ul>
                                <div className="mt-4">
                                    <a href="#contact" className="btn btn-codeifyy-primary mb-4 btn-lg">Discuss Your Product</a>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                {/* Placeholder for an image or graphic if needed, or keeping it clean */}
                                <div style={{ background: 'var(--codeifyy-navy)', padding: '3rem', borderRadius: '20px', color: 'white', textAlign: 'center' }}>
                                    <FaLaptopCode style={{ fontSize: '5rem', marginBottom: '1.5rem', opacity: '0.9' }} />
                                    <h3>Partner with Experts</h3>
                                    <p>Our team acts as an extension of your business, driving technical excellence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SERVICE MODELS */}
                <section className="section-padding">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="section-title">Which Service Model Do You Need?</h2>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="service-model-card p-4 p-lg-5 h-100 rounded-4" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                                    <h3 className="model-title">Product Outsourcing</h3>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                        We deliver end-to-end outsourced software product development to help you launch a new solution or enhance products already on the market.
                                    </p>
                                    <a href="/contact" className="btn btn-codeifyy-primary">Outsource Product Development</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="service-model-card p-4 p-lg-5 h-100 rounded-4" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                                    <h3 className="model-title">Team Augmentation</h3>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                        We provide competent resources for design, programming, testing, and any other tasks to drive your product development ahead.
                                    </p>
                                    <a href="/contact" className="btn btn-codeifyy-primary">Hire Your Team</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INDUSTRY EXPERTISE */}
                <section className="section-padding-md">
                    <Industries />
                </section>

                {/* CASE STUDIES */}
                <section className="section-padding-md">
                    <CustomerStories />
                </section>

                {/* TECH STACK */}
                <section className="section-padding-md">
                    <TechStack />
                </section>

                {/* TESTIMONIALS */}
                <section className="section-padding-md">
                    <ArticleCarousel />
                </section>

                {/* DELIVERY APPROACH */}
                <ProductDeliveryApproach />

                {/* FINAL CTA */}
                {/* FINAL CTA */}
                <section className="section-padding text-center" >
                    <div className="container">
                        <CTA
                            title="Have a Product Vision Ready to Build?"
                            text="Let’s turn it into a scalable, high-performance digital solution."
                            btnText="Let’s Build Your Product"
                            link="/contact"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDevelopment;

