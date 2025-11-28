import React from 'react';
import './Skeleton.css';

export interface SkeletonProps {
    variant?: 'text' | 'rectangular' | 'circular';
    width?: string | number;
    height?: string | number;
    className?: string;
    style?: React.CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = ({
    variant = 'rectangular',
    width,
    height,
    className = '',
    style = {},
}) => {
    const combinedStyle = {
        width,
        height,
        ...style,
    };

    return (
        <span
            className={`design-system-skeleton design-system-skeleton--${variant} ${className}`}
            style={combinedStyle}
        />
    );
};

export default Skeleton;
