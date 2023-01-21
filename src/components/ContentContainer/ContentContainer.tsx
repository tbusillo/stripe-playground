import React from 'react';

type ContentContainerProps = {
  children?: React.ReactNode;
};

const ContentContainer = ({ children }: ContentContainerProps) => {
  return (
    <>
      <div className='mx-auto max-w-7xl dark:bg-gray-900 sm:px-6 lg:px-12'>
        {children}
      </div>
    </>
  );
};

ContentContainer.displayName = 'ContentContainer';

export default ContentContainer;
