import { describe, expect } from 'vitest';
import { NavBarGroup } from '@components';
import { render, screen } from '@/utils/test-utils';
import { BrowserRouter } from 'react-router-dom';

describe('NavBar', () => {
  test('should render successfully', () => {
    render(
      <BrowserRouter>
        <NavBarGroup />
      </BrowserRouter>
    );
    expect(screen.getByRole(/navigation/i)).toBeInTheDocument();
  });
});
