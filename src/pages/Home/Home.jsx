import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SEO from '../../components/SEO/SEO';
import SectionRenderer from '../../components/SectionRenderer/SectionRenderer';
import { pagesContent } from '../../data/pagesContent';

const Home = () => {
    const pageData = pagesContent['home'] || {};
    const sections = pageData.sections || [];

    return (
        <div className="home-page">
            <SEO
                title={pageData.title || "Codeifyy - Global Software Development Company"}
                description={pageData.description || "Global software development company trusted by clients across 15+ countries."}
                canonical={pageData.canonical || "/"}
            />
            <Header />
            
            <main className="home-main">
                <SectionRenderer sections={sections} />
            </main>

            <Footer />
        </div>
    );
};

export default Home;
