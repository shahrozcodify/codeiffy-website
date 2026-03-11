import React from 'react';
import {
    FaLightbulb, FaShieldAlt, FaChartLine, FaRocket, FaUsers,
    FaCheckCircle, FaHandshake, FaLayerGroup, FaHeadset, FaStar
} from 'react-icons/fa';

const IconMap = {
    FaLightbulb, FaShieldAlt, FaChartLine, FaRocket, FaUsers,
    FaCheckCircle, FaHandshake, FaLayerGroup, FaHeadset, FaStar
};

const CoreValues = ({ data }) => {
    const title = data?.title;
    const subTitle = data?.subTitle;
    const values = data?.elements || [];

    return (
        <section className="pt-2 bg-white core-values-section">
            <div className="container">
                <div className="text-center mb-5">
                    {title && <h2 className="section-title">{title}</h2>}
                    {subTitle && <p className="section-subtitle">{subTitle}</p>}
                </div>
                <div className="values-grid-row">
                    {values.map((val, i) => {
                        const Icon = IconMap[val.iconName];
                        return (
                            <div key={i}>
                                <div className="core-value-card">
                                    <div className="core-value-icon-box">
                                        {Icon && <Icon />}
                                    </div>
                                    <h4 className="core-value-title">{val.title}</h4>
                                    <p className="core-value-desc">{val.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
