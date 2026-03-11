import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './CustomerStories.css';

import { sharedCaseStudies } from '../../data/pagesContent';

const CustomerStories = ({ data }) => {
    const navigate = useNavigate();

    const title = data?.title || 'Success Stories from Our Clients';
    const description = (data?.description || 'See how we deliver measurable results for industry leaders.').replace(/<\/?[^>]+(>|$)/g, '');
    const btnText = data?.ctaText || 'View All Case Studies';
    const btnLink = data?.ctaLink || data?.ctaLnik || '/casestudy';

    const featuredStories = (data?.elements || sharedCaseStudies).map(el => ({
        id: el.id || el.title,
        title: el.title,
        summary: el.shortDescription?.replace(/<\/?[^>]+(>|$)/g, '') || '',
        image: el.image,
        industry: el.industry || 'Innovation',
        slug: el.ctaLink?.split('/').pop() || el.ctaLnik?.split('/').pop() || 'case-study',
        result: el.result || 'Delivered'
    }));

    if (!featuredStories.length) return null;

    return (
        <section className="customer-stories-section">
            <div className="container">
                {title && (
                    <h2
                        className="section-heading-centered animate-up"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                )}

                {description && (
                    <div className="center-btn-wrapper animate-up">
                        <p>{description}</p>
                    </div>
                )}

                <div className="customer-stories-grid animate-up">
                    {featuredStories.map((study) => (
                        <div key={study.id} className="customer-story-card">
                            <div
                                className="customer-story-img-wrapper"
                                onClick={() => navigate(`/casestudy/${study.slug}`)}
                            >
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="customer-story-image"
                                />
                                <div className="customer-story-overlay"></div>
                            </div>
                            <div className="customer-story-content">
                                <div className="customer-story-badges">
                                    <span className="badge-result">{study.industry}</span>
                                    <span className="badge-result">{study.result}</span>
                                </div>
                                <h3
                                    className="customer-story-title"
                                    onClick={() => navigate(`/casestudy/${study.slug}`)}
                                >
                                    {study.title}
                                </h3>
                                <p className="customer-story-summary">{study.summary}</p>
                                <span
                                    className="read-more-link"
                                    onClick={() => navigate(`/casestudy/${study.slug}`)}
                                >
                                    Read Case Study <FaArrowRight className="ms-2" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {btnLink && btnText && (
                    <div className="center-btn-wrapper animate-up mt-5">
                        <a href={btnLink} className="btn btn-codeifyy-primary">{btnText}</a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CustomerStories;
