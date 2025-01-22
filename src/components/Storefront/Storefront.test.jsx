import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Storefront } from './Storefront';

describe('Storefront component', () => {
  it('Renders header, shop, shop items, and cart', () => {
    const { container } = render(<Storefront />);

    expect(container).toMatchSnapshot();
  });
});
