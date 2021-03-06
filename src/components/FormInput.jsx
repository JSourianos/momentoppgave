import React from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FormInput = ({ label, placeholder, onChange, value, validInput }) => {
    return (
        <Form.Group as={Row} className="mb-2 me-2" controlId="formBasicText">
            <Form.Label column sm="2" className="text-end">
                {label}
            </Form.Label>
            <Col sm="10">
                <Form.Control
                    required
                    isInvalid={validInput}
                    size="sm"
                    type="text"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
            </Col>
        </Form.Group>
    );
};

export default FormInput;
