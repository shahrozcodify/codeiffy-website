import React from 'react';
import './ClientLogos.css';

const clientLogos = [
    '/clientlogo/image (1).png',
    '/clientlogo/image (2).png',
    '/clientlogo/image (3).png',
    '/clientlogo/image (4).png',
    '/clientlogo/image (5).png',
];

const ClientLogos = () => {
    // Duplicate logos to ensure enough content for the marquee scrolling
    const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

    return (
        <div className="client-logos-section">
            <div className="logos-marquee">
                {marqueeLogos.map((logo, index) => (
                    <div key={index} className="client-logo-item">
                        <img src={logo} alt={`Client Logo ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientLogos;
