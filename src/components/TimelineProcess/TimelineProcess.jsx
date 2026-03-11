import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './TimelineProcess.css';

const TimelineProcess = ({ data }) => {
    const title = data?.title || "";
    const subtitle = data?.subTitle || data?.description || "";
    const steps = data?.elements || [];

    return (
        <section className="timeline-section">
            <div className="container">
                {title && <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />}
                {subtitle && <p className="section-subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />}

                <div className="arrow-process">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <div className="arrow-step">
                                <span className="arrow-step-num">
                                    {(index + 1).toString().padStart(2, '0')}
                                </span>
                                <span className="arrow-step-label">{step.title || step.label}</span>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="arrow-connector">
                                    <FaArrowRight />
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TimelineProcess;
