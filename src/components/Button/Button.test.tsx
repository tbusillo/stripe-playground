import { render, screen } from '@testing-library/react';
import { describe, assert, it } from 'vitest';
import { Button } from '@components';

describe('Button', () => {
  it('renders a Button wrapping element', () => {
    render(<Button>Here is a child</Button>);

    assert.exists(screen.getByText(/Here is a child/i));
  });
});
