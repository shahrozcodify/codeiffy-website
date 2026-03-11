import React from 'react';
import * as FaIcons from 'react-icons/fa';
import './BenefitGrid.css';

const BenefitGrid = ({ data }) => {
    const title = data?.title || "";
    const subtitle = data?.subtitle || data?.subTitle || "";
    const benefits = data?.elements || [];
    const dark = data?.dark !== false;

    return (
        <section className={`benefits-grid-section ${dark ? 'dark' : ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        {title && <h2 className={`section-title text-start ${dark ? 'text-white' : ''}`} dangerouslySetInnerHTML={{ __html: title }} />}
                        {subtitle && <p className={`section-description text-start ${dark ? 'text-white' : ''}`} dangerouslySetInnerHTML={{ __html: subtitle }} />}
                    </div>
                    <div className="col-lg-6 offset-lg-1">
                        <div className="row">
                            {benefits.map((benefit, index) => {
                                const IconComponent = FaIcons[benefit.iconName || benefit.icon];
                                return (
                                    <div key={index} className="col-md-6">
                                        <div className="benefit-item">
                                            {IconComponent && <IconComponent className="benefit-icon" />}
                                            <div dangerouslySetInnerHTML={{ __html: `<strong>${benefit.title}</strong>` }} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitGrid;
