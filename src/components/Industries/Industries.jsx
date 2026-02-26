import React from 'react';
import { FaCar, FaLaptopCode, FaIndustry, FaGasPump, FaShoppingCart, FaGraduationCap, FaCoins, FaCalculator, FaBuilding, FaPassport, FaGamepad } from 'react-icons/fa';
import './Industries.css';

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
    ];

    return (
        <section className="industries-section section-padding">
            <div className="container">
                <div className="industries-header">
                    <h2 className="industries-title animate-up">
                        <span>Industries</span> We Serve
                    </h2>
                    <p className="industries-description">
                        We deliver domain-specific solutions tailored to the operational and regulatory demands of multiple industries.
                    </p>
                </div>

                <div className="industries-grid">
                    {industries.map((industry, index) => (
                        <div key={index} className="industry-card animate-up">
                            <div className="industry-icon">
                                {industry.icon}
                            </div>
                            <h4 className="industry-name">
                                {industry.name}
                            </h4>
                        </div>
                    ))}
                </div>

                <div className="industries-cta-wrapper animate-up">
                    <a href="/industries" className="btn btn-codeifyy-primary">Explore Industry Solutions</a>
                </div>
            </div>
        </section>
    );
};

export default Industries;
