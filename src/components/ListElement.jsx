//This list element needs to be toggable
import ContactForm from "./ContactForm";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import React, {useState} from "react";

const ListElement = ({userObject, updatePerson, deletePerson}) => {
    const [editFlag, setEditFlag] = useState(false)

    const setNewUserData = (newFields) => {
        updatePerson({...userObject, ...newFields})
    }

    if(editFlag) {
        return (
            <div>
                <ContactForm handleSubmit={setNewUserData} setEditFlag={setEditFlag} userObject={userObject} deletePerson={deletePerson} />
            </div>
        )
    } else {
        return(
            <Card>
                <Card.Body>{userObject.firstName} {userObject.lastName} {userObject.phoneNumber}
                    <Button onClick={() => setEditFlag((editFlag) => !editFlag)}>Rediger</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ListElement
