import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Cart } from './Cart';
import userEvent from '@testing-library/user-event';

describe('Shopping cart slide component', () => {
  it('Renders title, cart close button, checkout button, and cart item holder', () => {
    const cart = [1, 1, 1, 1, 1];
    const { container } = render(<Cart cart={cart} />);

    expect(container).toMatchSnapshot();
  });

  it('Calls hideCart when x button is clicked', async () => {
    const cart = [1, 1, 1, 1, 1];
    const hideCart = vi.fn();
    render(<Cart cart={cart} hideCart={hideCart} />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: '×' }));

    expect(hideCart).toBeCalled();
  });
});
