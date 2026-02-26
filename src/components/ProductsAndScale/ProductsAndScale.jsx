import React from 'react';
import './ProductsAndScale.css';
import { FaUsers, FaUserPlus, FaProjectDiagram, FaHandshake } from 'react-icons/fa';

const ProductsAndScale = () => {
    const engagementModels = [
        {
            id: 1,
            title: "Dedicated Development Teams",
            description: "A committed team working exclusively on your product with long-term alignment and scalability.",
            icon: <FaUsers />
        },
        {
            id: 2,
            title: "Team Extension Model",
            description: "Experts who integrate with your team to add skills and accelerate delivery.",
            icon: <FaUserPlus />
        },
        {
            id: 3,
            title: "Fixed-Scope Projects",
            description: "Defined projects with clear requirements, timelines, and budgets.",
            icon: <FaProjectDiagram />
        },
        {
            id: 4,
            title: "Long-Term Strategic Partnership",
            description: "An ongoing collaboration focused on continuous growth and innovation.",
            icon: <FaHandshake />
        },

    ];

    return (
        <section className="engagement-models-section">
            <div className="container">
                <div className="engagement-models-header">
                    <h2 className="engagement-models-title animate-up">
                        Our Engagement Models
                    </h2>
                    <p className="engagement-models-description">
                        Flexible collaboration models designed to fit your business needs and goals.
                    </p>

                </div>

                <div className="models-grid animate-up delay-2">
                    {engagementModels.map((model) => (
                        <div key={model.id} className="model-card">
                            <div className="model-icon">
                                {model.icon}
                            </div>
                            <h3 className="model-title">{model.title}</h3>
                            <p className="model-description">{model.description}</p>
                        </div>
                    ))}

                </div>
                <div className="section-cta-wrapper engagement-cta animate-up delay-1">
                    <a href="/contact" className="btn btn-codeifyy-primary">
                        Request a Proposal
                    </a>
                </div>
            </div>
        </section>
    );
};


export default ProductsAndScale;
