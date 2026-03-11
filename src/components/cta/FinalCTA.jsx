import React from 'react';
import CTA from '../cta/CTA';

const FinalCTA = ({ data }) => {
    // Adapter to map SectionRenderer 'data' to CTA 'props'
    return (
        <section className="final-cta-section" style={{ padding: '2rem 0 5rem' }}>
            <div className="container">
                <CTA 
                    title={data?.title}
                    text={data?.description}
                    btnText={data?.ctaText}
                    link={data?.ctaLnik}
                />
            </div>
        </section>
    );
};

export default FinalCTA;
