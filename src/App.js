import './App.css';
import React, {useState} from "react";

import Container from "react-bootstrap/Container"

//Components
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

    const createPerson = (newUserObject) => {
        //Creating a simple "unique" id that will work for this demo
        newUserObject.id = Math.random();
        return setListData((listData) => [...listData, newUserObject])
    }

    const updatePerson = (userObject) => {
        let currentUserIndex = listData.findIndex(user => user.id === userObject.id)

        setListData((newListData) => {
            newListData[currentUserIndex] = userObject

            return [...newListData]
        });
    }

    const deletePerson = (userObject) => {
        //Creating a copy of the array to not mutate current state
        let newListData = [...listData];
        let currentUserIndex = newListData.findIndex(user => user.id === userObject.id)

        if (currentUserIndex !== -1) {
            newListData.splice(currentUserIndex, 1)
            return setListData((newListData) => [...newListData])
        }
    }

    const renderListElements = () => {
        return listData.map((userObject, index) => <ListElement key={index} userObject={userObject}
                                                                deletePerson={deletePerson}
                                                                updatePerson={updatePerson}
        />)
    }

    return (
        <Container className="mt-5">
            <h1>Moment</h1>
            <ListTopBar createPerson={createPerson}/>
            <ListView renderListElements={renderListElements}/>
        </Container>
    );
}

export default App;


