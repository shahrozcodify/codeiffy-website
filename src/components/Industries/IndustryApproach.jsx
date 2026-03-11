import React from 'react';
import './Industries.css';

const IndustryApproach = ({ data }) => {
    const title = data?.title;
    const subTitle = data?.subTitle;
    const steps = data?.elements || [];

    return (
        <section className="industry-approach-section">
            <div className="container">
                {title && (
                    <h2 className="section-title text-white text-center">{title}</h2>
                )}
                {subTitle && (
                    <p className="section-subtitle text-white opacity-75 text-center">{subTitle}</p>
                )}

                <div className="industry-approach-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="approach-card-simple">
                            <span className="approach-number">0{index + 1}</span>
                            <h3 className="approach-title-simple">{step.title}</h3>
                            <p className="approach-desc-simple">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryApproach;
