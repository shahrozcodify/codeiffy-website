import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
    const [activeTab, setActiveTab] = useState(0);

    const services = [
        {
            category: 'Software Development',
            title: 'Software Development',
            desc: 'We design and develop secure, scalable, and high-performance software tailored to your operational and strategic needs.',
            points: ['Bespoke Software Development', 'ERP Software Development', 'Cloud Application Development', 'Software Modernization'],
            link: '/services/software-development'
        },
        {
            category: 'Artificial Intelligence',
            title: 'Intelligent Solutions',
            desc: 'Harness the power of AI to automate operations and unlock data-driven growth.',
            points: ['AI Strategy & Consulting', 'Machine Learning Development', 'Generative AI Integration', 'AI Chatbots & Virtual Assistants', 'Natural Language Processing (NLP)', 'AI Automation & Workflows'],
            link: '/services/artificial-intelligence'
        },
        {
            category: 'Staff Augmentation',
            title: 'Extend Your Team',
            desc: 'Scale resources on demand with pre-vetted developers and engineers.',
            points: ['IT Staff Augmentation', 'Dedicated Development Team', 'Full-Project Outsourcing', 'Software Outsourcing'],
            link: '/services/staff-augmentation'
        },

        {
            category: 'Product Development',
            title: 'Idea to Scale',
            desc: 'Build market-ready digital products with a focus on user experience and scalability.',
            points: ['Development Consulting', 'Product Development', 'Product Design', 'Architecture Design', 'UI & UX Design', 'API Development', 'Testing & QA', 'Support & Maintenance'],
            link: '/services/product-development'
        }
    ];

    const handleManualClick = (index) => {
        setActiveTab(index);
    };

    return (
        <section className="services-section-tabs">
            <div className="container">
                <div className="services-intro">
                    <h2 className="services-heading text-center">Explore Our <span className='highlight-span'>Offering</span></h2>
                </div>

                <div className="services-tabs-layout">
                    {/* Left Sidebar - Tabs */}
                    <div className="services-sidebar">
                        {services.map((service, index) => (
                            <button
                                key={index}
                                className={`service-tab-btn ${activeTab === index ? 'active' : ''}`}
                                onClick={() => handleManualClick(index)}
                            >
                                <span className="tab-label">{service.category}</span>
                                {activeTab === index && (
                                    <div className="tab-indicator-green"></div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right Content - Details */}
                    <div className="services-content-area">
                        <div className="service-detail animate-fade-in" key={activeTab}>
                            <h3 className="service-detail-title">{services[activeTab].title}</h3>
                            <p className="service-detail-desc">
                                {services[activeTab].desc}
                            </p>
                            <ul className="service-detail-list">
                                {services[activeTab].points.map((point, idx) => (
                                    <li key={idx} className="service-point">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <Link to={services[activeTab].link || '#'} className="service-learn-more">
                                Learn more <span className="arrow">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
