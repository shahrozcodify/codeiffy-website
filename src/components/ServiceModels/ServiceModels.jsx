import React from 'react';
import './ServiceModels.css';

const ServiceModels = ({ data }) => {
    const { title, subTitle, elements = [] } = data || {};

    return (
        <section className="service-models-section section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    {title && <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />}
                    {subTitle && <p className="section-subtitle" dangerouslySetInnerHTML={{ __html: subTitle }} />}
                </div>
                <div className="service-models-grid">
                    {elements.map((model, index) => (
                        <div 
                            key={index} 
                            className={`service-model-card p-4 p-lg-5 ${model.cardClass || ''}`}
                        >
                            {model.title && <h3 className="model-title">{model.title}</h3>}
                            {model.description && (
                                <p 
                                    className="model-description mb-4"
                                    dangerouslySetInnerHTML={{ __html: model.description }}
                                />
                            )}
                            {model.link && (
                                <div className="mt-auto">
                                    <a 
                                        href={model.link} 
                                        className="btn btn-codeifyy-primary"
                                    >
                                        {model.linkText || 'Learn More'}
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceModels;
