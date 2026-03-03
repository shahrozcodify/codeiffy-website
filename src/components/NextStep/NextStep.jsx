import React, { useState, useEffect, useRef } from 'react';
import './NextStep.css';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const NextStep = () => {
    const [activeStep, setActiveStep] = useState(0);
    const scrollSectionRef = useRef(null);
    const tabsContainerRef = useRef(null);

    const steps = [
        {
            title: "Discovery",
            description: "We begin by diving deep into your business goals, target audience, and functional requirements. Our team conducts thorough research and stakeholder interviews to ensure we have a crystal-clear understanding of what success looks like for your project. This phase lays the foundation for a solution that truly fits your needs."
        },
        {
            title: "Architecture",
            description: "Based on the discovery insights, our system architects design a robust, scalable, and secure technical infrastructure. We select the best technology stack and plan the data flow, ensuring the system can handle growth and perform reliably under pressure. This is the blueprint for your digital success."
        },
        {
            title: "Development",
            description: "Our expert developers bring the architecture to life using clean, efficient, and maintainable code. We follow agile methodologies, breaking the project into manageable sprints with regular updates. This ensures transparency and allows for flexibility as the product evolves during the build process."
        },
        {
            title: "Testing",
            description: "Quality is paramount. Our QA team performs rigorous automated and manual testing to identify and fix bugs early. We check for usability, performance, security, and compatibility across devices, ensuring a flawless user experience before launch."
        },
        {
            title: "Deployment",
            description: "We manage a smooth and secure deployment process, moving your solution from the development environment to production. Our team configures servers, databases, and CI/CD pipelines to ensure zero downtime and a seamless transition for your users."
        },
        {
            title: "Optimization",
            description: "The launch is just the beginning. We continuously monitor system performance, user behavior, and security metrics to identify areas for improvement. Through regular updates and optimizations, we ensure your software remains efficient, secure, and ahead of the competition."
        }
    ];

    const assuranceList = [
        "Clear documentation",
        "Code reviews",
        "Automated testing",
        "Security compliance",
        "Performance optimization"
    ];

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
        <>
            {/* METHODOLOGY SECTION */}
            <section
                className="delivery-methodology-section"
            >
                <div className="methodology-wrapper">
                    <div className="container">
                        <h2 className="section-heading-centered animate-up" style={{ marginBottom: '2rem' }}>
                            Delivery Methodology
                        </h2>

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
                        {/* Assurance is REMOVED from here to prevent sticky overlap */}
                    </div>
                </div>
            </section>

            {/* STATIC ASSURANCE SECTION */}
            {/* <section className="assurance-container-section">
                <div className="container">
                    <div className="assurance-wrapper animate-up">
                        <h3 className="assurance-heading">We ensure:</h3>
                        <ul className="assurance-list">
                            {assuranceList.map((item, index) => (
                                <li key={index} className="assurance-item">
                                    <FaCheckCircle className="check-icon" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default NextStep;
