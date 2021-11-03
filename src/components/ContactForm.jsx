import React, {useEffect, useState} from "react";

//Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Components
import FormInput from "./FormInput";

const ContactForm = ({handleSubmit, setEditFlag, deletePerson, userObject, editFlag}) => {
    const [firstName, setFirstName] = useState(userObject.firstName || "");
    const [lastName, setLastName] = useState(userObject.lastName || "");
    const [phoneNumber, setPhoneNumber] = useState(userObject.phoneNumber || "");

    //Add validation!
    const returnFormValues = () => {
        handleSubmit({firstName, lastName, phoneNumber})
    }

    return (
        <Form style={{marginTop: "1rem"}} onSubmit={(e) => e.preventDefault()}>
            <FormInput label="Firstname" placeholder={"Enter firstname"} onChange={e => setFirstName(e.target.value)}
                       value={firstName}
            />
            <FormInput label="Lastname" placeholder={"Enter lastname"} onChange={e => setLastName(e.target.value)} value={lastName} />
            <FormInput label="Phonenumber" placeholder={"Enter phonenumber"} onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} />

            <Button size="sm" variant="primary" type="submit" onClick={() => {
                returnFormValues()
                setEditFlag(false)
            }}>Lagre</Button>

            <Button size="sm" variant="secondary" type="button" onClick={() => setEditFlag(false)}>Avbryt</Button>

            {!editFlag ?  <Button size="sm" variant="danger" type="button" onClick={() => {
                deletePerson(userObject)
                setEditFlag(false)
            }}>Slett bruker</Button> : ""}
        </Form>
    )
}

export default ContactForm;
