import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Cart } from "./Cart";

describe('Shopping cart slide component', () => {
    it('Renders title, cart close button, checkout button, and cart item holder', () => {
        const cart = [1, 1, 1, 1, 1];
        const { container } = render(<Cart cart={cart} />);

        expect(container).toMatchSnapshot();
    })
})