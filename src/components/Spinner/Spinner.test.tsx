import { describe, it } from 'vitest';
import Spinner from './Spinner';
import { render, screen } from '@/utils/test-utils';

describe('Spinner', () => {
  it('renders without error', async () => {
    const { debug } = render(<Spinner size={'sm'} color={'primary'} />);

    debug();
    const element = await screen.findByTestId('spinner-element');
    assert.exists(element);
  });
});
