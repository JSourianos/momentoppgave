import React, { useState } from "react";

//Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Components
import FormInput from "./FormInput";

const ContactForm = ({
    handleSubmit,
    setEditFlag,
    deletePerson,
    userObject,
    editFlag,
}) => {
    //When editing a user we have access to the current objects name, so we add it to the input fields
    const [firstName, setFirstName] = useState(userObject.firstName || "");
    const [lastName, setLastName] = useState(userObject.lastName || "");
    const [phoneNumber, setPhoneNumber] = useState(
        userObject.phoneNumber || ""
    );

    //Input states
    const [firstNameInputError, setFirstNameInputError] = useState(false);
    const [lastNameInputError, setLastNameInputError] = useState(false);
    const [phoneNumberInputError, setPhoneNumberInputError] = useState(false);

    //This function returns the form values to the onSubmit handlers in the top level component
    const returnFormValues = () => {
        //Simple validation
        if (firstName === "") {
            setFirstNameInputError(true);
        } else {
            setFirstNameInputError(false);
        }

        if (lastName === "") {
            setLastNameInputError(true);
        } else {
            setLastNameInputError(false);
        }

        if (phoneNumber === "") {
            setPhoneNumberInputError(true);
        } else {
            setPhoneNumberInputError(false);
        }
        //Simple validation - an empty string is always false
        if (firstName && lastName && phoneNumber) {
            //The destructured values will become the newUserObject
            handleSubmit({ firstName, lastName, phoneNumber });
            setEditFlag(false);
        }
    };
    return (
        <Form className="mt-5" onSubmit={(e) => e.preventDefault()}>
            <FormInput
                validInput={firstNameInputError}
                label="Firstname"
                placeholder={"Enter firstname"}
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
            />
            <FormInput
                validInput={lastNameInputError}
                label="Lastname"
                placeholder={"Enter lastname"}
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />
            <FormInput
                validInput={phoneNumberInputError}
                label="Phonenumber"
                placeholder={"Enter phonenumber"}
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
            />

            <Button
                className="float-end me-4 mt-2 mb-2"
                size="sm"
                variant="primary"
                type="submit"
                onClick={() => {
                    returnFormValues();
                }}
            >
                Lagre
            </Button>

            <Button
                className="float-end me-2 mt-2"
                size="sm"
                variant="secondary"
                type="button"
                onClick={() => setEditFlag(false)}
            >
                Avbryt
            </Button>

            {editFlag && (
                <Button
                    className="float-start ms-4 mt-2 align-center"
                    size="sm"
                    variant="danger"
                    type="button"
                    onClick={() => {
                        deletePerson(userObject);
                        setEditFlag(false);
                    }}
                >
                    <i className="bi bi-trash" /> Slett bruker
                </Button>
            )}
        </Form>
    );
};

export default ContactForm;
