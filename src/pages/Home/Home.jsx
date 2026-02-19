import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features-services';
import BenefitSection from '../../components/BenefitSection/BenefitSection';
import ProductsAndScale from '../../components/ProductsAndScale/ProductsAndScale';
import CustomerStories from '../../components/CustomerStories/CustomerStories';
import ArticleCarousel from '../../components/ArticleCarousel/ArticleCarousel';
import Blog from '../../components/Blog/Blog';
import NextStep from '../../components/NextStep/NextStep';
import CTOMessage from '../../components/CTOMessage/CTOMessage';
import FAQ from '../../components/FAQ/FAQ';
import TechStack from '../../components/TechStack/TechStack';
import Industries from '../../components/Industries/Industries';
import WhyChooseCodeifyy from '../../components/WhyChooseCodeifyy/WhyChooseCodeifyy';
import Footer from '../../components/Footer/Footer';
import CTA from '../../components/cta/CTA';

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <Hero />
            {/* About & Why Choose */}
            <BenefitSection />
            {/* Core Services */}
            <Features />
            {/* Technologies */}
            <TechStack />
            {/* Engagement Models */}
            <ProductsAndScale />
            {/* Industries */}
            <Industries />
            {/* Case Studies */}
            <CustomerStories />
            {/* Why Choose Codeifyy */}
            <WhyChooseCodeifyy />
            {/* Testimonials */}
            <ArticleCarousel />

            {/* Delivery Methodology */}
            <NextStep />
            {/* CTO Message */}
            <CTOMessage />
            <section className="section-padding">
                <div className="container">
                    <CTA />
                </div>
            </section>
            {/* FAQ removed as not in request or can be kept if needed - keeping off for now based on strict flow */}
            <Footer />
        </div>
    );
};

export default Home;
