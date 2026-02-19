import React from 'react';

const Blog = () => {
    const cards = [
        {
            category: 'Demo',
            title: 'Experience Codeifyy with an interactive demo.',
            linkText: 'Try it',
            image: '/blog/blog1.webp'
        },
        {
            category: 'CRM',
            title: 'Learn how CRM brings teams together to build a 360-degree view of your customer.',
            linkText: 'See more',
            image: '/blog/blog2.webp'
        },
        {
            category: 'Guide',
            title: 'Become an Agentic Enterprise: Transform your AI potential into a business reality.',
            linkText: 'Get the guide',
            image: '/blog/blog3.webp'
        }
    ];

    return (
        <section className="blog-section">
            <div className="container">
                <h2 className="blog-heading animate-up">
                    Keep up with the latest in CRM with guides,
                    research, and insights.
                </h2>

                <div className="blog-grid">
                    {cards.map((card, index) => (
                        <div key={index} className={`blog-card animate-up delay-${index + 1}`}>
                            <div className="blog-card-image-box">
                                <img src={card.image} alt={card.title} className="blog-card-img" />
                            </div>
                            <div className="blog-card-content">
                                <span className="blog-label">{card.category}</span>
                                <h3 className="blog-title">{card.title}</h3>
                                <div style={{ marginTop: 'auto' }}>
                                    <a href="#" className="blog-link">{card.linkText}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="blog-footer-btn-wrapper animate-up">
                    <a href="#" className="blog-cta-btn">
                        See all resources
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blog;
