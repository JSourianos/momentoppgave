import React, {useState} from "react";

import ContactForm from "./ContactForm";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

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
                <Card.Body style={{display: "flex", justifyContent: "space-between"}}>{userObject.firstName} {userObject.lastName} {userObject.phoneNumber}
                    <Button size="sm" onClick={() => {
                        setEditFlag((editFlag) => !editFlag)
                        console.log(userObject) //REMEMBER TO REMOVE
                    }}>Rediger</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default ListElement
