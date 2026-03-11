import React from 'react';
import './ClientLogos.css';

import { sharedClientLogos } from '../../data/pagesContent';

const ClientLogos = ({ data }) => {
    const logos = data?.elements || sharedClientLogos;
    // Duplicate logos to ensure enough content for the marquee scrolling
    const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

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
