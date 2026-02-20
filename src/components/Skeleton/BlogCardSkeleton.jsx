import React from 'react';
import Skeleton from './Skeleton';
import './Skeleton.css';

const BlogCardSkeleton = () => {
    return (
        <div className="blog-card-skeleton">
            <Skeleton width="100%" height="200px" style={{ borderRadius: '12px 12px 0 0' }} className="mb-3" />
            <div style={{ padding: '0 10px' }}>
                <Skeleton width="40%" height="15px" className="mb-2" />
                <Skeleton width="100%" height="24px" className="mb-2" />
                <Skeleton width="90%" height="20px" className="mb-3" />
                <div className="flex gap-2">
                    <Skeleton width="80px" height="15px" />
                </div>
            </div>
        </div>
    );
};

export default BlogCardSkeleton;
