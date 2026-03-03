import React from 'react';

const ArticleCarousel = () => {
    const testimonials = [
        {
            client: 'Kia Motors',
            text: 'Codeifyy streamlined our dealership operations with a centralized CRM that significantly improved lead tracking and sales visibility across teams.',
            logo: '/clientlogo/image (2).png'
        },
        {
            client: 'Ministry of Malaysia',
            text: 'Their structured development approach and clear communication ensured smooth project execution. The final solution met our functional expectations and compliance standards.',
            logo: '/clientlogo/image (4).png'
        },
        {
            client: 'Jetour',
            text: 'The web platform they developed strengthened our digital presence and simplified customer engagement through a performance-driven architecture.',
            logo: '/clientlogo/image (3).png'
        },
        {
            client: 'SERP Insight',
            text: 'Codeifyy built a structured and scalable SEO intelligence system that reduced manual research time and improved our outreach efficiency.',
            logo: '/clientlogo/image (1).png'
        }
    ];

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const trackRef = React.useRef(null);
    const [cardWidth, setCardWidth] = React.useState(0);
    const [gap, setGap] = React.useState(24); // 1.5rem default

    // Measure card width after mount and on resize
    React.useEffect(() => {
        const measure = () => {
            const track = trackRef.current;
            if (track && track.children[0]) {
                const card = track.children[0];
                const cardRect = card.getBoundingClientRect();
                setCardWidth(cardRect.width);
                // gap is 1.5rem = 24px by default; read computed style
                const computed = getComputedStyle(track);
                const gapVal = parseFloat(computed.gap || computed.columnGap || '24');
                setGap(isNaN(gapVal) ? 24 : gapVal);
            }
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    const handleNext = () => {
        if (currentIndex < testimonials.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const offset = currentIndex * (cardWidth + gap);

    return (
        <section className="article-carousel-section">
            <div className="container">
                <h2 className="article-main-heading">
                    What our clients say about us.
                </h2>

                <div className="carousel-outer-container">
                    {/* Left label */}
                    <div className="article-row">
                        <div className="article-row-text">
                            <h3>Testimonials</h3>
                            <p className="article-row-desc">
                                Discover how we've helped leading global brands and organizations achieve their digital transformation goals.
                            </p>
                        </div>

                        {/* Cards track */}
                        <div className="carousel-wrapper-main" style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
                            <div
                                className="article-carousel-track"
                                ref={trackRef}
                                style={{
                                    transform: `translateX(-${offset}px)`,
                                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    display: 'flex',
                                    gap: '1.5rem',
                                    willChange: 'transform',
                                }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div className="article-card testimonial-card" key={index}>
                                        <div className="article-card-accent"></div>
                                        <div className="testimonial-logo-wrapper">
                                            <img
                                                src={testimonial.logo}
                                                alt={`${testimonial.client} Logo`}
                                                className="testimonial-logo"
                                            />
                                        </div>
                                        <p className="article-card-desc testimonial-text">"{testimonial.text}"</p>
                                        <div className="testimonial-client-name">{testimonial.client}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Progress Bar (desktop only) */}
                            <div className="carousel-scroll-track">
                                <div
                                    className="carousel-scroll-bar"
                                    style={{
                                        width: `${100 / testimonials.length}%`,
                                        transform: `translateX(${currentIndex * 100}%)`,
                                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="carousel-controls">
                        <button
                            className="carousel-prev-btn"
                            aria-label="Previous"
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button
                            className="carousel-next-btn"
                            aria-label="Next"
                            onClick={handleNext}
                            disabled={currentIndex === testimonials.length - 1}
                            style={{ opacity: currentIndex === testimonials.length - 1 ? 0.4 : 1 }}
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArticleCarousel;
