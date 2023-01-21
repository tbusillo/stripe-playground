import React from 'react';
import classNames from 'classnames';
import { NavBarGroup } from '@components';

type LayoutProps = {
  children: React.ReactNode;
  blank: boolean;
  className?: string;
};

export default function Layout({
  children,
  blank = false,
  className
}: LayoutProps) {
  if (blank) {
    return <div className='min-h-full'>{children}</div>;
  }
  return (
    <>
      <div className={classNames(className ? className : '', 'min-h-full')}>
        <NavBarGroup />
        <main>{children}</main>
      </div>
    </>
  );
}
