import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CTA from '../../components/cta/CTA';
import {
    FaCheckCircle, FaGlobe, FaUsers, FaLaptopCode, FaRocket,
    FaShieldAlt, FaLightbulb, FaUserTie, FaNetworkWired
} from 'react-icons/fa';
import './Career.css';

const Career = () => {
    const roles = [
        { title: 'Senior Backend Engineer', location: 'Remote / Hybrid', department: 'Engineering', status: 'Coming Soon' },
        { title: 'Product Manager', location: 'Remote', department: 'Product', status: 'Coming Soon' },
        { title: 'Head of Business Development', location: 'Remote / Global', department: 'Business & Growth', status: 'Coming Soon' },
        { title: 'Head of Content', location: 'Remote', department: 'Marketing', status: 'Coming Soon' },
        { title: 'HR & Admin Officer', location: 'Onsite (Lahore)', department: 'Operations', status: 'Coming Soon' },
    ];

    const philosophy = [
        {
            title: 'Remote & Flexible',
            desc: 'Work with global clients while maintaining work-life balance.',
            icon: <FaGlobe />,
        },
        {
            title: 'Ownership & Impact',
            desc: 'Build products used by real businesses across industries.',
            icon: <FaUsers />,
        },
        {
            title: 'Engineering Excellence',
            desc: 'Modern tech stacks, clean architecture, and scalable systems.',
            icon: <FaLaptopCode />,
        }
    ];

    return (
        <div className="career-page">
            <Header />
            <main>
                {/* HERO SECTION */}
                <section className="career-hero-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <span className="hero-label-premium">Careers at Codeifyy</span>
                                <h1 className="career-hero-title">
                                    Join the <span style={{ color: 'var(--codeifyy-green)' }}>Evolution</span> <br />
                                    of Software Engineering.
                                </h1>
                                <p className="career-hero-desc">
                                    We’re building intelligent software, scalable systems, and AI-powered solutions that shape industries. Join a team driven by ownership, innovation, and measurable impact.
                                </p>
                                <a href="#open-positions" className="btn btn-codeifyy-primary rounded-2 fw-bold px-5 py-3">
                                    View Open Positions
                                </a>
                            </div>
                            <div className="col-lg-5 d-none d-lg-block">
                                <div className="career-graphic-wrapper">
                                    <div className="team-badge-window">
                                        <div className="badge-header">
                                            <div className="badge-avatar">
                                                <FaUserTie />
                                            </div>
                                            <div className="badge-lines">
                                                <div className="line-short"></div>
                                                <div className="line-long"></div>
                                            </div>
                                        </div>
                                        <div style={{ color: 'var(--codeifyy-navy)', fontWeight: '700', fontSize: '1.1rem' }}>Team Evolution</div>
                                        <p style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '0.5rem' }}>Building the future, one line at a time.</p>
                                    </div>

                                    {/* Floating Perks */}
                                    <div className="floating-perks perk-1">
                                        <FaRocket style={{ color: '#f59e0b' }} /> High Impact
                                    </div>
                                    <div className="floating-perks perk-2">
                                        <FaGlobe style={{ color: '#10b981' }} /> Global Network
                                    </div>
                                    <div className="floating-perks perk-3">
                                        <FaShieldAlt style={{ color: '#3b82f6' }} /> Secure Future
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PHILOSOPHY SECTION */}
                <section className="philosophy-section">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-title">Our Philosophy</h2>
                            <p className="section-subtitle">How we work and why it matters.</p>
                        </div>

                        <div className="philosophy-grid">
                            {philosophy.map((item, i) => (
                                <div key={i} className="service-card-premium">
                                    <span className="card-number">{(i + 1).toString().padStart(2, '0')}</span>
                                    <div className="card-icon-box">{item.icon}</div>
                                    <h3 className="card-title">{item.title}</h3>
                                    <p className="card-desc">{item.desc}</p>

                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OPEN POSITIONS */}
                <section className="roles-container" id="open-positions">
                    <div className="roles-header">
                        <h2 className="section-title">Open Positions</h2>
                        <p className="section-subtitle">Find your next challenge.</p>
                    </div>

                    <div className="roles-grid-premium">
                        {roles.map((role, i) => (
                            <div key={i} className="role-card-premium">
                                <div className="role-main">
                                    <h3>{role.title}</h3>
                                    <div className="role-tags">
                                        <span>{role.department}</span>
                                        <span style={{ opacity: 0.3 }}>|</span>
                                        <span>{role.location}</span>
                                    </div>
                                </div>
                                <div className="role-status-badge">
                                    {role.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="pb-5">
                    <div className="container">
                        <CTA
                            title="Ready to Build the Future?"
                            text="Even if you don't see a perfect fit, we're always looking for exceptional talent to join our mission."
                            btnText="Send Your CV"
                            link="/contact"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Career;
