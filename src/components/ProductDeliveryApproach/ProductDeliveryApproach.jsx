import React, { useState, useEffect, useRef } from 'react';
import '../NextStep/NextStep.css';
import { FaArrowRight } from 'react-icons/fa';

const ProductDeliveryApproach = () => {
    const [activeStep, setActiveStep] = useState(0);
    const scrollSectionRef = useRef(null);

    const steps = [
        {
            title: "Discovery & Research",
            description: "We dive deep into your market, users, and business goals to define a clear product vision."
        },
        {
            title: "Product Blueprint & Architecture",
            description: "We design a scalable technical foundation and a detailed product roadmap."
        },
        {
            title: "Agile Engineering",
            description: "Iterative development with frequent releases to ensure flexibility and rapid progress."
        },
        {
            title: "Testing & Validation",
            description: "Rigorous QA and user testing to ensure a bug-free, market-ready product."
        },
        {
            title: "Deployment",
            description: "Seamless launch execution with zero downtime and scalable infrastructure setup."
        },
        {
            title: "Continuous Improvement",
            description: "Data-driven optimization and feature enhancements to keep your product ahead."
        }
    ];

    // Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            if (!scrollSectionRef.current) return;

            // Only run logic on desktop/large screens where sticky is active
            if (window.innerWidth <= 768) return;

            const rect = scrollSectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;

            // Sticky Height is 250vh.
            // Effective scrollable distance = sectionHeight - windowHeight
            const scrollableDistance = sectionHeight - windowHeight;
            const scrolled = -sectionTop;

            if (scrolled < 0) {
                setActiveStep(0); // Before section
                return;
            }
            if (scrolled > scrollableDistance) {
                setActiveStep(steps.length - 1); // After section
                return;
            }

            const progress = scrolled / scrollableDistance;
            const stepIndex = Math.min(
                Math.max(Math.floor(progress * steps.length), 0),
                steps.length - 1
            );

            setActiveStep(stepIndex);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [steps.length]);

    const handleStepClick = (index) => {
        setActiveStep(index);
    };

    return (
        <section
            className="delivery-methodology-section"
            ref={scrollSectionRef}
            style={{ height: '250vh' }}
        >
            <div className="methodology-sticky-wrapper">
                <div className="container">
                    <h2 className="section-heading-centered animate-up" style={{ marginBottom: '2rem' }}>
                        Our Product Delivery Approach
                    </h2>
                    <p style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
                        Every stage is transparent, measurable, and aligned with your growth strategy.
                    </p>

                    {/* Steps Tabs */}
                    <div className="methodology-tabs-container animate-up delay-1">
                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div
                                    className={`methodology-step-tab ${activeStep === index ? 'active' : ''}`}
                                    onClick={() => handleStepClick(index)}
                                >
                                    <div className="step-circle">
                                        <span className="methodology-number">{index + 1}</span>
                                    </div>
                                    <span style={{ fontSize: '0.8rem', maxWidth: '100px', textAlign: 'center', lineHeight: '1.2' }}>{step.title}</span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="flow-arrow">
                                        <FaArrowRight />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
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
                            <div className="active-indicator"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDeliveryApproach;
