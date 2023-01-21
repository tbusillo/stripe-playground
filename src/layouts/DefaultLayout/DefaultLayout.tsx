import { Header } from '@components';
import { Outlet } from 'react-router-dom';

type LayoutProps = {
  children?: React.ReactNode;
  blank?: boolean;
  className?: string;
};

export default function DefaultLayout({
  children,
  blank = false
}: LayoutProps) {
  if (blank) {
    return <div className='min-h-full'>{children}</div>;
  }
  return (
    <div>
      <Header title='Test' />
      <div className='max-w-6xl w-full mx-auto'>
        <Outlet />
      </div>
    </div>
  );
}

export const Footer = () => {
  return <footer>Here&apos;s a footer</footer>;
};
