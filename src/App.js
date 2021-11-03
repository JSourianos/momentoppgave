import './App.css';
import React, {useState} from "react";

import Container from "react-bootstrap/Container"

//Components
import ContactForm from "./components/ContactForm";
import ListElement from "./components/ListElement";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const initialData = [
    {
        id: 0,
        firstName: "Test",
        lastName: "Mannen",
        phoneNumber: "12345678"
    }
]

//RENAME THIS
const AddUserCard = ({setNewUserFlag}) => {
    return(
        <Card>
            <Card.Body><Button onClick={() => setNewUserFlag(true)}>+ Legg til ny kontakt</Button></Card.Body>
        </Card>
    )
}

function App() {
    const [listData, setListData] = useState(initialData)

    const [newUserFlag, setNewUserFlag] = useState(false)

    const createPerson = (newUserObject) => {
        console.log(newUserObject)
        newUserObject.id = Math.random(); //sort this out

        setListData((listData) => [...listData, newUserObject])
        console.log(newUserObject);
    }

    const updatePerson = (userObject) => {
        let currentUserIndex = listData.findIndex(user => user.id === userObject.id)

        setListData((newListData) => {
            newListData[currentUserIndex] = userObject

            return [...newListData]
        });
    }

    const deletePerson = (userObject) => {
        let newListData = [...listData];
        let currentUserIndex = newListData.findIndex(user => user.id === userObject.id)

        if(currentUserIndex !== -1) {
            newListData.splice(currentUserIndex, 1)
            setListData((newlistData) => [...newListData])
        }
    }

  return (
    <Container>
      <h1>Moment Testoppgave</h1>
        {newUserFlag ?
            <ContactForm handleSubmit={createPerson} setEditFlag={setNewUserFlag} editFlag={newUserFlag} />
            :
            <AddUserCard setNewUserFlag={setNewUserFlag} />
        }

        {listData.map((data, index) => <ListElement key={index} userObject={data} deletePerson={deletePerson} updatePerson={updatePerson}/>)}
    </Container>
  );
}

export default App;
