import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './BenefitList.css';

const BenefitList = ({ data }) => {
    const title = data?.title || "";
    const subtitle = data?.subTitle || data?.description || "";
    const benefitsLeft = data?.benefitsLeft || { title: '', items: [] };
    const benefitsRight = data?.benefitsRight || { title: '', items: [] };

    return (
        <section className="benefit-list-section">
            <div className="container">
                <div className="text-center mb-5">
                    {title && <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />}
                    {subtitle && <p className="section-subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />}
                </div>
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <div className="benefit-card">
                            {benefitsLeft.title && <h4 className="mb-4">{benefitsLeft.title}</h4>}
                            <ul className="list-unstyled">
                                {(benefitsLeft.items || []).map((item, index) => (
                                    <li key={index} className="mb-3 d-flex align-items-start gap-2">
                                        <span className="bullet-point">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="benefit-card border-success">
                            {benefitsRight.title && <h4 className="mb-4">{benefitsRight.title}</h4>}
                            <ul className="list-unstyled">
                                {(benefitsRight.items || []).map((item, index) => (
                                    <li key={index} className="mb-3 d-flex align-items-start gap-2">
                                        <FaCheckCircle className="text-success mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitList;
