import React from 'react';
import './WhyChooseCodeifyy.css';
import { FaBrain, FaHandshake, FaShieldAlt, FaRocket, FaLayerGroup, FaHeadset } from 'react-icons/fa';

const WhyChooseCodeifyy = () => {
    const reasons = [
        {
            icon: <FaBrain />,
            title: 'Strategic Engineering Approach',
            desc: 'We align technology decisions with measurable business outcomes.'
        },
        {
            icon: <FaHandshake />,
            title: 'Flexible Engagement Models',
            desc: 'Choose from staff augmentation, dedicated teams, or full-cycle project delivery.'
        },
        {
            icon: <FaShieldAlt />,
            title: 'Quality-Driven Delivery',
            desc: 'We follow strict coding standards, security best practices, and structured QA processes.'
        },
        {
            icon: <FaRocket />,
            title: 'Agile & Transparent Execution',
            desc: 'Iterative development, continuous communication, and milestone-based delivery.'
        },
        {
            icon: <FaLayerGroup />,
            title: 'Scalable Architecture',
            desc: 'Our solutions are built to grow with your business — not limit it.'
        },
        {
            icon: <FaHeadset />,
            title: 'Dedicated Support',
            desc: 'Post-launch maintenance, updates, and 24/7 monitoring to keep your system performing.'
        }
    ];

    return (
        <section className="why-choose-section">
            <div className="container">
                <div className="text-center animate-up">
                    <h2 className="section-heading-centered">
                        Why Choose <span className="highlight-span">CODEIFYY</span>
                    </h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '1rem' }}>
                        Partner with a team that values quality, transparency, and results.
                    </p>
                </div>

                <div className="why-choose-grid">
                    {reasons.map((item, index) => (
                        <div key={index} className={`why-choose-card animate-up delay-${index + 1}`}>
                            <div className="why-icon-wrapper">
                                {item.icon}
                            </div>
                            <h3 className="why-card-title">{item.title}</h3>
                            <p className="why-card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="center-btn-wrapper animate-up">
                    <a href="/contact" className="btn btn-codeifyy-primary ">Let's Get Started</a>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseCodeifyy;
