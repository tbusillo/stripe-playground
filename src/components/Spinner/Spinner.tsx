import React from 'react';
import classNames from 'classnames';

type SpinnerProps = {
  size: 'sm' | 'md' | 'lg' | 'xl';
  color: 'primary' | 'secondary' | 'warning' | 'danger';
};

const variant = {
  sizes: {
    sm: 'h-3 w-3',
    md: 'h-5 w-5',
    lg: 'h-7 w-7',
    xl: 'h-10 w-10'
  },
  colors: {
    primary: 'text-gray-800',
    secondary: 'text-blue-500',
    warning: 'text-yellow-500',
    danger: 'text-red-500',
    muted: 'text-gray-500'
  }
};

const Spinner = ({ size = 'md', color = 'primary' }: SpinnerProps) => {
  return (
    <>
      <svg
        className={classNames(
          variant.sizes[size],
          variant.colors[color],
          '-ml-1 mr-3 animate-spin text-gray-500'
        )}
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        data-testid='spinner-element'
      >
        <circle
          className='opacity-25'
          cx='12'
          cy='12'
          r='10'
          stroke='currentColor'
          strokeWidth='4'
        ></circle>
        <path
          className='opacity-75'
          fill='currentColor'
          d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
        ></path>
      </svg>
    </>
  );
};

Spinner.displayName = 'Spinner';

export default Spinner;
