import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { CartItem } from './CartItem';
import userEvent from '@testing-library/user-event';

describe('Cart item component', () => {
  it('Renders product image, name, price, quantity, and remove button', () => {
    const { container } = render(<CartItem itemId={0} quantity={1} />);

    expect(container).toMatchSnapshot();
  });

  it('Calls removeFromCart(itemId) when remove button is click', async () => {
    const user = userEvent.setup();
    const itemId = 0;
    const removeFromCart = vi.fn();
    render(
      <CartItem itemId={itemId} quantity={1} removeFromCart={removeFromCart} />
    );

    await user.click(screen.getByRole('button', { name: 'Remove' }));

    expect(removeFromCart).toBeCalledWith(itemId);
  });
});
