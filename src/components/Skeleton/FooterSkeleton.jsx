import React from 'react';
import Skeleton from './Skeleton';
import './Skeleton.css';

const FooterSkeleton = () => {
    return (
        <footer className="footer-skeleton section-padding" style={{ background: '#f8fafc', padding: '80px 0 40px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5">
                        <Skeleton width="180px" height="40px" className="mb-4" />
                        <Skeleton width="90%" height="20px" className="mb-2" />
                        <Skeleton width="85%" height="20px" className="mb-2" />
                        <Skeleton width="40%" height="20px" className="mb-4" />
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Skeleton width="40px" height="40px" variant="circular" />
                            <Skeleton width="40px" height="40px" variant="circular" />
                            <Skeleton width="40px" height="40px" variant="circular" />
                        </div>
                    </div>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="col-lg-2 col-md-4 mb-4">
                            <Skeleton width="100px" height="24px" className="mb-4" />
                            <Skeleton width="80px" height="18px" className="mb-2" />
                            <Skeleton width="90px" height="18px" className="mb-2" />
                            <Skeleton width="70px" height="18px" className="mb-2" />
                            <Skeleton width="85px" height="18px" className="mb-2" />
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default FooterSkeleton;
