import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { blogData } from './blogData';
import './Blogs.css';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const blog = blogData.find(b => b.id === parseInt(id));
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    useEffect(() => {
        if (!blog) {
            // Handle not found if needed, or redirect
            // navigate('/blogs');
            return;
        }

        // Get 3 random related articles, excluding current one
        const otherBlogs = blogData.filter(b => b.id !== blog.id);
        const shuffled = [...otherBlogs].sort(() => 0.5 - Math.random());
        setRelatedBlogs(shuffled.slice(0, 3));

        // Scroll to top when id changes
        window.scrollTo(0, 0);
    }, [blog, navigate, id]);

    if (!blog) {
        return (
            <div className="blogs-page">
                <Header />
                <main style={{ padding: '150px 0', textAlign: 'center' }}>
                    <h2>Blog Post Not Found</h2>
                    <Link to="/blogs" className="btn-codeifyy-primary">Back to Blogs</Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="blog-details-page">
            <Header />
            <main style={{ padding: '120px 0 0 0' }}>
                <div className="container">
                    <Link to="/blogs" className="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Back to Insights
                    </Link>

                    <article>
                        <div className="blog-hero-image-wrapper animate-up">
                            {blog.image ? (
                                <img src={blog.image} alt={blog.title} className="blog-hero-image" />
                            ) : (
                                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)' }}></div>
                            )}
                            <div className="blog-hero-overlay">
                                <div className="blog-hero-content animate-up delay-1">
                                    <div className="blog-hero-meta">
                                        <span style={{
                                            background: 'var(--codeifyy-green)',
                                            color: '#fff',
                                            padding: '0.4rem 1rem',
                                            borderRadius: '50px',
                                            fontWeight: '700',
                                            fontSize: '0.9rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em'
                                        }}>
                                            {blog.label}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
                                            {blog.date}
                                        </span>
                                    </div>
                                    <h1 className="blog-hero-title">{blog.title}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="blog-content-body animate-up delay-2">
                            <div className="blog-content-wrapper">
                                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                            </div>
                        </div>

                        {/* Related Articles Section */}
                        {relatedBlogs.length > 0 && (
                            <div className="related-articles-section">
                                <div className="container">
                                    <h3 className="related-title">More Insights</h3>
                                    <div className="blog-grid">
                                        {relatedBlogs.map((related) => (
                                            <Link to={`/blogs/${related.id}`} key={related.id} className="blog-card-link">
                                                <div className="blog-card">
                                                    <div className="blog-card-image-wrapper">
                                                        {related.image ? (
                                                            <img
                                                                src={related.image}
                                                                alt={related.title}
                                                                className="blog-card-image"
                                                            />
                                                        ) : (
                                                            <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)' }}></div>
                                                        )}
                                                    </div>
                                                    <div className="blog-card-content">
                                                        <div className="blog-meta">
                                                            <span className="blog-label">
                                                                {related.label}
                                                            </span>
                                                            <span className="blog-date">
                                                                {related.date}
                                                            </span>
                                                        </div>

                                                        <h3 className="blog-card-title" style={{ fontSize: '1.4rem' }}>{related.title}</h3>

                                                        <div style={{ marginTop: 'auto' }}>
                                                            <span className="read-more-link">
                                                                Read Article
                                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </article>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default BlogDetails;
