import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './CustomerStories.css';

import { caseStudies as allCaseStudies } from '../../data/caseStudies';

const CustomerStories = () => {
    const navigate = useNavigate();

    // Select specific case studies to feature (e.g., first 3)
    const featuredStories = allCaseStudies.slice(0, 3).map(study => ({
        ...study,
        result: study.results[0] // Use first result as the main highlight
    }));

    return (
        <section className="customer-stories-section">
            <div className="container">
                <h2 className="section-heading-centered animate-up">
                    Success Stories from Our Clients
                </h2>

                <div className="center-btn-wrapper animate-up" >
                    <p>
                        See how we deliver measurable results for industry leaders.
                    </p>
                </div>

                <div className="customer-stories-grid animate-up">
                    {featuredStories.map((study) => (
                        <div key={study.id} className="customer-story-card">
                            <div className="customer-story-img-wrapper" onClick={() => navigate(`/case-studies/${study.id}`)}>
                                <img src={study.image} alt={study.title} className="customer-story-image" />
                                <div className="customer-story-overlay"></div>
                            </div>
                            <div className="customer-story-content">
                                <div className="customer-story-badges">
                                    <span className="badge-result">{study.industry}</span>
                                    <span className="badge-result">{study.result}</span>
                                </div>
                                <h3 className="customer-story-title" onClick={() => navigate(`/case-studies/${study.id}`)}>{study.title}</h3>
                                <p className="customer-story-summary">{study.summary}</p>
                                <span className="read-more-link" onClick={() => navigate(`/case-studies/${study.id}`)}>
                                    Read Case Study <FaArrowRight style={{ marginLeft: '8px' }} />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="center-btn-wrapper animate-up" style={{ marginTop: '4rem' }}>
                    <button onClick={() => navigate('/case-studies')} className="btn btn-codeifyy-primary">
                        View All Case Studies
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CustomerStories;
