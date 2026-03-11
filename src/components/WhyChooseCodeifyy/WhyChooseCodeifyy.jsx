import React from 'react';
import './WhyChooseCodeifyy.css';
import {
    FaBrain, FaHandshake, FaShieldAlt, FaRocket,
    FaLayerGroup, FaHeadset, FaCheckCircle, FaChartLine, FaUsers
} from 'react-icons/fa';

import { sharedWhyChoose } from '../../data/pagesContent';

const IconMap = {
    FaBrain, FaHandshake, FaShieldAlt, FaRocket,
    FaLayerGroup, FaHeadset, FaCheckCircle, FaChartLine, FaUsers
};

const WhyChooseCodeifyy = ({ data }) => {
    const title = data?.title || 'Why Choose <span class="highlight-span">CODEIFYY</span>';
    const description = data?.description?.replace(/<\/?[^>]+(>|$)/g, '') || 'Partner with a team that values quality, transparency, and results.';
    const btnText = data?.ctaText || "Let's Get Started";
    const btnLink = data?.ctaLink || data?.ctaLnik || "/contact";
    const reasons = data?.elements || sharedWhyChoose;

    return (
        <section className="why-choose-section">
            <div className="container">
                <div className="why-choose-header animate-up">
                    {title && (
                        <h2
                            className="why-choose-title"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                    )}
                    {description && (
                        <p className="why-choose-description">{description}</p>
                    )}
                </div>

                <div className="why-choose-grid">
                    {reasons.map((item, index) => {
                        const Icon = IconMap[item.iconName];
                        return (
                            <div key={index} className={`why-choose-card animate-up delay-${index + 1}`}>
                                <div className="why-icon-wrapper">
                                    {Icon && <Icon />}
                                </div>
                                <h3 className="why-card-title">{item.title}</h3>
                                <p className="why-card-desc">
                                    {item.desc || item.shortDescription}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {btnLink && btnText && (
                    <div className="center-btn-wrapper animate-up">
                        <a href={btnLink} className="btn btn-codeifyy-primary">{btnText}</a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WhyChooseCodeifyy;
