import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CTA from '../../components/cta/CTA';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { caseStudies } from '../../data/caseStudies';
import './CaseStudies.css';

const CaseStudyDetails = () => {
    const { slug } = useParams();
    const [isExpanded, setIsExpanded] = React.useState(false);
    const study = caseStudies.find(s => s.slug === slug);

    // Get suggested case studies (exclude current one, take 3)
    const suggestedStudies = caseStudies
        .filter(s => s.slug !== slug)
        .slice(0, 3);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!study) {
        return (
            <div className="case-studies-page">
                <Header />
                <div className="container py-5 text-center" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h2 style={{ color: 'var(--codeifyy-navy)', marginBottom: '1rem' }}>Case Study Not Found</h2>
                    <Link to="/case-studies" className="btn btn-codeifyy-primary">Return to Case Studies</Link>
                </div>
                <Footer />
            </div>
        );
    }

    // Helper to extract keywords for tech stack tags
    const techTags = study.techStack.split(',').map(tag => tag.trim());

    return (
        <div className="case-studies-page">
            <Header />

            <div className="case-details-hero-banner" style={{
                position: 'relative',
                backgroundImage: `url(${study.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(15, 23, 42, 0.95) 100%)',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="case-details-back-wrapper">
                        <Link to="/casestudy" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            color: 'rgba(255,255,255,0.7)',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '0.9rem'
                        }}>
                            <FaArrowLeft /> Back to Case Studies
                        </Link>
                    </div>
                    <h1 className="case-details-title">{study.title}</h1>
                    <div className="case-details-meta">
                        <div className="case-details-meta-item">
                            <strong>Industry</strong>
                            <span>{study.industry}</span>
                        </div>
                        <div className="case-details-meta-item">
                            <strong>Company Size</strong>
                            <span>{study.companySize}</span>
                        </div>
                        <div className="case-details-meta-item">
                            <strong>{study.id === 2 ? 'Business Model' : 'Technologies'}</strong>
                            <span>{study.techStack}</span>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                <article className={`case-details-container ${!isExpanded ? 'is-truncated' : 'is-expanded'}`}>
                    {/* Content Sections */}
                    <section className="case-details-section">
                        <h2 className="case-details-section-title">About Our Client</h2>
                        <p className="case-details-text">{study.aboutClient}</p>
                    </section>

                    <section className="case-details-section">
                        <h2 className="case-details-section-title">Challenge</h2>
                        <p className="case-details-text">{study.challenge}</p>
                    </section>

                    <section className="case-details-section">
                        <h2 className="case-details-section-title">Solution</h2>
                        <ul className="case-details-list">
                            {study.solution.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="case-details-section">
                        <h2 className="case-details-section-title">Results</h2>
                        <div className="case-details-results-grid">
                            {study.results.map((result, index) => (
                                <div key={index} className="case-result-card">
                                    <span className="case-result-desc">{result}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="case-details-section">
                        <h2 className="case-details-section-title">Technologies and Tools</h2>
                        <div className="tech-stack-container">
                            {techTags.map((tag, i) => (
                                <span key={i} className="tech-tag">{tag}</span>
                            ))}
                        </div>
                    </section>

                    {!isExpanded && (
                        <div className="read-more-overlay">
                            <button
                                className="btn btn-codeifyy-primary"
                                onClick={() => setIsExpanded(true)}
                            >
                                Read Full Case Study
                            </button>
                        </div>
                    )}
                </article>
            </main>

            {/* CTA */}
            <div className="container pb-5">
                <CTA
                    title="Could This Be Your Success Story?"
                    text="We build technology that solves real business problems. Let's discuss your next project."
                    btnText="Schedule a Consultation"
                />
            </div>

            {/* More Case Studies */}
            <aside className="more-case-studies-section">
                <div className="container">
                    <h3 className="more-section-title">More Case Studies</h3>
                    <div className="more-case-studies-grid">
                        {suggestedStudies.map(suggested => (
                            <Link to={`/casestudy/${suggested.slug}`} key={suggested.id} style={{ textDecoration: 'none' }}>
                                <div className="case-study-card-simple">
                                    <div className="case-study-img-wrapper" style={{ height: '180px' }}>
                                        <img
                                            src={suggested.image}
                                            alt={suggested.title}
                                            className="case-study-img-top"
                                        />
                                    </div>
                                    <div className="case-study-simple-content" style={{ padding: '1.5rem' }}>
                                        <h3 className="case-study-simple-title" style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{suggested.title}</h3>
                                        <div className="read-more-btn">
                                            Read Case Study <FaArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </aside>

            <Footer />

            {/* Mobile More Overlay */}
            {suggestedStudies.length > 0 && isExpanded && (
                <div className="mobile-more-overlay">
                    <div className="mobile-more-info">
                        <span className="mobile-more-label">Keep Reading</span>
                        <span className="mobile-more-title">{suggestedStudies[0].title}</span>
                    </div>
                    <Link
                        to={`/casestudy/${suggestedStudies[0].slug}`}
                        className="btn btn-codeifyy-primary"
                        style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}
                    >
                        Next Study <FaArrowRight style={{ marginLeft: '6px' }} />
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CaseStudyDetails;
