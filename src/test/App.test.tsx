import { describe, expect } from 'vitest';
import App from '@/App';
import { render, screen } from '@/utils/test-utils';
import { BrowserRouter } from 'react-router-dom';

describe('Simple working test', () => {
  test('the title is visible', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByRole('main')).toBeTruthy();
  });
});
