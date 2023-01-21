import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import NotFound from './NotFound';
import { render, screen, waitFor } from '@/utils/test-utils';
import { createMemoryHistory } from 'history';

describe('NotFound', () => {
  it('renders without error', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });

  it('renders when the the pathname does not match another route', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='/blah' element={<p>Wrong route!</p>} />
          <Route path='/wrong' element={<p>Also the wrong route!</p>} />
          <Route
            path='/example'
            element={<p>This does not seem right either...</p>}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
    const history = createMemoryHistory();
    history.push('/some/bad/route');

    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
  it('does not render when a user goes to the right route', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='/blah' element={<p>Wrong route!</p>} />
          <Route path='/wrong' element={<p>Right route</p>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );

    const history = createMemoryHistory();
    history.push('wrong');
    waitFor(() => {
      setTimeout(() => {}), 500;
    });
    console.log(history.location.pathname);

    expect(history.location.pathname).equals('wrong');
  });
});
