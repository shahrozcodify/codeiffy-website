import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Partnerships = () => {
    return (
        <div className="partnerships-page">
            <Header />
            <main style={{ padding: '100px 0', minHeight: '60vh' }}>
                <div className="container">
                    <h1>Partnerships</h1>
                    <p>Collaborate with Codeifyy to deliver innovative solutions to customers worldwide.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Partnerships;
