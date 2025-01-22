import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { CartInfo } from './CartInfo';

describe('Cart info component', () => {
  it('Renders cart item quantity, subtotal, and checkout button', () => {
    const { container } = render(<CartInfo numCartItems={5} subtotal={10} />);

    expect(container).toMatchSnapshot();
  });

  it('Calls checkoutCart when checkout button is clicked', async () => {
    const checkoutCart = vi.fn();
    render(<CartInfo subtotal={10} checkoutCart={checkoutCart} />);
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', 'Checkout'));

    expect(checkoutCart).toBeCalled();
  });
});
