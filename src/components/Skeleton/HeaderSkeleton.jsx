import React from 'react';
import Skeleton from './Skeleton';
import './Skeleton.css';

const HeaderSkeleton = () => {
    return (
        <header className="glass-nav" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, background: 'rgba(255, 255, 255, 0.8)' }}>
            <div className="container">
                <div className="header-bottom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
                    <Skeleton width="120px" height="40px" />
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <Skeleton width="60px" height="20px" />
                        <Skeleton width="60px" height="20px" />
                        <Skeleton width="60px" height="20px" />
                        <Skeleton width="60px" height="20px" />
                    </div>
                    <Skeleton width="120px" height="45px" style={{ borderRadius: '50px' }} />
                </div>
            </div>
        </header>
    );
};

export default HeaderSkeleton;
