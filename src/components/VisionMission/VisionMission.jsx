import React from 'react';

const VisionMission = ({ data }) => {
    const vision = data?.vision || {};
    const mission = data?.mission || {};

    return (
        <div className="vision-mission-wrapper">
            {/* VISION SECTION */}
            <section className="vision-section">
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6">
                            <div className="vision-text-content">
                                {vision.title && <h2 className="section-title text-start mb-4">{vision.title}</h2>}
                                {vision.description && (
                                    <p className="section-subtitle text-start mb-5">{vision.description}</p>
                                )}
                            </div>
                        </div>
                        {vision.image && (
                            <div className="col-lg-6">
                                <div className="vision-image-wrapper">
                                    <img
                                        src={vision.image}
                                        alt={vision.imageAlt || vision.title}
                                        className="img-fluid rounded-4 shadow-lg"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* MISSION SECTION - Reverse Layout */}
            <section className="mission-section pb-5">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="vision-text-content ps-lg-5">
                                {mission.title && <h2 className="section-title text-start mb-4">{mission.title}</h2>}
                                {mission.description && (
                                    <p className="section-subtitle text-start mb-5">{mission.description}</p>
                                )}
                            </div>
                        </div>
                        {mission.image && (
                            <div className="col-lg-6">
                                <div className="vision-image-wrapper">
                                    <img
                                        src={mission.image}
                                        alt={mission.imageAlt || mission.title}
                                        className="img-fluid rounded-4 shadow-lg"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VisionMission;
