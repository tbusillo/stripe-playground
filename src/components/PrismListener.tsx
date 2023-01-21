import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Prism from 'prismjs';
import '@assets/styles/dracula.prismjs.css';

type PrismListenerProps = {
  children?: ReactNode;
};

const PrismListener = ({ children }: PrismListenerProps) => {
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    Prism.highlightAll();
    // console.log('Prism should have rehighlighted');
  }, [location]);

  return <div>{children}</div>;
};

export default PrismListener;
