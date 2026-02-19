import React, { useState } from 'react';

const FAQ = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const faqs = [
        { q: 'Is Codeifyy a CRM?', a: 'Yes, Codeifyy is the world’s #1 customer relationship management (CRM) platform. We help your marketing, sales, commerce, service and IT teams work as one from anywhere.' },
        { q: 'Is Codeifyy an online CRM?', a: 'Absolutely. Codeifyy is a cloud-based CRM, which means you can access your data and tools from any device with an internet connection.' },
        { q: 'How much does Codeifyy CRM cost?', a: 'We offer various pricing plans tailored to different business sizes and needs, starting from basic starter editions to comprehensive enterprise solutions.' }
    ];

    return (
        <section className="section-padding" style={{ background: 'var(--white)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2.5rem' }}>Frequently Asked Questions</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{ borderBottom: '1px solid #e2e8f0', padding: '1.5rem 0' }}>
                            <div
                                onClick={() => toggleFaq(i)}
                                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                            >
                                <h4 style={{ fontSize: '1.2rem' }}>{faq.q}</h4>
                                <span style={{ fontSize: '1.5rem', transition: 'transform 0.3s', transform: activeFaq === i ? 'rotate(45deg)' : 'none' }}>+</span>
                            </div>
                            {activeFaq === i && (
                                <p style={{ marginTop: '1rem', color: 'var(--text-muted)', animation: 'fadeInUp 0.3s ease-out' }}>{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
