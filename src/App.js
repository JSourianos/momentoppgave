import './App.css';
import React, {useState} from "react";

import Container from "react-bootstrap/Container"

//Components
import ContactForm from "./components/ContactForm";
import ListElement from "./components/ListElement";
import ListTopBar from "./components/ListTopBar";
import ListView from "./components/ListView";

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
        console.log(newUserObject) //Remove this
        newUserObject.id = Math.random(); //sort this out

        setListData((listData) => [...listData, newUserObject])
        console.log(newUserObject); //Remove this
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

        if (currentUserIndex !== -1) {
            newListData.splice(currentUserIndex, 1)
            setListData((newlistData) => [...newListData])
        }
    }

    const renderListElements = () => {
        return listData.map((userObject, index) => <ListElement key={index} userObject={userObject}
                                                                deletePerson={deletePerson}
                                                                updatePerson={updatePerson}
        />)
    }

    return (
        <Container className="App">
            <h1>Moment Testoppgave</h1>
            <ListTopBar setNewUserFlag={setNewUserFlag}/>
            {newUserFlag ? <ContactForm handleSubmit={createPerson} setEditFlag={setNewUserFlag} editFlag={newUserFlag}
                                        userObject={{}}/> : ""}
            <ListView renderListElements={renderListElements}/>
        </Container>
    );
}

export default App;


