import React from 'react';
import { sharedTestimonials } from '../../data/pagesContent';

const ArticleCarousel = ({ data }) => {
    const title = data?.title || 'What our clients say about us.';
    const subTitle = data?.subTitle || 'Testimonials';
    const description = data?.description || "Discover how we've helped leading global brands and organizations achieve their digital transformation goals.";

    const testimonials = (data?.elements || sharedTestimonials).map(el => ({
        client: el.title,
        text: el.shortDescription?.replace(/<\/?[^>]+(>|$)/g, '') || '',
        logo: el.image
    }));

    const [currentIndex, setCurrentIndex] = React.useState(0);
    const trackRef = React.useRef(null);
    const wrapperRef = React.useRef(null);
    const [cardWidth, setCardWidth] = React.useState(0);
    const [gap, setGap] = React.useState(24);
    const [visibleCards, setVisibleCards] = React.useState(1);

    React.useEffect(() => {
        const measure = () => {
            const track = trackRef.current;
            const wrapper = wrapperRef.current;
            if (track && track.children[0] && wrapper) {
                const card = track.children[0];
                const cardRect = card.getBoundingClientRect();
                setCardWidth(cardRect.width);
                const computed = getComputedStyle(track);
                const gapVal = parseFloat(computed.gap || computed.columnGap || '24');
                setGap(isNaN(gapVal) ? 24 : gapVal);
                const wrapperWidth = wrapper.getBoundingClientRect().width;
                const visible = Math.floor((wrapperWidth + gapVal) / (cardRect.width + gapVal));
                setVisibleCards(Math.max(1, visible));
            }
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [testimonials.length]);

    const maxIndex = Math.max(0, testimonials.length - visibleCards);

    const handleNext = () => { if (currentIndex < maxIndex) setCurrentIndex(prev => prev + 1); };
    const handlePrev = () => { if (currentIndex > 0) setCurrentIndex(prev => prev - 1); };

    const wrapperWidth = wrapperRef.current ? wrapperRef.current.getBoundingClientRect().width : 0;
    const totalTrackWidth = testimonials.length * cardWidth + (testimonials.length - 1) * gap;
    const maxOffset = Math.max(0, totalTrackWidth - wrapperWidth);
    const rawOffset = currentIndex * (cardWidth + gap);
    const offset = Math.min(rawOffset, maxOffset);

    if (!testimonials.length) return null;

    return (
        <section className="article-carousel-section">
            <div className="container">
                {title && <h2 className="article-main-heading" dangerouslySetInnerHTML={{ __html: title }} />}

                <div className="carousel-outer-container">
                    <div className="article-row">
                        <div className="article-row-text">
                            {subTitle && <h3>{subTitle}</h3>}
                            {description && <p className="article-row-desc" dangerouslySetInnerHTML={{ __html: description }} />}
                        </div>

                        <div className="carousel-wrapper-main" ref={wrapperRef} style={{ flex: 1, minWidth: 0, overflow: 'hidden' }}>
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
                                            {testimonial.logo && (
                                                <img
                                                    src={testimonial.logo}
                                                    alt={`${testimonial.client} Logo`}
                                                    className="testimonial-logo"
                                                />
                                            )}
                                        </div>
                                        <p className="article-card-desc testimonial-text">"{testimonial.text}"</p>
                                        <div className="testimonial-client-name">{testimonial.client}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="carousel-scroll-track">
                                <div
                                    className="carousel-scroll-bar"
                                    style={{
                                        width: `${100 / (maxIndex + 1)}%`,
                                        transform: `translateX(${currentIndex * 100}%)`,
                                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

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
                            disabled={currentIndex >= maxIndex}
                            style={{ opacity: currentIndex >= maxIndex ? 0.4 : 1 }}
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
