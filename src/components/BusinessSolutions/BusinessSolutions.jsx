import React from 'react';
import './BusinessSolutions.css';

const BusinessSolutions = ({ solutionsData = [], data }) => {
    const items = data?.items || solutionsData || [];
    const title = data?.title || "Business Solutions We Provide";
    const subtitle = data?.subTitle || "We deliver ready-to-deploy, customizable business systems designed to solve operational challenges and improve efficiency across departments.";

    return (
        <section className="business-solutions-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />
                    <p className="section-subtitle" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
                </div>

                <div className="solution-card-grid">
                    {items.map((solution, index) => (
                        <div className="solution-card" key={index}>
                            <span className="solution-number">{solution.number}</span>
                            <h3 className="solution-title">{solution.title}</h3>
                            <p className="solution-desc">{solution.description}</p>
                            <ul className="service-features-list solution-features">
                                {solution.features.map((feature, i) => (
                                    <li key={i}><span className="bullet-dot">•</span> {feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessSolutions;
