import React from 'react';

const CarouselRow = ({ title, testimonials }) => {
    const scrollRef = React.useRef(null);

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = () => {
        const element = scrollRef.current;
        if (element && currentIndex < testimonials.length - 1) {
            const nextIndex = currentIndex + 1;
            const targetCard = element.children[nextIndex];

            if (targetCard) {
                // Use manual scrollTo instead of scrollIntoView 
                // to prevent the entire page from shifting
                element.scrollTo({
                    left: targetCard.offsetLeft - element.offsetLeft,
                    behavior: 'smooth'
                });
                setCurrentIndex(nextIndex);
            }
        }
    };

    const handlePrev = () => {
        const element = scrollRef.current;
        if (element && currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            const targetCard = element.children[prevIndex];

            if (targetCard) {
                element.scrollTo({
                    left: targetCard.offsetLeft - element.offsetLeft,
                    behavior: 'smooth'
                });
                setCurrentIndex(prevIndex);
            }
        }
    };

    return (
        <div className="article-row">
            <div className="article-row-text">
                <h3>{title}</h3>
                <p className="article-row-desc">
                    Discover how we've helped leading global brands and organizations achieve their digital transformation goals.
                </p>
            </div>
            <div className="carousel-wrapper-main" style={{ flex: 1, minWidth: 0 }}>
                <div className="carousel-container">
                    <div
                        className="article-carousel-wrapper"
                        ref={scrollRef}
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
                </div>

                {/* Progress Bar */}
                <div className="carousel-scroll-track">
                    <div
                        className="carousel-scroll-bar"
                        style={{
                            width: `${100 / testimonials.length}%`,
                            transform: `translateX(${currentIndex * 100}%)`,
                            transition: 'transform 0.3s ease'
                        }}
                    ></div>
                </div>

                <div className="carousel-controls">
                    <button
                        className="carousel-prev-btn"
                        aria-label="Previous"
                        onClick={handlePrev}
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button
                        className="carousel-next-btn"
                        aria-label="Next"
                        onClick={handleNext}
                    >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

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

    return (
        <section className="article-carousel-section section-padding">
            <div className="container">
                <h2 className="article-main-heading">
                    What our clients say about us.
                </h2>

                <CarouselRow
                    title="Testimonials"
                    testimonials={testimonials}
                />
            </div>
        </section>
    );
};

export default ArticleCarousel;
