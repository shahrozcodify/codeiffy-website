import React from 'react';
import './BenefitSection.css';

const BenefitSection = () => {
    return (
        <section className="benefit-section">
            <div className="container">
                {/* Content Wrapper */}
                <div className="stats-grid-wrapper">
                    {/* Left Column: Text Content */}
                    <div className="benefit-text-content animate-up">
                        <h2 className="benefit-main-heading">
                            About <span className="highlight-span">Codeifyy</span>
                        </h2>
                        <p className="benefit-desc">
                            Whether you need to scale your internal team, develop a custom platform, modernize legacy systems, or launch a digital product, our experts deliver measurable outcomes aligned with your business objectives.
                        </p>
                    </div>

                    {/* Right Column: Cards Grid */}
                    <div className="benefit-cards-grid">
                        <div className="stat-card animate-up delay-1">
                            <div className="stat-value">30+</div>
                            <div className="stat-label">IT Professionals</div>
                        </div>
                        <div className="stat-card animate-up delay-2">
                            <div className="stat-value">15+</div>
                            <div className="stat-label">Countries Served</div>
                        </div>
                        <div className="stat-card animate-up delay-3">
                            <div className="stat-value">90%</div>
                            <div className="stat-label">Retention Rate</div>
                        </div>
                        <div className="stat-card animate-up delay-4">
                            <div className="stat-value">Certified</div>
                            <div className="stat-label">Platform Experts</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Metrics */}
                <div className="stats-bottom-row animate-up delay-3" style={{ marginTop: '4rem' }}>
                    <div className="stat-metric-item">
                        <div className="stat-metric-value">8+ Years</div>
                        <div className="stat-metric-desc">In software engineering and IT consulting</div>
                    </div>
                    <div className="stat-metric-item">
                        <div className="stat-metric-value">100+ Projects</div>
                        <div className="stat-metric-desc">Successfully delivered to global clients</div>
                    </div>
                    <div className="stat-metric-item">
                        <div className="stat-metric-value">Global HQ</div>
                        <div className="stat-metric-desc">Lahore, Pakistan</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitSection;
