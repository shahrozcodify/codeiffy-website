import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const ExpertiseGrid = ({ data }) => {
    const title = data?.title;
    const subTitle = data?.subTitle;
    const columns = data?.columns || [];

    return (
        <section className="expertise-grid-section">
            <div className="container">
                <div className="text-center mb-5">
                    {title && <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />}
                    {subTitle && <p className="section-subtitle">{subTitle}</p>}
                </div>
                <div className="row g-4">
                    {columns.map((col, i) => (
                        <div className="col-lg-4" key={i}>
                            <div className="expertise-col-card">
                                <span className="expertise-number">{col.number}</span>
                                <h3>{col.heading}</h3>
                                <ul className="expertise-list-styled">
                                    {(col.items || []).map((item, j) => (
                                        <li key={j}><FaCheckCircle /> {item}</li>
                                    ))}
                                </ul>
                                {col.link && (
                                    <Link to={col.link} className="read-more-link">
                                        {col.linkText || 'Explore More'} <FaArrowRight />
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseGrid;
