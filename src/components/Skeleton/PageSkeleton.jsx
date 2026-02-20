import React from 'react';
import HeaderSkeleton from './HeaderSkeleton';
import HeroSkeleton from './HeroSkeleton';
import FooterSkeleton from './FooterSkeleton';
import BlogCardSkeleton from './BlogCardSkeleton';
import Skeleton from './Skeleton';
import './Skeleton.css';

const PageSkeleton = ({ includeHeader = true, includeFooter = true }) => {
    return (
        <div className="page-skeleton">
            {includeHeader && <HeaderSkeleton />}
            <main style={{ marginTop: includeHeader ? '80px' : '0' }}>
                <HeroSkeleton />

                {/* Benefits Section Skeleton */}
                <section className="section-padding" style={{ background: '#f8fafc' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <Skeleton width="150px" height="24px" className="mb-3" />
                                <Skeleton width="90%" height="40px" className="mb-3" />
                                <Skeleton width="80%" height="20px" className="mb-4" />
                                <div className="row">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="col-6 mb-3">
                                            <Skeleton width="100%" height="80px" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-5 offset-md-1">
                                <Skeleton width="100%" height="400px" style={{ borderRadius: '20px' }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content Section Skeleton (Features/Services) */}
                <section className="section-padding">
                    <div className="container">
                        <div className="text-center mb-5">
                            <Skeleton width="200px" height="24px" className="mx-auto mb-3" />
                            <Skeleton width="60%" height="40px" className="mx-auto" />
                        </div>
                        <div className="row">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="col-md-4 mb-4">
                                    <BlogCardSkeleton />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech Stack Skeleton */}
                <section className="section-padding" style={{ background: '#0f172a' }}>
                    <div className="container">
                        <div className="text-center mb-5">
                            <Skeleton width="150px" height="24px" className="mx-auto mb-3" />
                            <Skeleton width="40%" height="40px" className="mx-auto" />
                        </div>
                        <div className="d-flex justify-content-center flex-wrap gap-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                                <Skeleton key={i} width="100px" height="60px" style={{ borderRadius: '12px', background: 'rgba(255,255,255,0.1)' }} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            {includeFooter && <FooterSkeleton />}
        </div>
    );
};

export default PageSkeleton;
