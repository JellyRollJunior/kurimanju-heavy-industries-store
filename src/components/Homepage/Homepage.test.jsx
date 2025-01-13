import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Homepage } from './Homepage';

describe('Homepage component', () => {
  it('Renders Homepage with hero image, company logo, and nav button', () => {
    const { container } = render(<Homepage />);
    expect(container).toMatchSnapshot();
  });
});
