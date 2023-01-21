import React from 'react';

type HeaderProps = {
  title: React.ReactNode;
};

const Header = ({ title }: HeaderProps) => {
  // const pageTitle: string = `${title} | tailplay`;

  return (
    <>
      <header className='w-full border-b border-t border-gray-200 bg-white py-2.5 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800/50'>
        <div className='mx-auto flex max-w-7xl items-center px-2 sm:px-6 md:justify-between lg:px-12'>
          <div className='min-w-0 flex-1'>
            <h2 className='text-xl font-medium leading-7 text-gray-900 dark:text-white sm:truncate sm:text-xl'>
              {title}
            </h2>
          </div>
          <div className='mt-4 flex md:mt-0 md:ml-4'></div>
        </div>
      </header>
    </>
  );
};

export default Header;
