import React, { useState, useRef } from 'react';
import '../NextStep/NextStep.css';
import { FaArrowRight } from 'react-icons/fa';

const ProductDeliveryApproach = ({ data }) => {
    const [activeStep, setActiveStep] = useState(0);
    const tabsContainerRef = useRef(null);

    const defaultSteps = [
        {
            title: "Discovery & Research",
            description: "We dive deep into your market, users, and business goals to define a clear product vision. Our team conducts thorough research to ensure we have a crystal-clear understanding of what success looks like for your project."
        },
        {
            title: "Blueprint & Architecture",
            description: "Based on research, we design a robust, scalable technical foundation. We select the best technology stack and plan the data flow, ensuring the system can handle growth and perform reliably under pressure."
        },
        {
            title: "Agile Engineering",
            description: "Our expert developers bring the architecture to life using clean, efficient, and maintainable code. We follow agile methodologies, with manageable sprints and regular updates to ensure transparency."
        },
        {
            title: "Testing & Validation",
            description: "Quality is paramount. Our QA team performs rigorous automated and manual testing to identify and fix bugs early. We check for usability, performance, and security to ensure a flawless user experience."
        },
        {
            title: "Deployment",
            description: "We manage a smooth and secure deployment process, moving your solution from development to production. Our team configures CI/CD pipelines to ensure zero downtime and a seamless transition."
        },
        {
            title: "Continuous Improvement",
            description: "The launch is just the beginning. We continuously monitor performance, user behavior, and security metrics. Through regular updates, we ensure your software remains efficient and ahead of the competition."
        }
    ];

    const title = data?.title || "Our Product Delivery Approach";
    const steps = data?.elements || defaultSteps;

    // Phase Navigation Logic
    const handleNextPhase = () => {
        if (activeStep < steps.length - 1) {
            handleStepClick(activeStep + 1);
        }
    };

    const handlePrevPhase = () => {
        if (activeStep > 0) {
            handleStepClick(activeStep - 1);
        }
    };

    const handleStepClick = (index) => {
        setActiveStep(index);
        // On mobile, scroll the clicked tab into view
        if (window.innerWidth <= 768 && tabsContainerRef.current) {
            const tabs = tabsContainerRef.current.querySelectorAll('.methodology-step-tab');
            if (tabs[index]) {
                tabs[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }
    };

    return (
        <section className="delivery-methodology-section">
            <div className="methodology-wrapper">
                <div className="container">
                    <h2 className="section-heading-centered animate-up" style={{ marginBottom: '2rem' }} dangerouslySetInnerHTML={{ __html: title }} />

                    {/* Consolidated Steps Tabs with Navigation Arrows */}
                    <div className="methodology-tabs-wrapper animate-up delay-1">
                        {activeStep > 0 && (
                            <button
                                className="nav-arrow-btn prev"
                                onClick={handlePrevPhase}
                                aria-label="Previous Step"
                            >
                                <FaArrowRight />
                            </button>
                        )}

                        <div
                            className="methodology-tabs-container"
                            ref={tabsContainerRef}
                        >
                            {steps.map((step, index) => (
                                <React.Fragment key={index}>
                                    <div
                                        className={`methodology-step-tab ${activeStep === index ? 'active' : ''}`}
                                        onClick={() => handleStepClick(index)}
                                    >
                                        <div className="step-circle">
                                            <span className="methodology-number">{index + 1}</span>
                                        </div>
                                        <span className="step-label">{step.title}</span>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="flow-arrow">
                                            <FaArrowRight />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {activeStep < steps.length - 1 && (
                            <button
                                className="nav-arrow-btn next"
                                onClick={handleNextPhase}
                                aria-label="Next Step"
                            >
                                <FaArrowRight />
                            </button>
                        )}
                    </div>

                    {/* Content Area */}
                    <div className="methodology-content-area animate-up delay-2">
                        <div key={activeStep} className="tab-content">
                            <div className="content-header">
                                <span className="content-number">{activeStep + 1}.</span>
                                <h3 className="content-title">{steps[activeStep].title}</h3>
                            </div>
                            <p className="content-description">
                                {steps[activeStep].description}
                            </p>

                            <div className="desktop-only-actions">
                                {activeStep > 0 && (
                                    <button
                                        className="phase-btn prev-btn"
                                        onClick={handlePrevPhase}
                                    >
                                        <FaArrowRight className="btn-icon rev" /> Previous Phase
                                    </button>
                                )}

                                {activeStep < steps.length - 1 && (
                                    <button
                                        className="phase-btn next-btn"
                                        onClick={handleNextPhase}
                                    >
                                        Next Phase <FaArrowRight className="btn-icon" />
                                    </button>
                                )}
                            </div>

                            <div className="active-indicator"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDeliveryApproach;
