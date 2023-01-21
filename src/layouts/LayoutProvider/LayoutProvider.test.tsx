import { BrowserRouter } from 'react-router-dom';
import { describe, expect } from 'vitest';
import LayoutProvider from './LayoutProvider';
import { render, screen } from '@utils/test-utils';

describe('LayoutProvider', () => {
  test('renders a LayoutProvider wrapping element', async () => {
    render(
      <BrowserRouter>
        <LayoutProvider>Test</LayoutProvider>
      </BrowserRouter>
    );
    expect(await screen.findByText(/Test/i)).toBeInTheDocument();
  });
});
