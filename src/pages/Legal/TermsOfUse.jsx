import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const TermsOfUse = () => {
    return (
        <div className="legal-page">
            <Header />
            <main style={{ padding: '120px 0 80px 0', background: 'var(--background)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--codeifyy-navy)', marginBottom: '2rem' }}>Terms of Use</h1>
                    <div style={{ lineHeight: '1.8', color: 'var(--text-main)' }}>
                        <p style={{ marginBottom: '1.5rem' }}>Effective Date: February 13, 2026</p>
                        <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h3>
                        <p>By accessing or using Codeifyy's website and services, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

                        <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>2. Use License</h3>
                        <p>Permission is granted to temporarily download one copy of the materials on Codeifyy's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

                        <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>3. Disclaimer</h3>
                        <p>The materials on Codeifyy's website are provided on an 'as is' basis. Codeifyy makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>

                        <h3 style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>4. Limitations</h3>
                        <p>In no event shall Codeifyy or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Codeifyy's website.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfUse;
