import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '@layouts';
import { About, Home, NotFound, Pay } from '@pages';
import Example from '@pages/example.mdx';
import PaySuccess from '@pages/pay/success.mdx';
import PaymentAdd from '@pages/pay/add-method';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path='/explore' element={<About />} />
        <Route path='/example' element={<Example />} />
        <Route path='/pay' element={<Pay />}>
          <Route index element={<PaymentAdd />} />
          <Route path='add' element={<PaymentAdd />} />
          <Route path='success' element={<PaySuccess />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
