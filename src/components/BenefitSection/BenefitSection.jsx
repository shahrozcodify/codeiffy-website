import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './BenefitSection.css';
import { sharedAboutStats } from '../../data/pagesContent';

const BenefitSection = ({ data, title: propTitle, description: propDescription, features: propFeatures, buttonText: propButtonText, buttonLink: propButtonLink, stats: propStats, showBottomMetrics: propShowBottomMetrics }) => {
    // Basic text defaults
    const title = propTitle ? (
        typeof propTitle === 'string' ? <span dangerouslySetInnerHTML={{ __html: propTitle }} /> : propTitle
    ) : data?.title ? (
        <span dangerouslySetInnerHTML={{ __html: data.title }} />
    ) : (
        <>
            About <span className="highlight-span">Codeifyy</span>
        </>
    );

    const description = propDescription || data?.description || "Whether you need to scale your internal team, develop a custom platform, modernize legacy systems, or launch a digital product, our experts deliver measurable outcomes aligned with your business objectives.";
    const buttonText = propButtonText || data?.ctaText || "";
    const buttonLink = propButtonLink || data?.ctaLink || data?.ctaLnik;
    const features = propFeatures || data?.features || [];

    // Split elements into stats cards (top 4) and metrics (remnant)
    const allElements = data?.elements || sharedAboutStats;

    // Stats Logic
    let stats = [];
    if (propStats) {
        stats = propStats;
    } else {
        stats = allElements.slice(0, 4).map(el => ({
            value: el.shortDescription?.replace(/<\/?[^>]+(>|$)/g, "") || "",
            label: el.title
        }));
    }

    // Bottom Metrics Logic
    const showBottomMetrics = propShowBottomMetrics !== undefined ? propShowBottomMetrics : (data?.showBottomMetrics !== false && allElements.length > 4);

    let bottomMetrics = [];
    if (showBottomMetrics) {
        bottomMetrics = allElements.slice(4, 8).map(el => ({
            value: el.shortDescription?.replace(/<\/?[^>]+(>|$)/g, "") || "",
            desc: el.title
        }));
    }

    return (
        <section className="benefit-section">
            <div className="container">
                <div className="benefit-label animate-up">{data?.subTitle}</div>
                {/* Content Wrapper */}
                <div className="stats-grid-wrapper">
                    {/* Left Column: Text Content */}
                    <div className="benefit-text-content animate-up">
                        <h2 className="benefit-main-heading">{title}</h2>
                        <div className="benefit-desc" dangerouslySetInnerHTML={{ __html: description }} />

                        {features.length > 0 && (
                            <ul className="model-features">
                                {features.map((feature, index) => (
                                    <li key={index}>
                                        {typeof feature === 'string' ? (
                                            <>
                                                <FaCheckCircle className="benefit-list-icon" />
                                                <span dangerouslySetInnerHTML={{ __html: feature }} />
                                            </>
                                        ) : feature}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {/* Desktop only: button tight below features list */}
                        {buttonText && buttonLink && (
                            <div className="benefit-cta-wrapper benefit-cta-desktop animate-up">
                                <a href={buttonLink.startsWith('http') ? buttonLink : (buttonLink.startsWith('/') ? buttonLink : `/${buttonLink}`)} className="btn btn-codeifyy-primary">
                                    {buttonText}
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Cards Grid */}
                    <div className="benefit-cards-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className={`stat-card animate-up delay-${index + 1}`}>
                                <div className="stat-value">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile only: button below stats cards */}
                    {buttonText && buttonLink && (
                        <div className="benefit-cta-wrapper benefit-cta-mobile animate-up">
                            <a href={buttonLink} className="btn btn-codeifyy-primary">
                                {buttonText}
                            </a>
                        </div>
                    )}
                </div>

                {/* Bottom Metrics */}
                {showBottomMetrics && bottomMetrics.length > 0 && (
                    <div className="stats-bottom-row animate-up delay-3">
                        {bottomMetrics.map((metric, index) => (
                            <div key={index} className="stat-metric-item">
                                <div className="stat-metric-value">
                                    <span className="metric-diamond"></span>
                                    {metric.value}
                                </div>
                                <div className="stat-metric-desc">{metric.desc}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BenefitSection;
