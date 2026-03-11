import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { sharedOffering } from '../../data/pagesContent';

const Features = ({ data }) => {
    const [activeTab, setActiveTab] = useState(0);
    const tabsContainerRef = useRef(null);

    const title = data?.title || 'Explore Our <span class="highlight-span">Offering</span>';

    const servicesFromAPI = data?.elements?.map(el => ({
        category: el.title,
        title: el.title,
        desc: (el.shortDescription || el.desc || "").replace(/<\/?[^>]+(>|$)/g, ""),
        points: el.points || [],
        link: (el.ctaLink || el.ctaLnik || el.link) ? ((el.ctaLink || el.ctaLnik || el.link).startsWith('http') ? (el.ctaLink || el.ctaLnik || el.link) : `/${(el.ctaLink || el.ctaLnik || el.link).replace(/^\//, '')}`) : "/services"
    })) || [];

    const services = servicesFromAPI.length > 0 ? servicesFromAPI : sharedOffering;

    const handleNextTab = () => {
        if (activeTab < services.length - 1) {
            handleManualClick(activeTab + 1);
        }
    };

    const handlePrevTab = () => {
        if (activeTab > 0) {
            handleManualClick(activeTab - 1);
        }
    };

    const handleManualClick = (index) => {
        setActiveTab(index);
        // On mobile, scroll the clicked tab into view
        if (window.innerWidth <= 992 && tabsContainerRef.current) {
            const tabs = tabsContainerRef.current.querySelectorAll('.service-tab-btn');
            if (tabs[index]) {
                tabs[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }
    };

    return (
        <section className="services-section-tabs">
            <div className="container">
                <div className="services-intro">
                    <h2 className="services-heading text-center" dangerouslySetInnerHTML={{ __html: title }} />
                </div>

                <div className="services-tabs-layout">
                    {/* Sidebar Tabs Area with Navigation Arrows */}
                    <div className="services-tabs-wrapper">
                        {activeTab > 0 && (
                            <button
                                className="nav-arrow-btn prev"
                                onClick={handlePrevTab}
                                aria-label="Previous Service"
                            >
                                <FaArrowRight style={{ transform: 'rotate(180deg)' }} />
                            </button>
                        )}

                        <div className="services-sidebar" ref={tabsContainerRef}>
                            {services.map((service, index) => (
                                <button
                                    key={index}
                                    className={`service-tab-btn ${activeTab === index ? 'active' : ''}`}
                                    onClick={() => handleManualClick(index)}
                                >
                                    <span className="tab-label">{service.category}</span>
                                    {activeTab === index && (
                                        <div className="tab-indicator-green"></div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {activeTab < services.length - 1 && (
                            <button
                                className="nav-arrow-btn next"
                                onClick={handleNextTab}
                                aria-label="Next Service"
                            >
                                <FaArrowRight />
                            </button>
                        )}
                    </div>

                    {/* Right Content - Details */}
                    <div className="services-content-area">
                        <div className="service-detail animate-fade-in" key={activeTab}>
                            <h3 className="service-detail-title">{services[activeTab].title}</h3>
                            <p className="service-detail-desc" dangerouslySetInnerHTML={{ __html: services[activeTab].desc }} />
                            {services[activeTab].points && services[activeTab].points.length > 0 && (
                                <ul className="service-detail-list">
                                    {services[activeTab].points.map((point, idx) => (
                                        <li key={idx} className="service-point">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <Link to={services[activeTab].link || '#'} className="service-learn-more">
                                Learn more <span className="arrow">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
