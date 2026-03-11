import React from 'react';
import * as FaIcons from 'react-icons/fa';
import './ServiceProcess.css';

const ServiceProcess = ({ data }) => {
    const title = data?.title || "";
    const subtitle = data?.subtitle || data?.subTitle || "";
    const steps = data?.elements || data?.steps || [];
    const dark = data?.dark === true;

    return (
        <section className={`approach-section ${dark ? 'dark' : ''}`}>
            <div className="container">
                {title && <h2 className={`section-title ${dark ? 'text-white' : ''}`} dangerouslySetInnerHTML={{ __html: title }} />}
                {subtitle && <p className={`section-subtitle ${dark ? 'text-white opacity-75' : ''}`} dangerouslySetInnerHTML={{ __html: subtitle }} />}

                {data.description && <p className="process-intro" dangerouslySetInnerHTML={{ __html: data.description }} />}

                <div className={`approach-steps process-grid ${data.variant === 'minimal' ? 'minimal' : ''}`}>
                    {steps.map((step, index) => {
                        const IconComponent = FaIcons[step.iconName || step.icon];
                        
                        if (data.variant === 'minimal') {
                            return (
                                <div key={index} className="approach-step-card">
                                    {IconComponent && <IconComponent className="step-icon" />}
                                    <span className="step-name">{step.title}</span>
                                    {step.description && (
                                        <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.8 }}>{step.description}</div>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <div key={index} className="approach-step-card process-card">
                                <span className="step-number">{(index + 1).toString().padStart(2, '0')}</span>
                                <div className="icon-wrapper">
                                    {IconComponent && <IconComponent className="process-icon" />}
                                </div>
                                <h4 className="process-title step-name">{step.title}</h4>
                                {step.description && (
                                    <div className="step-description">{step.description}</div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {data.closingLine && <p className="process-outro" dangerouslySetInnerHTML={{ __html: data.closingLine }} />}
            </div>
        </section>
    );
};

export default ServiceProcess;
