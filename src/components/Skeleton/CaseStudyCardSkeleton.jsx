import React from 'react';
import Skeleton from './Skeleton';
import './Skeleton.css';

const CaseStudyCardSkeleton = () => {
    return (
        <div className="case-study-card-simple skeleton-card">
            <div className="case-study-img-wrapper">
                <Skeleton width="100%" height="250px" style={{ borderRadius: '12px 12px 0 0' }} />
            </div>
            <div className="case-study-simple-content" style={{ padding: '2rem' }}>
                <Skeleton width="100%" height="28px" className="mb-3" />
                <Skeleton width="30%" height="18px" />
            </div>
        </div>
    );
};

export default CaseStudyCardSkeleton;
