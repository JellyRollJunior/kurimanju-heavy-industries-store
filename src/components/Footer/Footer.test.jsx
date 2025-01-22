import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";

describe('Footer component', () => {
    it('Renders site acknowledgements', () => {
        const { container } = render(<Footer />);

        expect(container).toMatchSnapshot();
    })
})