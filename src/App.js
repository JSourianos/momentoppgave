import './App.css';
import {useState} from "react";

import Container from "react-bootstrap/Container"

//Components
import ContactForm from "./components/ContactForm";
import ListElement from "./components/ListElement";

const initialData = [
    {
        id: "03493432",
        firstName: "Test",
        lastName: "Mannen",
        phoneNumber: "12345678"
    }
]

function App() {
    const [listData, setListData] = useState(initialData)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const [toggleEdit, setToggleEdit] = useState(false)

    const handleAdd = (e) => {
        e.preventDefault();

        const id = Math.floor(Math.random() * 100000);
        const newEntry = {
            id,
            firstName,
            lastName,
            phoneNumber
        }

        setListData((listData) => [...listData, newEntry])
    }

  return (
    <Container>
      <h1>Moment Testoppgave</h1>
        <ContactForm handleSubmit={handleAdd} setFirstName={setFirstName} setLastName={setLastName} setPhoneNumber={setPhoneNumber}/>

        {listData.map((data, index) => <ListElement key={index} data={data} toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} />)}
    </Container>
  );
}

export default App;
