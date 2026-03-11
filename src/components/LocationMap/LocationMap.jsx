import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './LocationMap.css';

const LocationMap = ({ data }) => {
    const title = data?.title;
    const subTitle = data?.subTitle;
    const hqTitle = data?.hqTitle;
    const email = data?.email;
    const phone = data?.phone;
    const address = data?.address;
    const mapSrc = data?.mapSrc;

    return (
        <section className="location-section-styled">
            <div className="container">
                <div className="location-flex-container">
                    <div className="location-text">
                        {title && <h2 className="section-title">{title}</h2>}
                        {subTitle && <p className="section-subtitle">{subTitle}</p>}
                        <div className="headquarter-card">
                            {hqTitle && <h3 className="hq-title">{hqTitle}</h3>}
                            <div className="contact-details">
                                {email && (
                                    <p className="contact-item">
                                        <FaEnvelope className="contact-icon" />
                                        {email}
                                    </p>
                                )}
                                {phone && (
                                    <p className="contact-item">
                                        <FaPhoneAlt className="contact-icon" />
                                        {phone}
                                    </p>
                                )}
                                {address && (
                                    <p className="contact-item">
                                        <FaMapMarkerAlt className="contact-icon" />
                                        <strong>{address}</strong>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {mapSrc && (
                        <div className="map-container">
                            <iframe
                                className="map-iframe"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                allowFullScreen
                                src={mapSrc}
                                title="Codeifyy Location"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LocationMap;
