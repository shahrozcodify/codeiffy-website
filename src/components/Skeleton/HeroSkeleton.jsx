import React from 'react';
import Skeleton from './Skeleton';
import './Skeleton.css';

const HeroSkeleton = () => {
    return (
        <section className="hero-section" style={{ minHeight: '650px', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <Skeleton width="150px" height="24px" className="mb-3" />
                        <Skeleton width="80%" height="60px" className="mb-3" />
                        <Skeleton width="60%" height="60px" className="mb-4" />
                        <Skeleton width="90%" height="20px" className="mb-2" />
                        <Skeleton width="85%" height="20px" className="mb-4" />
                        <Skeleton width="180px" height="50px" style={{ borderRadius: '8px' }} />
                    </div>
                    <div className="col-lg-5 offset-lg-1 d-none d-lg-block">
                        <Skeleton width="100%" height="400px" style={{ borderRadius: '16px' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSkeleton;
