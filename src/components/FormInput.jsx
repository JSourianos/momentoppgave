import React from "react";
import Form from "react-bootstrap/Form";

const FormInput = ({label, placeholder, onChange}) => {
    return(
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control type="text" placeholder={placeholder} onChange={onChange} />
        </Form.Group>
    )
}

export default FormInput;
