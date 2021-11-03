//RENAME THIS AND EXTRACT COMPONENT
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";

const ListTopBar = ({setNewUserFlag}) => {
    return (
        <Card>
            <Card.Body className="d-flex justify-content-between">
                <h5>Ny kontakt</h5>
                <Button onClick={() => setNewUserFlag(newUserFlag => !newUserFlag)}>
                    + Legg til ny kontakt
                </Button>
            </Card.Body>
        </Card>
    )
}

export default ListTopBar;
