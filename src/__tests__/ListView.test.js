import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ListView from "../components/ListView";

describe("ListView", () => {
    it("should render", () => {
        const mockFn = jest.fn();
        render(<ListView renderListElements={mockFn} />);
    });
});
