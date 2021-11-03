//RENAME THIS AND EXTRACT COMPONENT
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import React from "react";

const AddUserCard = ({setNewUserFlag}) => {
    return(
        <Card>
            <Card.Body style={{display: "flex", justifyContent: "space-between", backgroundColor: "#D3D3D3", alignItems: "center"}}>
                <h5>Ny kontakt</h5>
                <Button onClick={() => setNewUserFlag(newUserFlag => !newUserFlag)}>
                    + Legg til ny kontakt
                </Button>
            </Card.Body>
        </Card>
    )
}

export default AddUserCard;
