import React from 'react';
import './EngagementModels.css';

const EngagementModels = ({ data }) => {
    const title = data?.title || "";
    const subtitle = data?.subTitle || data?.description || "";
    const models = data?.elements || [];

    return (
        <section className="engagement-section">
            <div className="container">
                <div className="text-center mb-5">
                    {title && <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />}
                    {subtitle && <p className="section-subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />}
                </div>
                <div className="engagement-grid">
                    {models.map((model, index) => (
                        <div key={index} className="engagement-card">
                            <h3>{model.title}</h3>
                            <p>{model.description}</p>
                            {model.link && (
                                <a href={model.link} className="btn-model mt-auto">
                                    {model.linkText || 'Learn More'}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EngagementModels;
