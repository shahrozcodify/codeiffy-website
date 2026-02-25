import React from 'react';
import { FaCheckCircle, FaArrowRight, FaShieldAlt, FaCloud, FaRocket } from 'react-icons/fa';
import ClientLogos from '../ClientLogos/ClientLogos';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center hero-row">

                    {/* LEFT COLUMN: Value Proposition */}
                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        {/* Label */}
                        <div className="hero-label">
                            Engineering Excellence
                        </div>

                        {/* Main Title */}
                        <h1 className="hero-title">
                            Software Solutions <span className="d-none d-md-inline"><br /></span>
                            for <span style={{ color: 'var(--codeifyy-green)' }}>Mission-Critical</span> <span className="d-none d-md-inline"><br /></span>
                            Organizations.
                        </h1>

                        {/* Description */}
                        <p className="hero-description">
                            We combine engineering precision, strategic thinking, and agile execution to deliver scalable software products that accelerate business transformation.
                        </p>
                        <a href="/contact" className=" btn btn-codeifyy-primary mb-2">
                            Start Your Project <FaArrowRight />
                        </a>
                        {/* Trust Badges */}
                        <div className="hero-trust-line d-none">
                            <div className="d-flex flex-column gap-3 hero-trust-badges">
                                <div className="hero-trust-badge">
                                    <FaCheckCircle className="trust-check" />
                                    <span>Enterprise-Grade Security</span>
                                </div>
                                <div className="hero-trust-badge">
                                    <FaCheckCircle className="trust-check" />
                                    <span>Scalable Architecture</span>
                                </div>
                                <div className="hero-trust-badge">
                                    <FaCheckCircle className="trust-check" />
                                    <span>Transparent Engagement</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Code Window Visual */}
                    <div className="col-12 col-md-5 offset-md-1">
                        <div className="hero-graphic-wrapper">
                            {/* Base Layer: Code Window */}
                            <div className="code-window">
                                <div className="window-header">
                                    <div className="dot red"></div>
                                    <div className="dot yellow"></div>
                                    <div className="dot green"></div>
                                </div>
                                <div className="window-body">
                                    <span className="code-line c-gray">// Engineering Excellence</span>
                                    <span className="code-line">
                                        <span className="c-purple">const</span> <span className="c-blue">Architecture</span> = <span className="c-yellow">()</span> <span className="c-purple">=&gt;</span> {'{'}
                                    </span>
                                    <span className="code-line pl-3" style={{ paddingLeft: '1.5rem' }}>
                                        <span className="c-purple">return</span> <span className="c-green">"Mission-Critical"</span>;
                                    </span>
                                    <span className="code-line">{'}'}</span>
                                    <br />
                                    <span className="code-line c-gray">// Strategic Thinking</span>
                                    <span className="code-line">
                                        <span className="c-purple">if</span> (<span className="c-white">business</span>.<span className="c-blue">needs</span> === <span className="c-green">"Transformation"</span>) {'{'}
                                    </span>
                                    <span className="code-line pl-3" style={{ paddingLeft: '1.5rem' }}>
                                        <span className="c-blue">deliver</span>(<span className="c-white">ScalableProduct</span>);
                                    </span>
                                    <span className="code-line">{'}'}</span>
                                    <br />
                                    <span className="code-line c-gray">// Agile Execution</span>
                                    <span className="code-line">
                                        <span className="c-purple">await</span> <span className="c-blue">deploy</span>(<span className="c-green">"Success"</span>);
                                    </span>
                                </div>
                            </div>

                            {/* Floating Badges */}
                            <div className="floating-badge badge-security">
                                <div className="badge-icon" style={{ background: '#10b981' }}><FaShieldAlt /></div>
                                <span>Security First</span>
                            </div>

                            <div className="floating-badge badge-cloud">
                                <div className="badge-icon" style={{ background: '#3b82f6' }}><FaCloud /></div>
                                <span>Cloud Native</span>
                            </div>

                            <div className="floating-badge badge-performance">
                                <div className="badge-icon" style={{ background: '#f59e0b' }}><FaRocket /></div>
                                <span>High Performance</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <ClientLogos />
        </section>
    );
};

export default Hero;
