import React from 'react';
import './StrategicApproach.css';

const StrategicApproach = ({ approachData = [], data }) => {
    const items = data?.items || approachData || [];
    const title = data?.title || "Our Strategic Approach";
    const subtitle = data?.subTitle || "We follow a structured, transparent delivery process to ensure successful outcomes.";

    return (
        <section className="services-approach-section section-padding">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="section-title text-white" dangerouslySetInnerHTML={{ __html: title }} />
                    <p className="section-subtitle text-white opacity-75" dangerouslySetInnerHTML={{ __html: subtitle }} />
                </div>

                <div className="services-approach-grid">
                    {items.map((item, index) => (
                        <div key={index} className="approach-card-simple">
                            <span className="approach-number">0{item.step}</span>
                            <h3 className="approach-title-simple">{item.title}</h3>
                            <p className="approach-desc-simple">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicApproach;
