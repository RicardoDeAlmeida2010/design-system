import React, { forwardRef } from 'react';
import './RadioButton.css';

export interface RadioButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  disabled?: boolean;
  label?: string;
  fullWidth?: boolean;
  description?: string;
}

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      size = 'medium',
      error = false,
      disabled = false,
      label,
      description,
      fullWidth = false,
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const containerClasses = [
      'radio-button',
      `radio-button--${size}`,
      error ? 'radio-button--error' : '',
      disabled ? 'radio-button--disabled' : '',
      fullWidth ? 'radio-button--full-width' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <label className={containerClasses} style={style}>
        <div className="radio-button__input-wrapper">
          <input
            ref={ref}
            type="radio"
            className="radio-button__input"
            disabled={disabled}
            {...props}
          />
          <span className="radio-button__dot" />
        </div>

        {(label || description) && (
          <div className="radio-button__content">
            {label && (
              <span className="radio-button__label">{label}</span>
            )}
            {description && (
              <span className="radio-button__description">{description}</span>
            )}
          </div>
        )}
      </label>
    );
  }
);

RadioButton.displayName = 'RadioButton';

export default RadioButton; 