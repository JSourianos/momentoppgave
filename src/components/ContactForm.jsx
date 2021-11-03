import React, {useState} from "react";

//Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Components
import FormInput from "./FormInput";

const ContactForm = ({handleSubmit, setEditFlag, deletePerson, userObject, editFlag}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const returnFormValues = () => {
        handleSubmit({firstName, lastName, phoneNumber})
    }

    return (
        <Form onSubmit={(e) => e.preventDefault()}>
            <FormInput label="Firstname" placeholder={"Enter firstname"} onChange={e => setFirstName(e.target.value)} />
            <FormInput label="Lastname" placeholder={"Enter lastname"} onChange={e => setLastName(e.target.value)} />
            <FormInput label="Phonenumber" placeholder={"Enter phonenumber"} onChange={e => setPhoneNumber(e.target.value)} />

            <Button variant="primary" type="submit" onClick={() => {
                returnFormValues()
                setEditFlag(false)
            }}>Lagre</Button>

            <Button variant="secondary" type="button" onClick={() => setEditFlag(false)}>Avbryt</Button>

            {!editFlag ?  <Button variant="danger" type="button" onClick={() => {
                deletePerson(userObject)
                setEditFlag(false)
            }}>Slett</Button> : ""}
        </Form>
    )
}

export default ContactForm
