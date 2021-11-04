import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
    it("renders App component", () => {
        render(<App />);
    });

    it("renders Moment title", () => {
        render(<App />);
        expect(screen.getByText(/Moment/)).toBeInTheDocument();
    });

    it("renders Ny Bruker title", () => {
        render(<App />);
        expect(screen.getByText(/Ny bruker/)).toBeInTheDocument();
    });

    it("renders buttons", () => {
        render(<App />);
        expect(screen.getAllByRole("button")).toHaveLength(4); //When the app renders we should have 4 buttons
    });
});
