import { describe, expect } from 'vitest';
import { Header } from '@components';
import { render } from '@/utils/test-utils';

describe('Header', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<Header title={'Here is a title'} />);
    expect(baseElement).toBeTruthy();
  });
});
