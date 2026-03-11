import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO/SEO';
import SectionRenderer from '../components/SectionRenderer/SectionRenderer';
import { pagesContent } from '../data/pagesContent';

// Import existing page-specific CSS
import './About/About.css';
import './Services/Services.css';
import './Services/StaffAugmentation.css';
import './Industries/Industries.css';
import './Services/SoftwareDevelopment.css';
import './Services/AI.css';
import './Services/ProductDevelopment.css';
import './Career/Career.css';

/**
 * DynamicPage Component
 * A generic page renderer that fetches content based on the URL slug.
 * This consolidates About, Services, Industries, etc. into a single data-driven structure.
 */
const DynamicPage = () => {
    const { slug } = useParams();

    // Default to 'about' if no slug is provided (or handle based on your route config)
    const pageSlug = slug || window.location.pathname.split('/').pop() || 'about';
    const pageData = pagesContent[pageSlug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pageSlug]);

    // If page data is missing, we could redirect to 404 or a fallback
    if (!pageData) {
        console.warn(`No content found for slug: ${pageSlug}`);
        return <Navigate to="/" replace />;
    }

    return (
        <div className={`${pageSlug}-page`}>
            <SEO
                title={pageData.title}
                description={pageData.description}
                canonical={pageData.canonical || `/${pageSlug}`}
                meteFields={pageData.meteFields}
                googleScripts={pageData.googleScripts}
            />

            <Header />

            <main className={`${pageSlug}-main`} style={{ minHeight: '80vh' }}>
                {pageData.sections ? (
                    <SectionRenderer sections={pageData.sections} />
                ) : (
                    <div className="container" style={{ padding: '150px 0', textAlign: 'center' }}>
                        <h2>{pageData.title || "Welcome to Codeifyy"}</h2>
                        <p>Content is being updated. Please check back later.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default DynamicPage;
