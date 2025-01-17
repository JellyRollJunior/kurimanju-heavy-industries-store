import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Homepage } from './Homepage';
import { MemoryRouter } from 'react-router-dom';

describe('Homepage component', () => {
  it('Renders Homepage with hero image, company logo, and nav button', () => {
    const { container } = render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });
});
