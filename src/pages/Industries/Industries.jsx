import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {
    FaCar, FaLaptopCode, FaIndustry, FaOilCan,
    FaShoppingCart, FaGraduationCap, FaCoins,
    FaCalculator, FaHome, FaPassport, FaGamepad,
    FaArrowRight, FaCity, FaCheckCircle, FaCogs, FaCloud, FaUserCog, FaBrain, FaChartLine
} from 'react-icons/fa';
import ClientLogos from '../../components/ClientLogos/ClientLogos';
import CustomerStories from '../../components/CustomerStories/CustomerStories';
import ArticleCarousel from '../../components/ArticleCarousel/ArticleCarousel';
import './Industries.css';
import '../../components/Hero/Hero.css';
import '../../components/BenefitSection/BenefitSection.css';

const Industries = () => {
    const industryData = [
        {
            name: 'Automobile',
            icon: <FaCar />,
            desc: 'The automotive sector requires precision, supply chain visibility, and intelligent production systems.',
            supports: [
                'ERP for production & inventory management',
                'Supply chain automation',
                'Dealer management systems',
                'Predictive maintenance solutions',
                'AI-driven analytics dashboards'
            ]
        },
        {
            name: 'Information Technology',
            icon: <FaLaptopCode />,
            desc: 'IT companies demand scalable, secure, and high-performance systems to support rapid growth.',
            supports: [
                'SaaS platform development',
                'API architecture & integrations',
                'Cloud-native applications',
                'AI feature integration',
                'DevOps & infrastructure automation'
            ]
        },
        {
            name: 'Manufacturing',
            icon: <FaIndustry />,
            desc: 'Manufacturers require operational visibility, process optimization, and automated workflows.',
            supports: [
                'ERP systems',
                'Inventory & warehouse management',
                'AI-based demand forecasting',
                'Data analytics dashboards'
            ]
        },
        {
            name: 'Oil & Gas',
            icon: <FaOilCan />,
            desc: 'Oil & Gas operations demand secure, data-driven, and compliance-ready technology solutions.',
            supports: [
                'Asset management systems',
                'Workflow automation',
                'Field operations tracking',
                'Compliance reporting systems',
                'Predictive maintenance analytics'
            ]
        },
        {
            name: 'Ecommerce & Retail',
            icon: <FaShoppingCart />,
            desc: 'Retail businesses require real-time transaction management and customer engagement tools.',
            supports: [
                'POS & inventory systems',
                'E-commerce platform development',
                'CRM integration',
                'AI-driven demand forecasting',
                'Sales & analytics dashboards'
            ]
        },
        {
            name: 'Education',
            icon: <FaGraduationCap />,
            desc: 'Educational institutions need centralized platforms for academic and operational efficiency.',
            supports: [
                'School Management Systems',
                'Student portals',
                'Attendance & examination tracking',
                'Online fee management',
                'Reporting & performance dashboards'
            ]
        },
        {
            name: 'Fintech',
            icon: <FaCoins />,
            desc: 'Fintech companies require scalable, secure, and compliance-driven platforms.',
            supports: [
                'Financial system development',
                'Fraud detection models',
                'AI-based risk assessment',
                'Secure mobile & web apps',
                'API-driven integrations'
            ]
        },
        {
            name: 'Accounting',
            icon: <FaCalculator />,
            desc: 'Accounting firms need accurate, secure, and automated systems to manage financial data.',
            supports: [
                'ERP & accounting integrations',
                'Financial reporting dashboards',
                'Document automation',
                'Secure client portals',
                'Workflow automation systems'
            ]
        },
        {
            name: 'Real Estate',
            icon: <FaHome />,
            desc: 'Real estate businesses require structured platforms for property management and customer engagement.',
            supports: [
                'Property management systems',
                'CRM for lead tracking',
                'Booking & transaction management',
                'Document management systems',
                'Analytics & reporting tools'
            ]
        }
    ];

    const crossIndustryCapabilities = [
        { title: 'Custom Software Development', icon: <FaLaptopCode /> },
        { title: 'Artificial Intelligence Solutions', icon: <FaBrain /> },
        { title: 'CRM, ERP & CMS Implementation', icon: <FaCogs /> },
        { title: 'Process Automation', icon: <FaCheckCircle /> },
        { title: 'Staff Augmentation', icon: <FaUserCog /> },
        { title: 'Cloud & Infrastructure Services', icon: <FaCloud /> },
    ];

    return (
        <div className="industries-page">
            <Header />

            {/* HERO SECTION */}
            <section className="hero-section py-5">
                <div className="container">
                    <div className="row align-items-center" style={{ minHeight: '500px' }}>
                        <div className="col-lg-7">
                            <h1 className="hero-title">
                                Technology Solutions Built for &nbsp;
                                <span style={{ color: 'var(--codeifyy-green)' }}>Industry-Specific Demands</span>
                            </h1>
                            <p className="hero-description">
                                We deliver domain-focused digital solutions tailored to the operational, compliance, and scalability requirements of modern industries.
                            </p>
                            <div className="hero-trust-line">
                                <a href="/contact" className="btn btn-codeifyy-primary rounded-2 fw-bold px-4 py-3">
                                    Talk to an Expert <FaArrowRight className="ms-2" />
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
                                        <span className="code-line c-gray">// Industry-Specific Tech</span>
                                        <span className="code-line">
                                            <span className="c-purple">const</span> <span className="c-blue">Industry</span> = <span className="c-yellow">(<span className="c-white">sector</span>)</span> <span className="c-purple">=&gt;</span> {'{'}
                                        </span>
                                        <span className="code-line pl-3" style={{ paddingLeft: '1.5rem' }}>
                                            <span style={{ color: '#c084fc' }}>return</span> <span className="c-white">sector</span>.<span className="c-blue">optimize</span>();
                                        </span>
                                        <span className="code-line">{'}'}</span>
                                        <br />
                                        <span className="code-line c-gray">// Domain Excellence</span>
                                        <span className="code-line">
                                            <span className="c-purple">await</span> <span className="c-blue">Compliance</span>.<span className="c-yellow">verify</span>(<span className="c-white">Enterprise</span>);
                                        </span>
                                        <br />
                                        <span className="code-line c-gray">// Operational Efficiency</span>
                                        <span className="code-line">
                                            <span className="c-purple">if</span> (<span className="c-white">efficiency</span> &lt; <span className="c-yellow">100</span>) {'{'}
                                        </span>
                                        <span className="code-line pl-3" style={{ paddingLeft: '1.5rem' }}>
                                            <span className="c-blue">automate</span>(<span className="c-green">"Workflows"</span>);
                                        </span>
                                        <span className="code-line">{'}'}</span>
                                    </div>
                                </div>

                                {/* Floating Badges */}
                                <div className="floating-badge badge-security">
                                    <div className="badge-icon" style={{ background: '#10b981' }}><FaIndustry /></div>
                                    <span>Industry 4.0</span>
                                </div>

                                <div className="floating-badge badge-cloud">
                                    <div className="badge-icon" style={{ background: '#3b82f6' }}><FaCogs /></div>
                                    <span>Automation</span>
                                </div>

                                <div className="floating-badge badge-performance">
                                    <div className="badge-icon" style={{ background: '#f59e0b' }}><FaChartLine /></div>
                                    <span>Efficiency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ClientLogos />
            </section >

            {/* STATS SECTION - FLEXIBLE TALENT STYLE */}
            < section className="section-padding" style={{ background: '#fff' }}>
                <div className="container">
                    <div className="flexible-talent-wrapper">
                        <div className="flexible-content">
                            <h2>Deep Industry <br />Expertise.</h2>
                            <p className="hero-description">
                                We combine technical excellence with domain knowledge to solve sector-specific challenges.
                                Codeifyy delivers solutions that are not just technically sound, but operationally effective.
                            </p>
                            <ul className="model-features">
                                <li><FaCheckCircle /> Compliance & Security First</li>
                                <li><FaCheckCircle /> Tailored for Regulated Sectors</li>
                                <li><FaCheckCircle /> Scalable Architecture</li>
                            </ul>
                            <a href="/contact" className="btn btn-codeifyy-primary">Talk to an Expert</a>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="benefit-cards-grid">
                                <div className="stat-card animate-up delay-1">
                                    <div className="stat-value">10+</div>
                                    <div className="stat-label">Industries Served</div>
                                </div>
                                <div className="stat-card animate-up delay-2">
                                    <div className="stat-value">200+</div>
                                    <div className="stat-label">Enterprise Solutions</div>
                                </div>
                                <div className="stat-card animate-up delay-3">
                                    <div className="stat-value">98%</div>
                                    <div className="stat-label">Compliance Rate</div>
                                </div>
                                <div className="stat-card animate-up delay-4">
                                    <div className="stat-value">Global</div>
                                    <div className="stat-label">Delivery Network</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* INDUSTRIES GRID */}
            < section className="industry-grid-section" >
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="section-title">Industries We Work With</h2>
                        <p className="section-subtitle">Specialized technology implementation for diverse business sectors.</p>
                    </div>

                    <div className="row g-4">
                        {industryData.map((industry, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="industry-card-detailed">
                                    <span className="industry-number">0{index + 1}</span>

                                    <h3 className="industry-card-title">{industry.name}</h3>
                                    <p className="industry-card-desc">{industry.desc}</p>

                                    <div className="industry-capabilities">
                                        <h5>CAPABILITIES</h5>
                                        <ul>
                                            {industry.supports.slice(0, 4).map((item, i) => (
                                                <li key={i}>
                                                    <FaCheckCircle className="industry-bullet-icon" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* CROSS INDUSTRY CAPABILITIES */}
            < section className="cross-industry-section" >
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title">Cross-Industry Capabilities</h2>
                        <p className="section-subtitle">Scalable solutions applicable across all sectors.</p>
                    </div>

                    <div className="cross-industry-grid">
                        {crossIndustryCapabilities.map((cap, index) => (
                            <div key={index} className="capability-card">
                                <div className="capability-icon">{cap.icon}</div>
                                <h4 className="capability-title">{cap.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* APPROACH */}
            < section className="industry-approach-section" >
                <div className="container">
                    <h2 className="section-title text-white">How We Approach Industry Projects</h2>
                    <p className="section-subtitle text-white opacity-75">We don’t deliver generic software. We align technology with sector-specific requirements.</p>

                    <div className="industry-approach-grid">
                        <div className="approach-card-simple">
                            <span className="approach-number">01</span>
                            <h3 className="approach-title-simple">Industry Analysis</h3>
                            <p className="approach-desc-simple">We understand regulatory requirements, operational workflows, and customer expectations.</p>
                        </div>
                        <div className="approach-card-simple">
                            <span className="approach-number">02</span>
                            <h3 className="approach-title-simple">Solution Mapping</h3>
                            <p className="approach-desc-simple">We align services and solutions with real operational challenges.</p>
                        </div>
                        <div className="approach-card-simple">
                            <span className="approach-number">03</span>
                            <h3 className="approach-title-simple">Custom Development</h3>
                            <p className="approach-desc-simple">We design systems tailored to industry processes.</p>
                        </div>
                        <div className="approach-card-simple">
                            <span className="approach-number">04</span>
                            <h3 className="approach-title-simple">Secure Deployment</h3>
                            <p className="approach-desc-simple">We ensure compliance, scalability, and long-term sustainability.</p>
                        </div>
                    </div>
                </div>
            </section >

            {/* CASE STUDIES */}
            < CustomerStories />

            {/* TESTIMONIALS */}
            < ArticleCarousel />

            {/* FINAL CTA */}
            < section className="final-cta-section mt-5" >
                <div className="container">
                    <h2 className="section-title">Let’s Build a Solution for Your Industry</h2>
                    <p className="section-subtitle mb-5">Whether you operate in a regulated sector or a fast-scaling digital environment, we deliver technology aligned with your industry challenges.</p>
                    <a href="/contact" className="btn btn-codeifyy-primary btn-lg px-5 py-3">Discuss Your Industry Needs</a>
                </div>
            </section >

            <Footer />
        </div >
    );
};

export default Industries;
