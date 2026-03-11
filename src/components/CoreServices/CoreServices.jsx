import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './CoreServices.css';

const CoreServices = ({ servicesData = [], data }) => {
    const items = data?.items || servicesData || [];
    const title = data?.title || "Our Core Services";
    const subtitle = data?.subTitle || "";

    return (
        <section className="core-services-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />
                    {subtitle && <p className="section-subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />}
                </div>

                <div className="row g-4">
                    {items.map((service, index) => {
                        const IconComponent = FaIcons[service.icon];
                        return (
                            <div className="col-lg-6" key={index}>
                                <div className="service-overview-card">
                                    <div className="service-card-header">
                                        <div className="service-overview-icon">
                                            {IconComponent && <IconComponent />}
                                        </div>
                                        <span className="service-number">{service.number}</span>
                                    </div>
                                    <h3 className="service-overview-title">{service.title}</h3>
                                    <p className="service-overview-desc">{service.description}</p>
                                    <ul className="service-features-list">
                                        {service.features.map((feature, i) => (
                                            <li key={i}><span className="bullet-dot">•</span> {feature}</li>
                                        ))}
                                    </ul>
                                    <Link to={service.link} className="explore-link">{service.linkText} <FaIcons.FaArrowRight /></Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CoreServices;
