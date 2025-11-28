import React from 'react';
import './FxRateCard.css';

export interface FxRateCardProps {
    pair: string;
    name?: string;
    buy: number;
    sell: number;
    variation: number; // Percentage, e.g., 0.5 for 0.5%
    data?: number[]; // Array of values for sparkline
    variant?: 'default' | 'compact' | 'featured' | 'live';
    className?: string;
    onClick?: () => void;
}

export const FxRateCard: React.FC<FxRateCardProps> = ({
    pair,
    name,
    buy,
    sell,
    variation,
    data = [],
    variant = 'default',
    className = '',
    onClick,
}) => {
    const isUp = variation >= 0;
    const variationClass = isUp ? 'design-system-fx-rate-card__variation--up' : 'design-system-fx-rate-card__variation--down';
    const sparklineClass = isUp ? 'design-system-fx-rate-card__sparkline--up' : 'design-system-fx-rate-card__sparkline--down';

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('pt-BR', {
            minimumFractionDigits: 4,
            maximumFractionDigits: 4,
        }).format(val);
    };

    const formatVariation = (val: number) => {
        const sign = val > 0 ? '+' : '';
        return `${sign}${val.toFixed(2)}%`;
    };

    // Simple SVG Sparkline Generator
    const renderSparkline = () => {
        if (!data || data.length < 2) return null;

        const width = 120;
        const height = 40;
        const min = Math.min(...data);
        const max = Math.max(...data);
        const range = max - min || 1;

        const points = data.map((val, index) => {
            const x = (index / (data.length - 1)) * width;
            const y = height - ((val - min) / range) * height;
            return `${x},${y}`;
        }).join(' ');

        return (
            <svg className={`design-system-fx-rate-card__sparkline ${sparklineClass}`} viewBox={`0 0 ${width} ${height}`}>
                <path d={`M ${points}`} />
            </svg>
        );
    };

    return (
        <div
            className={`design-system-fx-rate-card design-system-fx-rate-card--${variant} ${className}`}
            onClick={onClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
        >
            <div className="design-system-fx-rate-card__header">
                <div>
                    <div className="design-system-fx-rate-card__pair">
                        <span className="design-system-fx-rate-card__code">{pair}</span>
                    </div>
                    {name && <div className="design-system-fx-rate-card__name">{name}</div>}
                </div>
                <div className={`design-system-fx-rate-card__variation ${variationClass}`}>
                    <span>{isUp ? '▲' : '▼'}</span>
                    {formatVariation(variation)}
                </div>
            </div>

            <div className="design-system-fx-rate-card__body">
                <div className="design-system-fx-rate-card__values">
                    <div className="design-system-fx-rate-card__value-row">
                        <span className="design-system-fx-rate-card__label">Compra</span>
                        <span className="design-system-fx-rate-card__value">{formatCurrency(buy)}</span>
                    </div>
                    <div className="design-system-fx-rate-card__value-row">
                        <span className="design-system-fx-rate-card__label">Venda</span>
                        <span className="design-system-fx-rate-card__value">{formatCurrency(sell)}</span>
                    </div>
                </div>

                {variant !== 'compact' && renderSparkline()}
            </div>
        </div>
    );
};

export default FxRateCard;
