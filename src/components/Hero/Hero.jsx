import React from 'react';
import {
    FaCheckCircle, FaArrowRight, FaShieldAlt, FaCloud, FaRocket,
    FaGlobe, FaNetworkWired, FaUsers, FaServer, FaIndustry,
    FaCogs, FaChartLine, FaLaptopCode, FaCubes, FaBrain, FaRobot, FaCode, FaUserTie
} from 'react-icons/fa';
import ClientLogos from '../ClientLogos/ClientLogos';
import './Hero.css';

const IconMap = {
    'FaShieldAlt': FaShieldAlt,
    'FaCloud': FaCloud,
    'FaRocket': FaRocket,
    'FaIndustry': FaIndustry,
    'FaCogs': FaCogs,
    'FaChartLine': FaChartLine,
    'FaUsers': FaUsers,
    'FaServer': FaServer,
    'FaLaptopCode': FaLaptopCode,
    'FaCubes': FaCubes,
    'FaBrain': FaBrain,
    'FaRobot': FaRobot,
    'FaNetworkWired': FaNetworkWired,
    'FaCode': FaCode,
    'FaUserTie': FaUserTie,
    'FaGlobe': FaGlobe
};

const Hero = ({ data }) => {
    // Basic text defaults
    const title = data?.title || `Software Solutions for <span class="d-none d-md-inline"></span><span style="color: var(--codeifyy-green)">Mission-Critical</span> <span class="d-none d-md-inline"><br /></span>Organizations.`;
    const subTitle = data?.subTitle || "Engineering";
    const description = data?.description?.replace(/<\/?[^>]+(>|$)/g, "") || "We combine engineering precision, strategic thinking, and agile execution to deliver scalable software products that accelerate business transformation.";
    const btnText = data?.ctaText || "Start Your Project";
    const btnLink = data?.ctaLink || data?.ctaLnik || "/contact";

    // Dynamic elements for the code window or floating badges
    const specialists = data?.elements || [];
    const graphicType = data?.graphicType || 'code'; // 'code', 'about', or 'profile'
    const codeLines = data?.codeLines || [];
    const profile = data?.profile || {}; // For 'profile' graphic

    const renderIcon = (iconName, fallback, props = {}) => {
        const Icon = IconMap[iconName];
        return Icon ? <Icon {...props} /> : fallback;
    };

    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center hero-row">

                    {/* LEFT COLUMN: Value Proposition */}
                    <div className={graphicType === 'about' ? "col-lg-7" : "col-12 col-md-6 mb-3 mb-md-0"}>
                        {/* Label */}
                        <div className="hero-label">
                            {subTitle}
                        </div>

                        {/* Main Title */}
                        {/* Use h1 or div depending on SEO, but original used h1 */}
                        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: data?.title || title }} />

                        {/* Description */}
                        <p className="hero-description">
                            {description}
                        </p>

                        <div className={graphicType === 'about' || graphicType === 'profile' ? "hero-trust-line" : ""}>
                            <a href={btnLink} className={graphicType === 'about' || graphicType === 'profile' ? "btn btn-codeifyy-primary rounded-2 fw-bold px-4 py-3" : "btn btn-codeifyy-primary mb-2"}>
                                {btnText} <FaArrowRight className={graphicType === 'about' || graphicType === 'profile' ? "ms-2" : ""} />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Visual Graphic */}
                    <div className={graphicType === 'about' ? "col-lg-5 d-none d-lg-block" : "col-12 col-md-5 offset-md-1 d-none d-md-block"}>
                        {graphicType === 'about' ? (
                            /* Abstract Graphic: Global Network (About Page Style) */
                            <div className="about-hero-graphic">
                                <div className="hero-graphic-bg">
                                    <div className="central-hub">
                                        <FaGlobe className="globe-icon" />
                                        <div className="hub-center">
                                            <FaNetworkWired className="wired-icon" />
                                        </div>
                                    </div>

                                    <div className="orbit-element orbit-top-right">
                                        <div className="orbit-icon-bg bg-blue"><FaServer /></div>
                                        Enterprise Grade
                                    </div>

                                    <div className="orbit-element orbit-bottom-left">
                                        <div className="orbit-icon-bg bg-green"><FaUsers /></div>
                                        Global Talent
                                    </div>

                                    <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
                                        <circle cx="50%" cy="50%" r="140" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.5" />
                                        <circle cx="50%" cy="50%" r="200" stroke="#e2e8f0" strokeWidth="1" fill="none" opacity="0.5" />
                                    </svg>
                                </div>
                            </div>
                        ) : (
                            <div className="hero-graphic-wrapper">
                                {graphicType === 'profile' ? (
                                    /* Hero Visual: Developer Profile Card (Staff Aug Style) */
                                    <div className="profile-visual-wrapper">
                                        <div className="profile-card">
                                            <div className="profile-header">
                                                <div className="profile-avatar">
                                                    <div className="profile-avatar-placeholder">
                                                        {renderIcon(profile.avatarIcon || 'FaUserTie', <FaUserTie />)}
                                                    </div>
                                                </div>
                                                <div className="profile-info">
                                                    <h3>{profile.name || "Senior Developer"}</h3>
                                                    <span className="profile-role">{profile.role || "Full-Stack Engineer"}</span>
                                                    <div className="profile-status">
                                                        <span className="status-dot"></span> {profile.status || "Available Now"}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="skill-tags">
                                                {(profile.skills || []).map((skill, idx) => (
                                                    <span key={idx} className="skill-tag">
                                                        {renderIcon(skill.icon, <FaCode />, { style: { color: skill.color } })}
                                                        {skill.name}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="code-snippet-mini">
                                                {codeLines.map((line, idx) => (
                                                    <div key={idx} dangerouslySetInnerHTML={{ __html: line.content }} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Floating Stats */}
                                        {specialists.map((spec, idx) => (
                                            <div key={idx} className={`floating-card ${spec.className}`}>
                                                <div className="fc-icon">
                                                    {renderIcon(spec.iconName, <FaCheckCircle />)}
                                                </div>
                                                <div className="fc-content">
                                                    <div>{spec.title}</div>
                                                    <div>{spec.subtitle}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    /* Base Layer: Code Window (Default/Service/Industry Style) */
                                    <>
                                        <div className="code-window">
                                            <div className="window-header">
                                                <div className="dot red"></div>
                                                <div className="dot yellow"></div>
                                                <div className="dot green"></div>
                                            </div>
                                            <div className="window-body">
                                                {codeLines.length > 0 ? (
                                                    codeLines.map((line, idx) => (
                                                        <span key={idx} className={`code-line ${line.indent ? 'pl-3' : ''}`} style={line.indent ? { paddingLeft: '1.5rem' } : {}}>
                                                            {line.comment && <span className="c-gray">// {line.comment}</span>}
                                                            {line.content && <span dangerouslySetInnerHTML={{ __html: line.content }} />}
                                                            {line.br && <br />}
                                                        </span>
                                                    ))
                                                ) : (
                                                    <>
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
                                                    </>
                                                )}
                                            </div>
                                        </div>

                                        {/* Floating Badges */}
                                        {specialists.length >= 3 ? (
                                            <>
                                                <div className={`floating-badge ${specialists[0]?.className || 'badge-security'}`}>
                                                    <div className="badge-icon" style={specialists[0]?.color ? { background: specialists[0].color } : {}}>
                                                        {renderIcon(specialists[0]?.iconName, <FaShieldAlt />)}
                                                    </div>
                                                    <span>{specialists[0]?.title}</span>
                                                </div>
                                                <div className={`floating-badge ${specialists[1]?.className || 'badge-cloud'}`}>
                                                    <div className="badge-icon" style={specialists[1]?.color ? { background: specialists[1].color } : {}}>
                                                        {renderIcon(specialists[1]?.iconName, <FaCloud />)}
                                                    </div>
                                                    <span>{specialists[1]?.title}</span>
                                                </div>
                                                <div className={`floating-badge ${specialists[2]?.className || 'badge-performance'}`}>
                                                    <div className="badge-icon" style={specialists[2]?.color ? { background: specialists[2].color } : {}}>
                                                        {renderIcon(specialists[2]?.iconName, <FaRocket />)}
                                                    </div>
                                                    <span>{specialists[2]?.title}</span>
                                                </div>
                                            </>
                                        ) : (
                                            <>
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
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
