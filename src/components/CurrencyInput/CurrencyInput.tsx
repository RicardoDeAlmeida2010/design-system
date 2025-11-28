import React, { useState, useEffect, useRef } from 'react';
import './CurrencyInput.css';

export interface CurrencyInputProps {
    label?: string;
    value: number;
    currency: string;
    onValueChange: (value: number) => void;
    onCurrencyChange?: (currency: string) => void;
    helperText?: string;
    className?: string;
    error?: boolean;
}

const FLAGS: Record<string, string> = {
    USD: '🇺🇸',
    EUR: '🇪🇺',
    BRL: '🇧🇷',
    GBP: '🇬🇧',
    JPY: '🇯🇵',
};

export const CurrencyInput: React.FC<CurrencyInputProps> = ({
    label,
    value,
    currency,
    onValueChange,
    onCurrencyChange,
    helperText,
    className = '',
    error = false,
}) => {
    const [displayValue, setDisplayValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    // Format value on mount or when value changes externally
    useEffect(() => {
        if (value !== undefined && !isNaN(value)) {
            setDisplayValue(formatCurrency(value, currency, false));
        }
    }, [value, currency]);

    const formatCurrency = (val: number, curr: string, withSymbol: boolean) => {
        return new Intl.NumberFormat('pt-BR', {
            style: withSymbol ? 'currency' : 'decimal',
            currency: curr,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(val);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Remove non-numeric characters
        const numericValue = inputValue.replace(/[^0-9]/g, '');

        // Convert to float (divide by 100 for cents)
        const floatValue = parseInt(numericValue || '0', 10) / 100;

        onValueChange(floatValue);
    };

    const handleCurrencyClick = () => {
        // Mock currency rotation for demo purposes
        if (onCurrencyChange) {
            const currencies = Object.keys(FLAGS);
            const currentIndex = currencies.indexOf(currency);
            const nextIndex = (currentIndex + 1) % currencies.length;
            onCurrencyChange(currencies[nextIndex]);
        }
    };

    return (
        <div className={`design-system-currency-input ${error ? 'design-system-currency-input--error' : ''} ${className}`}>
            {label && <label className="design-system-currency-input__label">{label}</label>}

            <div className="design-system-currency-input__container">
                <div
                    className="design-system-currency-input__selector"
                    onClick={handleCurrencyClick}
                    title="Click to switch currency"
                >
                    <span className="design-system-currency-input__flag">{FLAGS[currency] || '🌐'}</span>
                    <span className="design-system-currency-input__code">{currency}</span>
                    <span className="design-system-currency-input__chevron">▼</span>
                </div>

                <input
                    ref={inputRef}
                    type="text"
                    inputMode="decimal"
                    className="design-system-currency-input__field"
                    value={displayValue}
                    onChange={handleChange}
                    placeholder="0,00"
                    aria-invalid={error}
                />
            </div>

            {helperText && <div className={`design-system-currency-input__helper ${error ? 'design-system-currency-input__helper--error' : ''}`}>{helperText}</div>}
        </div>
    );
};

export default CurrencyInput;
