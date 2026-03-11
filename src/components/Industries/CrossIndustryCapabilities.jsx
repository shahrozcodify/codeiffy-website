import React from 'react';
import {
    FaLaptopCode, FaBrain, FaCogs, FaCheckCircle,
    FaUserCog, FaCloud, FaRocket, FaShieldAlt, FaChartLine
} from 'react-icons/fa';
import './Industries.css';

const IconMap = {
    FaLaptopCode, FaBrain, FaCogs, FaCheckCircle,
    FaUserCog, FaCloud, FaRocket, FaShieldAlt, FaChartLine
};

const CrossIndustryCapabilities = ({ data }) => {
    const title = data?.title;
    const subTitle = data?.subTitle;
    const capabilities = data?.elements || [];

    return (
        <section className="cross-industry-section">
            <div className="container">
                <div className="text-center">
                    {title && <h2 className="section-title">{title}</h2>}
                    {subTitle && <p className="section-subtitle">{subTitle}</p>}
                </div>

                <div className="cross-industry-grid">
                    {capabilities.map((cap, index) => {
                        const Icon = IconMap[cap.iconName];
                        return (
                            <div key={index} className="capability-card">
                                <div className="capability-icon">
                                    {Icon && <Icon />}
                                </div>
                                <h4 className="capability-title">{cap.title}</h4>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CrossIndustryCapabilities;
