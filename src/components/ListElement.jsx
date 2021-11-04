import React, { useState } from "react";

import ContactForm from "./ContactForm";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ListElement = ({ userObject, updatePerson, deletePerson }) => {
    const { firstName, lastName, phoneNumber } = userObject;
    const [editFlag, setEditFlag] = useState(false);

    const setNewUserData = (newFields) => {
        updatePerson({ ...userObject, ...newFields });
    };

    //The edit flag will be set by clicking the edit button
    if (editFlag) {
        return (
            <Card>
                <ContactForm
                    handleSubmit={setNewUserData}
                    setEditFlag={setEditFlag}
                    editFlag={true}
                    userObject={userObject}
                    deletePerson={deletePerson}
                />
            </Card>
        );
    }
    return (
        <Card>
            <Card.Body className="d-flex justify-content-between justify-items-center align-items-center">
                <div>
                    <p className="m-0 p-0 fw-bold">
                        {firstName} {lastName}
                    </p>
                    <p className="m-0 p-0">Telefonnummer: {phoneNumber}</p>
                </div>
                <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => {
                        setEditFlag((editFlag) => !editFlag);
                    }}
                >
                    <i className="bi bi-pencil-square" /> Rediger
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ListElement;
