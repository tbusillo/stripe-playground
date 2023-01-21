import { describe, expect, it } from 'vitest';
import { render, screen } from '@utils/test-utils';
import { ContentContainer } from '@components';

describe('ContentContainer', () => {
  it('renders a ContentContainer wrapping element', () => {
    render(<ContentContainer>Hello</ContentContainer>);

    expect(screen.getByText(/Hello/i)).toBeTruthy();
  });
});
