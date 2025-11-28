import React from 'react';
import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'error';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  type = 'button',
  ...props
}) => {
  const baseClass = 'design-system-button';
  const variantClass = `design-system-button--${variant}`;
  const sizeClass = `design-system-button--${size}`;
  const stateClass = disabled ? 'design-system-button--disabled' : '';
  const loadingClass = loading ? 'design-system-button--loading' : '';
  const fullWidthClass = fullWidth ? 'design-system-button--full-width' : '';

  const combinedClassName = [
    baseClass,
    variantClass,
    sizeClass,
    stateClass,
    loadingClass,
    fullWidthClass,
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={combinedClassName}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="design-system-button__loader">
          <svg className="design-system-button__spinner" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
          </svg>
        </span>
      )}
      <span className="design-system-button__content">
        {children}
      </span>
    </button>
  );
};

export default Button;