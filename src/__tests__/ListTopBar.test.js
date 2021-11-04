import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent, render } from "@testing-library/react";
import ListTopBar from "../components/ListTopBar";

describe("ListTopBar", () => {
    it("should render", () => {
        render(<ListTopBar />);
    });

    it("should have add new user button", () => {
        const { getByRole } = render(<ListTopBar />);
        expect(getByRole("button")).toBeInTheDocument();
    });

    it("should render form when clicking button", () => {
        const { getByLabelText, getByRole } = render(<ListTopBar />);

        act(() => {
            fireEvent.click(getByRole("button"));
        });

        //When the button is clicked, the form should appear and these labels should be rendered in the DOM.
        expect(getByLabelText("Firstname")).toBeInTheDocument();
        expect(getByLabelText("Lastname")).toBeInTheDocument();
        expect(getByLabelText("Phonenumber")).toBeInTheDocument();
    });
});
