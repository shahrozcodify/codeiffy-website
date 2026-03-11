import React from 'react';
import * as FaIcons from 'react-icons/fa';
import './SplitContentSection.css';

const SplitContentSection = ({ data }) => {
    const {
        title,
        subTitle,
        description,
        ctaText,
        ctaLink,
        elements = [],
        featuredCard = {},
        reverse = false,
        wrapperClass = ""
    } = data || {};

    const renderIcon = (iconName, size = '5rem', opacity = '0.9') => {
        if (!iconName) return null;
        const IconComponent = FaIcons[iconName];
        if (IconComponent) {
            return <IconComponent style={{ fontSize: size, marginBottom: '1.5rem', opacity: opacity }} />;
        }
        return <i className={iconName} style={{ fontSize: size, marginBottom: '1.5rem', opacity: opacity }} />;
    };

    return (
        <section className={`split-content-section ${wrapperClass} ${reverse ? 'flex-row-reverse' : ''}`}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Text & List Side */}
                    <div className="col-lg-6">
                        <div className="content-side">
                            {title && <h2 className="section-title text-start" dangerouslySetInnerHTML={{ __html: title }} />}
                            {subTitle && <p className="lead mb-4">{subTitle}</p>}
                            {description && <p className="section-desc mb-4" dangerouslySetInnerHTML={{ __html: description }} />}
                            
                            {elements.length > 0 && (
                                <ul className="split-list list-unstyled mb-4">
                                    {elements.map((item, index) => (
                                        <li key={index} className="mb-3 d-flex align-items-start">
                                            <FaIcons.FaCheckCircle className="me-2 mt-1 list-icon" style={{ color: 'var(--codeifyy-green)' }} />
                                            <span style={{ fontSize: '1.1rem' }} dangerouslySetInnerHTML={{ __html: item.title || item }} />
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {ctaText && ctaLink && (
                                <div className="mt-4">
                                    <a href={ctaLink} className="btn btn-codeifyy-primary mb-4 btn-lg">
                                        {ctaText}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Featured Card Side */}
                    <div className="col-lg-6">
                        <div className="featured-side">
                            <div 
                                className={`featured-card ${featuredCard.className || ''}`}
                                style={featuredCard.style || {}}
                            >
                                {featuredCard.icon && renderIcon(featuredCard.icon)}
                                {featuredCard.title && <h3 className={featuredCard.h3Class || ""}>{featuredCard.title}</h3>}
                                {featuredCard.description && <p className={featuredCard.pClass || ""} dangerouslySetInnerHTML={{ __html: featuredCard.description }} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SplitContentSection;
