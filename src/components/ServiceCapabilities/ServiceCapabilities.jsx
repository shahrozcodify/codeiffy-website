import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './ServiceCapabilities.css';

const ServiceCapabilities = ({ data }) => {
    const title = data?.title || "";
    const subtitle = data?.subTitle || data?.description || "";
    const services = data?.elements || data?.services || [];

    return (
        <section className="services-grid-section">
            <div className="container">
                <div className="text-center mb-5">
                    {title && <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />}
                    {subtitle && <p className="section-subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />}
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <span className="service-number">
                                {(index + 1).toString().padStart(2, '0')}
                            </span>
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                {service.subtitle && <p className="service-desc">{service.subtitle}</p>}
                                {service.description && <p className="service-detail">{service.description}</p>}
                                
                                {service.challenges && (
                                    <div className="service-capabilities challenges-list mb-4">
                                        {service.challengesHeading && <h5>{service.challengesHeading}</h5>}
                                        <ul>
                                            {(service.challenges || []).map((challenge, i) => (
                                                <li key={i}>
                                                    <span className="dot-bullet">•</span> {challenge}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {service.capabilities && (
                                    <div className="service-capabilities">
                                        {service.capabilitiesHeading && <h5>{service.capabilitiesHeading}</h5>}
                                        <ul>
                                            {(service.capabilities || []).map((cap, i) => (
                                                <li key={i}>
                                                    <FaCheckCircle /> {cap}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                
                                {service.closingLine && <p className="service-detail mt-3">{service.closingLine}</p>}
                                
                                {service.bestFor && (
                                    <div className="service-capabilities mt-4">
                                        <h5>BEST FOR</h5>
                                        <ul>
                                            {(service.bestFor || []).map((item, i) => (
                                                <li key={i}>
                                                    <FaCheckCircle /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceCapabilities;
