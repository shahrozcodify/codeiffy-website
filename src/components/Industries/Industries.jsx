import React from 'react';
import { FaCar, FaLaptopCode, FaIndustry, FaGasPump, FaShoppingCart, FaGraduationCap, FaCoins, FaCalculator, FaBuilding, FaPassport, FaGamepad } from 'react-icons/fa';
import './Industries.css';
import { sharedIndustries } from '../../data/pagesContent';

const IconMap = {
    FaCar, FaLaptopCode, FaIndustry, FaGasPump, FaShoppingCart, FaGraduationCap, FaCoins, FaCalculator, FaBuilding, FaPassport, FaGamepad
};

const Industries = ({ data }) => {
    const title = data?.title || '<span class="highlight-span">Industries</span> We Serve';
    const subTitle = data?.subTitle || 'We deliver domain-specific solutions tailored to the operational and regulatory demands of multiple industries.';
    const elements = data?.elements || sharedIndustries;
    const ctaText = data?.ctaText || 'Explore Industry Solutions';
    const ctaLink = data?.ctaLink || '/industries';

    return (
        <section className="industries-section">
            <div className="container">
                <div className="industries-header">
                    {title && (
                        <h2 className="industries-title animate-up" dangerouslySetInnerHTML={{ __html: title }} />
                    )}
                    {subTitle && (
                        <p className="industries-description" dangerouslySetInnerHTML={{ __html: subTitle }} />
                    )}
                </div>

                <div className="industries-grid">
                    {elements.map((industry, index) => {
                        const Icon = IconMap[industry.iconName];
                        return (
                            <div key={index} className="industry-card animate-up">
                                <div className="industry-icon">
                                    {Icon && <Icon />}
                                </div>
                                <h4 className="industry-name">
                                    {industry.name}
                                </h4>
                            </div>
                        );
                    })}
                </div>

                {ctaLink && (
                    <div className="industries-cta-wrapper animate-up">
                        <a href={ctaLink} className="btn btn-codeifyy-primary">{ctaText}</a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Industries;
