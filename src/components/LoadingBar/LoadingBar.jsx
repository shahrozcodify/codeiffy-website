import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './LoadingBar.css';

const LoadingBar = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Start loading on route change
        setIsVisible(true);
        setProgress(30);

        const timer1 = setTimeout(() => {
            setProgress(60);
        }, 200);

        const timer2 = setTimeout(() => {
            setProgress(90);
        }, 500);

        const timer3 = setTimeout(() => {
            setProgress(100);
            setTimeout(() => {
                setIsVisible(false);
                setTimeout(() => setProgress(0), 400); // Reset progress after fade out
            }, 300);
        }, 800);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [location.key]);

    if (!isVisible && progress === 0) return null;

    return (
        <div className={`loading-bar-container ${isVisible ? 'visible' : 'hidden'}`}>
            <div
                className="loading-bar"
                style={{ width: `${progress}%` }}
            >
                <div className="loading-bar-glow"></div>
            </div>
        </div>
    );
};

export default LoadingBar;
