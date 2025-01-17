import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from './Header.jsx'

describe('Header component', () => {
  it('Renders icon, logo, text designs, portrait, and HUD text', () => {
    const { container } = render(<Header />);
    
    expect(container).toMatchSnapshot();
  })
});
