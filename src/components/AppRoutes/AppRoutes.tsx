import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '@layouts';
import { About, Home, NotFound, Pay } from '@pages';
import Example from '@pages/example.mdx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path='/explore' element={<About />} />
        <Route path='/example' element={<Example />} />
        <Route path='/pay' element={<Pay />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
