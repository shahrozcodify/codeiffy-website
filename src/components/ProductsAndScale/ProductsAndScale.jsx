import React from 'react';
import './ProductsAndScale.css';
import { FaUsers, FaUserPlus, FaProjectDiagram, FaHandshake } from 'react-icons/fa';

const ProductsAndScale = ({ data }) => {
    const title = data?.title || "Our Engagement Models";
    const description = data?.description?.replace(/<\/?[^>]+(>|$)/g, "") || "Flexible collaboration models designed to fit your business needs and goals.";
    const btnText = data?.ctaText || "Request a Proposal";
    const btnLink = data?.ctaLnik ? (data.ctaLnik.startsWith('http') ? data.ctaLnik : `/${data.ctaLnik}`) : "/contact";

    // Icons map for diversity if API doesn't provide them
    const icons = [<FaUsers />, <FaUserPlus />, <FaProjectDiagram />, <FaHandshake />];

    const engagementModelsFromAPI = data?.elements?.map((el, index) => ({
        id: el.id,
        title: el.title,
        description: el.shortDescription?.replace(/<\/?[^>]+(>|$)/g, "") || "",
        icon: icons[index % icons.length]
    })) || [];

    const engagementModels = engagementModelsFromAPI.length > 0 ? engagementModelsFromAPI : [
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
                    <h2 className="engagement-models-title">
                        {title}
                    </h2>
                    <p className="engagement-models-description">
                        {description}
                    </p>
                </div>

                <div className="models-grid">
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
                <div className="section-cta-wrapper engagement-cta">
                    <a href={btnLink} className="btn btn-codeifyy-primary">
                        {btnText}
                    </a>
                </div>
            </div>
        </section>
    );
};


export default ProductsAndScale;
