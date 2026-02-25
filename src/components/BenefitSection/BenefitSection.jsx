import React from 'react';
import './BenefitSection.css';

const BenefitSection = ({
    title = (
        <>
            About <span className="highlight-span">Codeifyy</span>
        </>
    ),
    description = "Whether you need to scale your internal team, develop a custom platform, modernize legacy systems, or launch a digital product, our experts deliver measurable outcomes aligned with your business objectives.",
    features = [],
    buttonText,
    buttonLink,
    stats = [
        { value: "30+", label: "IT Professionals" },
        { value: "15+", label: "Countries Served" },
        { value: "90%", label: "Retention Rate" },
        { value: "Certified", label: "Platform Experts" }
    ],
    bottomMetrics = [
        { value: "8+ Years", desc: "In software engineering and IT consulting" },
        { value: "100+ Projects", desc: "Successfully delivered to global clients" },
        { value: "HQ", desc: "Lahore, Pakistan" }
    ],
    showBottomMetrics = true
}) => {
    return (
        <section className="benefit-section">
            <div className="container" style={{ paddingTop: '5rem' }}>
                {/* Content Wrapper */}
                <div className="stats-grid-wrapper">
                    {/* Left Column: Text Content */}
                    <div className="benefit-text-content animate-up">
                        <h2 className="benefit-main-heading">{title}</h2>
                        <p className="benefit-desc">{description}</p>

                        {features.length > 0 && (
                            <ul className="model-features mt-4">
                                {features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        )}

                        {buttonText && buttonLink && (
                            <div className="mt-4">
                                <a href={buttonLink} className="btn btn-codeifyy-primary">
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
                </div>

                {/* Bottom Metrics */}
                {showBottomMetrics && (
                    <div className="stats-bottom-row animate-up delay-3" style={{ marginTop: '4rem' }}>
                        {bottomMetrics.map((metric, index) => (
                            <div key={index} className="stat-metric-item">
                                <div className="stat-metric-value">{metric.value}</div>
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
