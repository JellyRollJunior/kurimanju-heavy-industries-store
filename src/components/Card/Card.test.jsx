import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Card } from './Card';
import { render, screen } from '@testing-library/react';

describe('Shop item card', () => {
  it('Calls onSubmit on clicking add to cart button', async () => {
    const onSubmit = vi.fn();
    const user = userEvent.setup();
    render(<Card onSubmit={onSubmit} />);
    const button = screen.getByRole('button', { name: 'Add to Cart' });

    await user.click(button);

    expect(onSubmit).toHaveBeenCalled();
  });
});
