import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import BlogCardSkeleton from '../../components/Skeleton/BlogCardSkeleton';
import { blogData } from './blogData';
import './Blogs.css';

const BlogList = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate real data fetching delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="blogs-page">
            <Header />

            {/* Premium Page Banner - USA/UK Market Style */}
            <div className="page-banner animate-up">
                <div className="container">
                    <div className="page-banner-content">
                        <span style={{
                            color: 'var(--codeifyy-green)',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            display: 'block',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em'
                        }}>
                            Our Blog
                        </span>
                        <h1 className="page-banner-title">
                            Insights & <span className="text-highlight">Innovation</span>
                        </h1>
                        <p className="page-banner-subtitle">
                            Expert perspectives on CRM strategy, AI integration, and digital transformation for forward-thinking enterprises.
                        </p>
                    </div>
                </div>
            </div>

            <main style={{ padding: '0 0 100px 0', marginTop: '-60px', position: 'relative', zIndex: '10' }}>
                <div className="container">
                    <div className="blog-grid animate-up delay-1">
                        {isLoading ? (
                            // Show skeletons during "data fetch"
                            [1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="blog-card-link">
                                    <BlogCardSkeleton />
                                </div>
                            ))
                        ) : (
                            // Show real data once loaded
                            blogData.map((blog) => (
                                <Link to={`/blog/${blog.slug}`} key={blog.id} className="blog-card-link">
                                    <div className="blog-card">
                                        <div className="blog-card-image-wrapper">
                                            {/* Overlay handled in CSS */}
                                            <span className="blog-card-badge">
                                                {blog.label}
                                            </span>
                                            {blog.image ? (
                                                <img
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    className="blog-card-image"
                                                />
                                            ) : (
                                                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)' }}></div>
                                            )}
                                        </div>
                                        <div className="blog-card-content">
                                            <div className="blog-meta">
                                                <span className="blog-date">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                                    {blog.date}
                                                </span>
                                            </div>

                                            <h3 className="blog-card-title">{blog.title}</h3>
                                            <p className="blog-card-summary">{blog.summary}</p>

                                            <div style={{ marginTop: 'auto' }}>
                                                <span className="read-more-link">
                                                    Read Article
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogList;
