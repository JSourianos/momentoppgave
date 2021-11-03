//This list element needs to be toggable
import ContactForm from "./ContactForm";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

const ListElement = ({data, toggleEdit, setToggleEdit}) => {
    if(toggleEdit) {
        return (
            <ContactForm />
        )
    } else {
        return(
            <Card>
                <Card.Body>{data.firstName} {data.lastName} {data.phoneNumber}</Card.Body>
                <Card.Footer><Button>Hello</Button></Card.Footer>
            </Card>
        )
    }
}

export default ListElement
