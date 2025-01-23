import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Storefront } from './Storefront';
import { productData } from '../../data/productData.js';

vi.mock('../Header/Header', () => ({
  Header: () => <header>I am a header</header>
}));

vi.mock('../Card/Card', () => ({
  Card: () => <div data-testid='card'>I am a card</div>
}))

vi.mock('../Footer/Footer', () => ({
  Footer: () => <footer>I am a footer</footer>
}))

vi.mock('../Cart/Cart', () => ({
  Cart: () => <aside>I am a cart</aside>
}))

describe('Storefront component', () => {
  it('Renders header, shop, shop items, and cart', () => {
    const { container } = render(<Storefront />);

    expect(container).toMatchSnapshot();
  });

  it('Renders a card for each product', () => {
    render(<Storefront />);

    expect(screen.getAllByTestId('card')).toHaveLength(productData.length);
  })
});
