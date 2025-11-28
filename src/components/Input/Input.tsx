import React, { forwardRef } from 'react';
import './Input.css';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error = false,
      startIcon,
      endIcon,
      fullWidth = false,
      size = 'md',
      className = '',
      disabled,
      required,
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const containerClass = [
      'design-system-input__container',
      `design-system-input__container--${size}`,
      error ? 'design-system-input__container--error' : '',
      disabled ? 'design-system-input__container--disabled' : '',
    ].filter(Boolean).join(' ');

    return (
      <div className={`design-system-input ${fullWidth ? 'design-system-input--full-width' : ''} ${className}`}>
        {label && (
          <label htmlFor={inputId} className="design-system-input__label">
            {label}
            {required && <span className="design-system-input__required">*</span>}
          </label>
        )}

        <div className={containerClass}>
          {startIcon && (
            <div className="design-system-input__icon design-system-input__icon--start">
              {startIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className="design-system-input__field"
            disabled={disabled}
            required={required}
            aria-invalid={error}
            {...props}
          />

          {endIcon && (
            <div className="design-system-input__icon design-system-input__icon--end">
              {endIcon}
            </div>
          )}
        </div>

        {helperText && (
          <div className={`design-system-input__helper ${error ? 'design-system-input__helper--error' : ''}`}>
            {error && (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            )}
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;