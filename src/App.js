import './App.css';
import React, {useState} from "react";

import Container from "react-bootstrap/Container"

//Components
import ContactForm from "./components/ContactForm";
import ListElement from "./components/ListElement";
import AddUserCard from "./components/AddUserCard";

const initialData = [
    {
        id: 0,
        firstName: "Test",
        lastName: "Mannen",
        phoneNumber: "12345678"
    }
]

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

    const renderListElements = () => {
        return listData.map((data, index) => <ListElement key={index} userObject={data} deletePerson={deletePerson} updatePerson={updatePerson}/>)
    }

  return (
    <Container className="App">
      <h1>Moment Testoppgave</h1>
        <AddUserCard setNewUserFlag={setNewUserFlag} />
        {newUserFlag ? <ContactForm handleSubmit={createPerson} setEditFlag={setNewUserFlag} editFlag={newUserFlag} userObject={{}}/> : ""}
        {renderListElements()}
    </Container>
  );
}

export default App;
