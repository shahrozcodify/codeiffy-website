import React from 'react';
import { FaCar, FaLaptopCode, FaIndustry, FaGasPump, FaShoppingCart, FaGraduationCap, FaCoins, FaCalculator, FaBuilding, FaPassport, FaGamepad } from 'react-icons/fa';

const Industries = () => {
    const industries = [
        { name: 'Automobile', icon: <FaCar /> },
        { name: 'Information Technology', icon: <FaLaptopCode /> },
        { name: 'Manufacturing', icon: <FaIndustry /> },
        { name: 'Oil & Gas', icon: <FaGasPump /> },
        { name: 'Ecommerce & Retail', icon: <FaShoppingCart /> },
        { name: 'Education', icon: <FaGraduationCap /> },
        { name: 'Fintech', icon: <FaCoins /> },
        { name: 'Accounting', icon: <FaCalculator /> },
        { name: 'Real Estate', icon: <FaBuilding /> },
        { name: 'Telecommunication', icon: <FaPassport /> },
        // { name: 'Gaming', icon: <FaGamepad /> }
    ];

    return (
        <section className="industries-section section-padding" style={{ backgroundColor: '#f8fafc' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-heading-centered animate-up">
                        <span>Industries</span> We Serve
                    </h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                        We deliver domain-specific solutions tailored to the operational and regulatory demands of multiple industries.
                    </p>
                </div>

                <div className="industries-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '2rem'
                }}>
                    {industries.map((industry, index) => (
                        <div key={index} className="industry-card animate-up" style={{
                            background: 'white',
                            padding: '2rem',
                            borderRadius: '12px',
                            textAlign: 'center',
                            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                            transition: 'transform 0.3s ease'
                        }}>
                            <div style={{ fontSize: '2.5rem', color: 'var(--codeifyy-green)', marginBottom: '1rem' }}>
                                {industry.icon}
                            </div>
                            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--codeifyy-navy)' }}>
                                {industry.name}
                            </h4>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <a href="/industries" className="btn btn-codeifyy-primary">Explore Industry Solutions</a>
                </div>
            </div>
        </section>
    );
};

export default Industries;
