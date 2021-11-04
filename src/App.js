import React, { useState } from "react";

import Container from "react-bootstrap/Container";

//Components
import ListElement from "./components/ListElement";
import ListTopBar from "./components/ListTopBar";
import ListView from "./components/ListView";

const initialData = [
    {
        id: 0,
        firstName: "Test",
        lastName: "Mannen",
        phoneNumber: "12345678",
    },
    {
        id: 1,
        firstName: "Luiso",
        lastName: "Fabrice",
        phoneNumber: "60006909",
    },
    {
        id: 2,
        firstName: "Rot",
        lastName: "Kei",
        phoneNumber: "88833222",
    },
];

function App() {
    const [listData, setListData] = useState(initialData);

    const createPerson = (newUserObject) => {
        //Creating a simple "unique" id that will work for this demo
        newUserObject.id = Math.random();
        return setListData((listData) => [...listData, newUserObject]);
    };

    const updatePerson = (userObject) => {
        let currentUserIndex = listData.findIndex(
            (user) => user.id === userObject.id
        );

        setListData((newListData) => {
            newListData[currentUserIndex] = userObject;

            return [...newListData];
        });
    };

    const deletePerson = (userObject) => {
        //Creating a copy of the array to not mutate current state
        let newListData = [...listData];
        let currentUserIndex = newListData.findIndex(
            (user) => user.id === userObject.id
        );

        if (currentUserIndex !== -1) {
            newListData.splice(currentUserIndex, 1);
            return setListData(() => [...newListData]);
        }
    };

    const renderListElements = () => {
        return listData.map((userObject, index) => (
            <ListElement
                key={index}
                userObject={userObject}
                deletePerson={deletePerson}
                updatePerson={updatePerson}
            />
        ));
    };

    return (
        <Container
            fluid="sm"
            className="mt-5 shadow-sm p-3 mb-5 bg-white rounded"
            size="sm"
        >
            <h1>Moment</h1>
            <ListTopBar createPerson={createPerson} />
            <ListView renderListElements={renderListElements} />
        </Container>
    );
}

export default App;
