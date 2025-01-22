import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Header } from './Header.jsx';
import userEvent from '@testing-library/user-event';

describe('Header component', () => {
  it('Renders icon, logo, text designs, portrait, and HUD text', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });

  it('Calls onClickViewCart when clicking the View Cart button', async () => {
    const onClickViewCart = vi.fn();
    const user = userEvent.setup();
    render(<Header onClickViewCart={onClickViewCart} />);
    const viewCartButton = screen.getByRole('button', { name: 'View Cart' });

    await user.click(viewCartButton);

    expect(onClickViewCart).toBeCalled();
  });
});
