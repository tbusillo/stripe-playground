import classNames from 'classnames';
import React, { forwardRef, Ref } from 'react';

type ButtonProps = {
  buttonRef?: Ref<HTMLButtonElement>;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  children?: React.ReactNode | React.ReactNode[];
  variant?: 'primary' | 'secondary' | 'white' | 'icon' | 'danger' | 'success';
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary:
    'bg-gray-700 text-white hover:bg-gray-700 focus:ring-gray-500 border-transparent',
  white:
    'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 focus:ring-gray-500',
  secondary:
    'bg-blue-100 text-blue-800 hover:bg-blue-200 focus:ring-gray-500 border-blue-200',
  icon: '',
  danger:
    'bg-red-50 text-red-700 hover:bg-red-100 focus:ring-gray-500 border-transparent',
  success:
    'bg-emerald-100 text-emerald-700 hover:bg-emerald-200/60 focus:ring-gray-500 border-transparent'
};

const sizes = {
  xs: 'px-2.5 py-1.5 text-xs',
  sm: 'px-3 py-2 text-sm leading-4',
  base: 'px-4 py-2 text-sm',
  lg: 'px-4 py-2 text-base',
  xl: 'px-6 py-3 text-base'
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = 'base',
      children,
      variant = 'primary',
      onClick,
      buttonRef,
      className
    }: ButtonProps,
    ref
  ) => {
    return (
      <button
        type='button'
        className={classNames(
          className ? className : '',
          'inline-flex items-center rounded-md border font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2',
          variant ? variants[variant] : variants['primary'],
          size ? sizes[size] : sizes['base']
        )}
        onClick={onClick}
        ref={ref || buttonRef}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
