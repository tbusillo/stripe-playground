import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppRoutes } from '@components';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('AppRoutes component', () => {
  it('renders a AppRoutes wrapping element', () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <AppRoutes />
      </Router>
    );

    screen.logTestingPlaygroundURL();
    expect(
      screen.getByRole('heading', {
        name: /test/i
      })
    ).toBeTruthy();
  });
});
