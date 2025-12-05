/**
 * Token utility functions
 * Returns CSS variable references for design tokens
 * Based on DS_banco00.md specifications
 */

// Color utilities
export const getColor = (color: string, shade?: string): string => {
  if (shade) {
    // For specific shades like getColor('brand', '500')
    return `var(--${color}-${shade})`;
  }

  // Map old color names to new semantic tokens
  const colorMap: Record<string, string> = {
    'primary': 'var(--brand-500)',
    'secondary': 'var(--gray-500)',
    'success': 'var(--green-500)',
    'warning': 'var(--yellow-700)',
    'error': 'var(--red-500)',
    'neutral': 'var(--gray-500)',
  };

  // For semantic tokens like getColor('background', 'primary')
  const semanticMap: Record<string, Record<string, string>> = {
    'background': {
      'primary': 'var(--bg-primary)',
      'secondary': 'var(--bg-secondary)',
      'tertiary': 'var(--bg-tertiary)',
    },
    'text': {
      'primary': 'var(--text-primary)',
      'secondary': 'var(--text-secondary)',
      'tertiary': 'var(--text-tertiary)',
      'disabled': 'var(--text-disabled)',
    },
    'border': {
      'primary': 'var(--border-primary)',
      'secondary': 'var(--border-secondary)',
      'focus': 'var(--border-focus)',
      'error': 'var(--border-error)',
    },
  };

  if (semanticMap[color]) {
    return semanticMap[color][shade || 'primary'] || 'var(--gray-500)';
  }

  return colorMap[color] || `var(--${color})`;
};

// Spacing utilities
export const getSpacing = (size: string | number): string => {
  return `var(--space-${size})`;
};

// Typography utilities
export const getFontSize = (size: string): string => {
  return `var(--font-size-${size})`;
};

export const getFontWeight = (weight: string): string => {
  return `var(--font-weight-${weight})`;
};

export const getFontFamily = (family: string): string => {
  return `var(--font-family-${family})`;
};

export const getLineHeight = (height: string): string => {
  return `var(--line-height-${height})`;
};

// Border utilities
export const getBorderRadius = (size: string): string => {
  return `var(--radius-${size})`;
};

export const getBorderWidth = (width: string): string => {
  return `${width}px`;
};

// Shadow utilities
export const getShadow = (size: string): string => {
  return `var(--elevation-${size})`;
};

// Z-index utilities
export const getZIndex = (index: string): string => {
  return `var(--z-${index})`;
};

// Transition utilities
export const getTransition = (type: 'duration' | 'easing', value: string): string => {
  if (type === 'duration') {
    return `var(--duration-${value})`;
  }
  return `var(--ease-${value})`;
};

// Convenience functions for colors
export const getPrimaryColor = (shade?: string): string => {
  return shade ? `var(--brand-${shade})` : 'var(--brand-500)';
};

export const getSecondaryColor = (shade?: string): string => {
  return shade ? `var(--gray-${shade})` : 'var(--gray-500)';
};

export const getSuccessColor = (shade?: string): string => {
  return shade ? `var(--green-${shade})` : 'var(--green-500)';
};

export const getWarningColor = (shade?: string): string => {
  return shade ? `var(--yellow-${shade})` : 'var(--yellow-700)';
};

export const getErrorColor = (shade?: string): string => {
  return shade ? `var(--red-${shade})` : 'var(--red-500)';
};

// Convenience functions for font sizes
export const getSmallFontSize = (): string => 'var(--font-size-sm)';
export const getMediumFontSize = (): string => 'var(--font-size-base)';
export const getLargeFontSize = (): string => 'var(--font-size-lg)';

// Breakpoint utilities (for reference, not CSS variables)
export const getBreakpoint = (breakpoint: string): string => {
  const breakpoints: Record<string, string> = {
    'xs': '375px',
    'sm': '428px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1440px',
    '2xl': '1920px',
  };
  return breakpoints[breakpoint] || '768px';
};

// Typography helper (legacy support)
export const getTypography = (type: string, property: string): string => {
  if (property === 'fontSize') return getFontSize(type);
  if (property === 'fontWeight') return getFontWeight(type);
  if (property === 'lineHeight') return getLineHeight(type);
  return '';
};

// Legacy token getter (for backwards compatibility)
export const getToken = (path: string): string => {
  console.warn(`getToken('${path}') is deprecated. Use specific utility functions instead.`);
  return '';
};