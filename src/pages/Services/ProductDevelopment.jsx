import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
    FaRocket, FaPencilRuler, FaUserTie, FaCheckCircle, FaLaptopCode, FaCogs,
    FaMobileAlt, FaCloud, FaShieldAlt, FaArrowRight, FaUsers, FaChartLine
} from 'react-icons/fa';
import ClientLogos from '../../components/ClientLogos/ClientLogos';
import '../../components/Hero/Hero.css';
import '../../components/BenefitSection/BenefitSection.css'; // Reusing Benefit styles
import Industries from '../../components/Industries/Industries';
import TechStack from '../../components/TechStack/TechStack';
import CustomerStories from '../../components/CustomerStories/CustomerStories';
import ArticleCarousel from '../../components/ArticleCarousel/ArticleCarousel';
import ProductDeliveryApproach from '../../components/ProductDeliveryApproach/ProductDeliveryApproach';
import CTA from '../../components/cta/CTA';


const ProductDevelopment = () => {
    const services = [
        {
            title: "Development Consulting",
            description: "Successful products begin with strategic clarity. Our consulting services ensure your vision is technically sound.",
            capabilities: ["Validate product feasibility", "Define scope and roadmap", "Select optimal tech stack", "Cost & timeline estimation"]
        },
        {
            title: "Product Development",
            description: "We build robust product features tailored to your roadmap, from MVP to enterprise solutions.",
            capabilities: ["MVP development", "Iterative feature expansion", "Secure backend systems", "Cloud-native architecture"]
        },
        {
            title: "Product Design",
            description: "We research, define, and shape the product vision before development begins.",
            capabilities: ["Market & competitor research", "Feature definition", "Concept validation", "User flow mapping"]
        },
        {
            title: "Architecture Design",
            description: "Strong architecture determines long-term stability. We design for high availability and growth.",
            capabilities: ["Multi-tenant architectures", "Microservices frameworks", "Scalable cloud systems", "Database optimization"]
        },
        {
            title: "UI & UX Design",
            description: "We create intuitive, engaging, and conversion-focused product interfaces.",
            capabilities: ["User journey mapping", "Wireframing & prototyping", "Design systems", "Interactive mockups"]
        },
        {
            title: "API Development",
            description: "We build robust APIs connecting your product to external systems and services.",
            capabilities: ["RESTful API development", "Payment & CRM integrations", "Secure authentication", "Third-party connectivity"]
        },
        {
            title: "Testing & QA",
            description: "Comprehensive testing across all product layers to eliminate vulnerabilities.",
            capabilities: ["Functional & Performance testing", "Security testing", "Automated testing", "Load balancing checks"]
        },
        {
            title: "Support & Maintenance",
            description: "We ensure your product remains stable, competitive, and future-ready post-launch.",
            capabilities: ["Performance monitoring", "Updates & bug fixes", "Security patches", "Feature enhancements"]
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
                <section className="hero-section py-5">
                    <div className="container">
                        <div className="row align-items-center" style={{ minHeight: '600px' }}>
                            <div className="col-lg-7">
                                <div className="hero-label">Product Engineering</div>
                                <h1 className="hero-title">
                                    Full-Cycle Product <br />
                                    <span style={{ color: 'var(--codeifyy-green)' }}>Development</span>
                                </h1>
                                <p className="hero-description">
                                    From idea to MVP to enterprise scale—Codeifyy delivers end-to-end product development services that turn vision into market reality.
                                </p>
                                <div className="hero-trust-line">
                                    <a href="#contact" className="btn btn-codeifyy-primary rounded-2 fw-bold px-4 py-3">
                                        Discuss Your Idea <FaArrowRight className="ms-2" />
                                    </a>
                                </div>
                            </div>
                            {/* Right side graphic: Code Window Visual */}
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

                {/* STATS / BENEFITS SECTION */}
                <section className="section-padding bg-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--codeifyy-navy)', lineHeight: 1.2 }}>
                                    Build Scalable.<br />
                                    Market-Ready Products.
                                </h2>
                                <p className="lead text-muted mt-3">
                                    Our product development teams bring years of expertise to help you build software that scales with your business.
                                </p>
                            </div>
                            <div className="col-lg-7">
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

                {/* OUR PRODUCT DEVELOPMENT SERVICES */}
                <section className="services-grid-section">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--codeifyy-navy)' }}>
                                Our product development services
                            </h2>
                        </div>
                        <div className="services-grid">
                            {services.map((service, index) => (
                                <div key={index} className="service-card">
                                    <span className="service-number">{(index + 1).toString().padStart(2, '0')}</span>
                                    <div className="service-content">
                                        <h3 className="service-title">{service.title}</h3>
                                        <p className="service-desc">{service.description}</p>
                                        <div className="service-capabilities">
                                            <h5>Capabilities</h5>
                                            <ul>
                                                {service.capabilities.map((cap, i) => (
                                                    <li key={i}>
                                                        <FaCheckCircle /> {cap}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-5">
                            <a href="#contact" className="btn btn-codeifyy-primary mb-4 btn-lg">Discuss Your Product</a>
                        </div>
                    </div>
                </section>

                {/* WHY CODEIFYY */}
                <section className="section-padding bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Why Codeifyy For Product Development?</h2>
                                <p className="lead mb-4">We build digital products designed not just to launch — but to lead.</p>
                                <ul className="list-unstyled" style={{ fontSize: '1.1rem' }}>
                                    <li className="mb-3"><FaCheckCircle className="text-success me-2" /> Business-aligned product strategy</li>
                                    <li className="mb-3"><FaCheckCircle className="text-success me-2" /> Agile engineering excellence</li>
                                    <li className="mb-3"><FaCheckCircle className="text-success me-2" /> Scalable architecture design</li>
                                    <li className="mb-3"><FaCheckCircle className="text-success me-2" /> Security-first mindset</li>
                                    <li className="mb-3"><FaCheckCircle className="text-success me-2" /> Long-term product partnership</li>
                                </ul>
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
                            <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>Which Service Model Do You Need?</h2>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="p-5 h-100 rounded-3" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                                    <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Product Outsourcing</h3>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                        We deliver end-to-end outsourced software product development to help you launch a new solution or enhance products already on the market.
                                    </p>
                                    <a href="#contact" className="btn btn-codeifyy-primary">Outsource Product Development</a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="p-5 h-100 rounded-3" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                                    <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>Team Augmentation</h3>
                                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                                        We provide competent resources for design, programming, testing, and any other tasks to drive your product development ahead.
                                    </p>
                                    <a href="#contact" className="btn btn-codeifyy-primary">Hire Your Team</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INDUSTRY EXPERTISE */}
                <Industries />

                {/* CASE STUDIES */}
                <CustomerStories />

                {/* TECH STACK */}
                <TechStack />

                {/* TESTIMONIALS */}
                <ArticleCarousel />

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

