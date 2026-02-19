import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <Header />
            <main style={{ padding: '120px 0 80px 0', background: 'var(--background)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--codeifyy-navy)', marginBottom: '2rem' }}>Privacy Policy</h1>
                    <div style={{ lineHeight: '1.8', color: 'var(--text-main)' }}>
                        <p style={{ marginBottom: '1.5rem' }}>Last Updated: February 13, 2026</p>
                        <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>1. Introduction</h3>
                        <p>At Codeifyy, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website codeifyy.com and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>

                        <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>2. Information We Collect</h3>
                        <p>We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, e-mail address, and telephone number.</p>

                        <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>3. How We Use Your Information</h3>
                        <p>We use information that we collect about you or that you provide to us, including any personal information: to present our Website and its contents to you; to provide you with information, products, or services that you request from us; to fulfill any other purpose for which you provide it.</p>

                        <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>4. Data Security</h3>
                        <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depends on you.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
