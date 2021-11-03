import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

//Just created a simple component for rendering the data, makes the App.js file look clean
const ListView = ({renderListElements}) => {
    return (
        <ListGroup>
            {renderListElements()}
        </ListGroup>
    )
}

export default ListView;
