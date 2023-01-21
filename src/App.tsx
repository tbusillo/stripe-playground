import logo from '@logo.svg';
import { LayoutProvider } from './layouts';
import { AppRoutes, PrismListener } from '@components';

const App = () => {
  return (
    <LayoutProvider>
      <PrismListener>
        <AppRoutes />
      </PrismListener>
    </LayoutProvider>
  );
};

export default App;
