import React from 'react';
import './Skeleton.css';

const Skeleton = ({
    width,
    height,
    variant = 'rectangular',
    className = '',
    style = {}
}) => {
    const skeletonStyle = {
        width: width || '100%',
        height: height || (variant === 'text' ? '1rem' : 'auto'),
        ...style
    };

    return (
        <div
            className={`skeleton-base skeleton-${variant} ${className}`}
            style={skeletonStyle}
        />
    );
};

export default Skeleton;
