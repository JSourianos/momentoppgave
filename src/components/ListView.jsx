import ListGroup from "react-bootstrap/ListGroup";
import React from "react";

const ListView = ({renderListElements}) => {
    return (
        <ListGroup>
            {renderListElements()}
        </ListGroup>
    )
}

export default ListView;
