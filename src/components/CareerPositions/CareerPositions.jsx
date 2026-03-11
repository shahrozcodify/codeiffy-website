import React from 'react';
import { FaGlobe, FaUsers, FaLaptopCode } from 'react-icons/fa';
import '../../pages/Career/Career.css';

const ICON_MAP = {
    FaGlobe: <FaGlobe />,
    FaUsers: <FaUsers />,
    FaLaptopCode: <FaLaptopCode />,
};

const CareerPositions = ({ data }) => {
    const philosophyTitle = data?.philosophyTitle || 'Our Philosophy';
    const philosophySubtitle = data?.philosophySubtitle || 'How we work and why it matters.';
    const positionsTitle = data?.positionsTitle || 'Open Positions';
    const positionsSubtitle = data?.positionsSubtitle || 'Find your next challenge.';

    const philosophy = data?.philosophy || [
        { title: 'Remote & Flexible', desc: 'Work with global clients while maintaining work-life balance.', iconName: 'FaGlobe' },
        { title: 'Ownership & Impact', desc: 'Build products used by real businesses across industries.', iconName: 'FaUsers' },
        { title: 'Engineering Excellence', desc: 'Modern tech stacks, clean architecture, and scalable systems.', iconName: 'FaLaptopCode' },
    ];

    const roles = data?.roles || [
        { title: 'Senior Backend Engineer', location: 'Remote / Hybrid', department: 'Engineering', status: 'Coming Soon' },
        { title: 'Product Manager', location: 'Remote', department: 'Product', status: 'Coming Soon' },
        { title: 'Head of Business Development', location: 'Remote / Global', department: 'Business & Growth', status: 'Coming Soon' },
        { title: 'Head of Content', location: 'Remote', department: 'Marketing', status: 'Coming Soon' },
    ];

    return (
        <>
            {/* PHILOSOPHY SECTION */}
            <section className="philosophy-section section-padding-md">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title" dangerouslySetInnerHTML={{ __html: philosophyTitle }} />
                        <p className="section-subtitle" dangerouslySetInnerHTML={{ __html: philosophySubtitle }} />
                    </div>
                    <div className="philosophy-grid">
                        {philosophy.map((item, i) => (
                            <div key={i} className="service-card-premium">
                                <div className="card-header-flex">
                                    <div className="card-icon-box">
                                        {ICON_MAP[item.iconName] || <FaGlobe />}
                                    </div>
                                    <span className="card-number">{(i + 1).toString().padStart(2, '0')}</span>
                                </div>
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
                    <h2 className="section-title">{positionsTitle}</h2>
                    <p className="section-subtitle">{positionsSubtitle}</p>
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
                            <div className="role-status-badge">{role.status}</div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default CareerPositions;
