import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Industries.css';

const DetailedIndustries = ({ data }) => {
    const title = data?.title;
    const subTitle = data?.subTitle;
    const ctaText = data?.ctaText;
    const ctaLink = data?.ctaLink;
    const elements = data?.elements || [];

    return (
        <section className="industry-grid-section">
            <div className="container">
                {(title || subTitle) && (
                    <div className="text-center mb-5">
                        {title && (
                            <h2
                                className="section-title animate-up"
                                dangerouslySetInnerHTML={{ __html: title }}
                            />
                        )}
                        {subTitle && (
                            <p className="section-subtitle animate-up">{subTitle}</p>
                        )}
                    </div>
                )}

                <div className="row g-4">
                    {elements.map((industry, index) => {
                        return (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className="industry-card-detailed animate-up delay-1">
                                    <span className="industry-number">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                    
                                    <h3 className="industry-card-title">{industry.name || industry.title}</h3>
                                    
                                    {(industry.desc || industry.shortDescription) && (
                                        <p className="industry-card-desc">
                                            {industry.desc || industry.shortDescription?.replace(/<\/?[^>]+(>|$)/g, "")}
                                        </p>
                                    )}

                                    {industry.supports && industry.supports.length > 0 && (
                                        <div className="industry-capabilities">
                                            <h5>{data?.capabilitiesHeading || 'CAPABILITIES'}</h5>
                                            <ul>
                                                {industry.supports.slice(0, 4).map((item, i) => (
                                                    <li key={i}>
                                                        <FaCheckCircle className="industry-bullet-icon" /> {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {ctaLink && (
                    <div className="industries-cta-wrapper animate-up">
                        <a href={ctaLink} className="btn btn-codeifyy-primary">
                            {ctaText || 'Explore Industry Solutions'}
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DetailedIndustries;
