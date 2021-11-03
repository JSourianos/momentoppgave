import React from "react";

//Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Components
import FormInput from "./FormInput";

const ContactForm = ({handleSubmit, setFirstName, setLastName, setPhoneNumber}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <FormInput label="Firstname" placeholder={"Enter firstname"} onChange={e => setFirstName(e.target.value)} />
            <FormInput label="Lastname" placeholder={"Enter lastname"} onChange={e => setLastName(e.target.value)}/>
            <FormInput label="Phone number" placeholder={"Enter phone number"} onChange={e => setPhoneNumber(e.target.value)} />

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ContactForm
