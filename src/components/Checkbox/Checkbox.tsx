import React, { forwardRef, useEffect } from 'react';
import './Checkbox.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  disabled?: boolean;
  label?: string;
  indeterminate?: boolean;
  fullWidth?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      size = 'medium',
      error = false,
      disabled = false,
      label,
      indeterminate = false,
      fullWidth = false,
      className = '',
      style,
      checked,
      defaultChecked,
      ...props
    },
    ref
  ) => {
    // We need internal state to handle uncontrolled updates properly if needed,
    // but for the CSS :checked selector to work with controlled components, we rely on the input props.
    // However, indeterminate is a property that must be set via JS ref usually, or CSS :indeterminate pseudo-class.
    // React handles indeterminate prop on inputs by updating the property.

    // To simplify and ensure styles update, we rely on the native input state styling.

    // Handling the ref to sync indeterminate state
    const innerRef = React.useRef<HTMLInputElement>(null);
    const combinedRef = (node: HTMLInputElement) => {
      innerRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
    };

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    const containerClasses = [
      'checkbox',
      `checkbox--${size}`,
      error ? 'checkbox--error' : '',
      disabled ? 'checkbox--disabled' : '',
      fullWidth ? 'checkbox--full-width' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <label className={containerClasses} style={style}>
        <div className="checkbox__input-wrapper">
          <input
            ref={combinedRef}
            type="checkbox"
            className="checkbox__input"
            disabled={disabled}
            checked={checked}
            defaultChecked={defaultChecked}
            {...props}
          />

          {/* Checkmark Icon (shown when checked) */}
          <span className="checkbox__icon">
            {indeterminate ? (
              <div className="checkbox__indeterminate-line" />
            ) : (
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 13l4 4L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        </div>

        {label && (
          <span className="checkbox__label">{label}</span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;