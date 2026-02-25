import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CTA from '../../components/cta/CTA';
import { FaArrowRight } from 'react-icons/fa';
import { caseStudies as caseStudiesData } from '../../data/caseStudies';
import CaseStudyCardSkeleton from '../../components/Skeleton/CaseStudyCardSkeleton';
import './CaseStudies.css';

const CaseStudyList = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    // Use data directly as it now contains images
    const caseStudies = caseStudiesData;

    return (
        <div className="case-studies-page">
            <Header />

            {/* Premium Hero Banner (Simple/Clean Style) */}
            <section className="case-study-banner animate-up">
                <div className="container">
                    <div className="case-study-banner-content">
                        <span style={{
                            color: 'var(--codeifyy-green)',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            display: 'block',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                        }}>
                            Our Work
                        </span>
                        <h1 className="case-study-banner-title">
                            Transformative <span className="highlight">Success Stories</span>
                        </h1>
                        <p className="case-study-banner-text">
                            Discover how we help businesses across industries achieve operational excellence, scalability, and digital transformation.
                        </p>
                    </div>
                </div>
            </section>

            <main className="container pb-5">
                <div className="case-study-grid">
                    {isLoading ? (
                        [...Array(6)].map((_, index) => (
                            <CaseStudyCardSkeleton key={index} />
                        ))
                    ) : (
                        caseStudies.map((study) => (
                            <Link to={`/casestudy/${study.slug}`} key={study.id} style={{ textDecoration: 'none' }}>
                                <div className="case-study-card-simple">
                                    <div className="case-study-img-wrapper">
                                        <img src={study.image} alt={study.title} className="case-study-img-top" />
                                    </div>

                                    <div className="case-study-simple-content">
                                        <h3 className="case-study-simple-title">
                                            {study.title}
                                        </h3>

                                        <div className="read-more-btn">
                                            Read More <FaArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </main>

            <div className="container pb-5">
                <CTA
                    title="Ready to Write Your Success Story?"
                    text="Partner with Codeifyy to build scalable, high-performance digital solutions tailored to your business goals."
                    btnText="Start Your Project"
                />
            </div>

            <Footer />
        </div>
    );
};

export default CaseStudyList;
