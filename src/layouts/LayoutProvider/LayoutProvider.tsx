import classNames from 'classnames';
import { NavBarGroup } from '@components';
import logo from '@logo.svg';

type LayoutProviderProps = {
  children?: React.ReactNode | React.ReactNode[];
  blank?: boolean;
  className?: string;
};

export default function LayoutProvider({
  children,
  blank = false,
  className
}: LayoutProviderProps) {
  if (blank) {
    return <div className='min-h-full'>{children}</div>;
  }
  return (
    <div className={classNames(className ? className : '', 'min-h-full')}>
      <NavBarGroup logo={<img src={logo} className='w-8 h-8' alt='logo' />} />
      <main>
        {/* <Header title='TBD Playground' /> */}
        {children}
      </main>
      <Footer />
    </div>
  );
}

export const Footer = () => {
  return <footer>Here&apos;s a footer</footer>;
};
