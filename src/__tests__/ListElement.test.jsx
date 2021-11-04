import React from "react";
import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";

import ListElement from "../components/ListElement";

describe("ListElement", () => {
    it("should render edit button", () => {
        const mockUser = {
            firstName: "Test",
            lastName: "Testy",
            phoneNumber: "12345678",
        };
        const { getByRole } = render(<ListElement userObject={mockUser} />);

        expect(
            getByRole("button", {
                name: /Rediger/,
            })
        ).toBeInTheDocument();
    });

    it("should render form when edit button has been clicked", () => {
        const mockUser = {
            firstName: "Test",
            lastName: "Testy",
            phoneNumber: "12345678",
        };
        const { getByRole, getAllByRole } = render(
            <ListElement userObject={mockUser} />
        );

        act(() => {
            fireEvent.click(
                getByRole("button", {
                    name: /Rediger/,
                })
            );
        });

        expect(screen.getAllByRole("button")).toHaveLength(3); //We should have 3 buttons available if the user presses "Rediger"
    });
});
