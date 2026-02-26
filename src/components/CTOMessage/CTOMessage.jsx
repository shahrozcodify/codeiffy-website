import React from 'react';
import './CTOMessage.css';
import { FaQuoteLeft } from 'react-icons/fa';

const CTOMessage = () => {
    return (
        <section className="cto-message-section">
            <div className="container">
                <div className="cto-header animate-up">
                    <h2 className="cto-main-title">
                        CTO <span className="highlight-span">Message</span>
                    </h2>
                </div>

                <div className="cto-card-wrapper animate-up delay-1">
                    <div className="cto-card">
                        <div className="cto-info-col">
                            <div className="cto-image-container">
                                <img
                                    src="/hero.png"
                                    alt="Muhammad Ahmed - CTO Codeifyy"
                                    className="cto-image"
                                />
                            </div>
                            <div className="cto-details">
                                <h3 className="cto-name underline">Muhammad Ahmed</h3>
                                <p className="cto-title">Co-Founder & CTO Codeifyy</p>
                            </div>
                        </div>

                        <div className="cto-quote-col">
                            <div className="quote-content">
                                <FaQuoteLeft className="quote-icon" />
                                <p className="quote-text">
                                    Technology should not just support business — it should drive it. At Codeifyy,
                                    we combine software engineering excellence with artificial intelligence to build
                                    scalable, future-ready solutions. From product development to strategic
                                    consulting and team augmentation, our goal is to deliver innovation that creates
                                    real, measurable impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTOMessage;
