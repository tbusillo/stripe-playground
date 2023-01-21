import React from 'react';
import classNames from 'classnames';
import Spinner from '../Spinner';

type CardProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

type CardHeaderProps = {
  className?: string;
  children?: React.ReactNode;
  classOverwrite?: boolean;
};

type CardFooterProps = {
  className?: string;
  children?: React.ReactNode;
};

type CardContentProps = {
  className?: string;
  children?: React.ReactElement | React.ReactElement[] | React.ReactNode;
  isLoading?: boolean;
};

export default function Card({ className, children }: CardProps) {
  return (
    <>
      <div
        className={classNames(
          className ? className : '',
          'overflow-hidden rounded border-t border-gray-200 bg-white shadow'
        )}
      >
        {children}
      </div>
    </>
  );
}

const CardHeader = ({
  className,
  children,
  classOverwrite = false
}: CardHeaderProps) => {
  return (
    <div
      className={classNames(
        className,
        classOverwrite
          ? ''
          : 'px-4 pt-5 pb-3 text-lg font-medium leading-6 text-gray-900 sm:px-6'
      )}
    >
      {children}
    </div>
  );
};

const CardFooter = ({ children }: CardFooterProps) => {
  return <div className='bg-gray-50 px-4 py-4 sm:px-6'>{children}</div>;
};

const CardContent = ({
  children,
  className,
  isLoading = false
}: CardContentProps) => {
  return (
    <div
      className={classNames(
        className ? className : 'px-4 py-5 sm:p-6',
        'md:min-h-[250px]'
      )}
    >
      {isLoading ? <Spinner size='xl' color='secondary' /> : children}
    </div>
  );
};

export { Card, CardHeader, CardFooter, CardContent };
