import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent, render } from "@testing-library/react";
import ContactForm from "../components/ContactForm";

describe("Contact Form", () => {
    it("it should render form", () => {
        render(<ContactForm userObject={{}} />);
    });

    it("should render delete button when edit flag is true", () => {
        const { getByRole } = render(
            <ContactForm userObject={{}} editFlag={true} />
        );

        const deleteBtn = getByRole("button", {
            name: /Slett bruker/,
        });

        expect(deleteBtn).toBeInTheDocument();
    });

    it("should only render two buttons when edit flag is false", () => {
        const { getAllByRole } = render(
            <ContactForm editFlag={false} userObject={{}} />
        );
        //We should only have two buttons if the edit flag is false
        expect(getAllByRole("button")).toHaveLength(2);
    });

    it("should call onClick with valid inputs", () => {
        const mockOnSubmit = jest.fn();
        const { getByLabelText, getByRole } = render(
            <ContactForm onSubmit={mockOnSubmit} userObject={{}} />
        );

        act(() => {
            fireEvent.change(getByLabelText("Firstname"), {
                target: { value: "FirstNameTest" },
            });
            fireEvent.change(getByLabelText("Lastname"), {
                target: { value: "LastNameTest" },
            });
            fireEvent.change(getByLabelText("Phonenumber"), {
                target: { value: "12345678" },
            });
        });

        act(() => {
            fireEvent.click(
                getByRole("button", {
                    name: /Lagre/,
                })
            );
        });
    });
});
