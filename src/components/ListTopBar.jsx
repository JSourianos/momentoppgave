import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import ContactForm from "./ContactForm";

const ListTopBar = ({ createPerson }) => {
    const [newUserFlag, setNewUserFlag] = useState(false);

    return (
        <Card>
            <Card.Body className="d-flex justify-content-between align-items-center ">
                <h5>Ny bruker</h5>
                {!newUserFlag && (
                    <Button
                        onClick={() =>
                            setNewUserFlag((newUserFlag) => !newUserFlag)
                        }
                    >
                        + Legg til ny kontakt
                    </Button>
                )}
            </Card.Body>
            {newUserFlag && (
                <ContactForm
                    handleSubmit={createPerson}
                    setEditFlag={setNewUserFlag}
                    editFlag={false}
                    userObject={{}}
                />
            )}
        </Card>
    );
};

export default ListTopBar;
