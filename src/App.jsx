import { useState, useEffect } from "react";
import Filter from "./Components/Filter/Filter";
import PersonForm from "./Components/PersonForm/PersonForm";
import Person from "./Components/Person/Person";
import { v4 as uuidv4 } from "uuid";
import contactService from "../src/Services/contact.js";

console.log(uuidv4());

const App = () => {
  const [persons, setPersons] = useState([]);
  //console.log(persons);
  const [newName, setNewName] = useState("");
  //console.log(newName);
  const [newNumbers, setNewNumbers] = useState("");
  //console.log(numbers);
  const [filterWords, setFilterWords] = useState("");
  //console.log(filterWords);

  useEffect(() => {
    console.log("effect");
    const fetchData = async () => {
      try {
        const response = await contactService.getAll();
        console.log(response);
        setPersons(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  console.log("render", persons.length, "persons");

  const addContact = async (e) => {
    e.preventDefault();

    //console.log("addContact", e.target.value);

    const contactObject = {
      name: newName,
      number: newNumbers,
      id: uuidv4,
    };

    console.log("Name", contactObject.name);

    //console.log("Add new contact", persons);

    const warning = `${contactObject.name} already added to phone book`;

    if (
      persons.some(
        (ele) =>
          ele.name.toLowerCase() === contactObject.name.toLocaleLowerCase()
      )
    ) {
      alert(warning);
    } else {
      try {
        await contactService.create(contactObject);
        setPersons([...persons, contactObject]);
        console.log("Contact added successfully");
      } catch (error) {
        console.error("Error adding contact", error);
      }
    }
    //Check this logic again as there is a bug

    //bug: Dectects the duplicate name
    //but still writing it in JSON file

    //console.log(newName);
    // persons.some((ele) =>
    //       ele.name === response.data.name
    //         ? alert(`${response.data.name} already added to phone book`)
    //         : setNewName([...persons, { name: newName, number: newNumbers }])
    //     );
  };

  const handleChange = (e) => {
    console.log("newName", e.target.value);
    setNewName(e.target.value);
  };

  const handleNumbers = (e) => {
    console.log("newNumbers", e.target.value);
    setNewNumbers(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterWords(e.target.value.toLowerCase());
  };

  const searchKey = persons.filter((ele) =>
    ele.name.toLowerCase().includes(filterWords)
  );

  const deleteContact = async (e) => {
    //console.log(persons);
    const indexOfBtn = e.target.id;
    //console.log(indexOfBtn);

    const confirm = `Delete ${persons[indexOfBtn].name} ?`;
    //console.log(confirm);
    if (window.confirm(confirm)) {
      try {
        const targetID = persons.map((ele) => ele.id);
        const id = targetID[indexOfBtn];
        console.log(id);
        await contactService.deleteContact(id);
        setPersons(persons.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Error deleting contact", error);
      }
    } else {
      null;
    }
    //console.log("Delete", indexOfBtn);
    //const confirm = `Delete ${persons[indexOfBtn].name} ?`;
    //console.log(confirm);
    //contactService.deleteContact()
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter handleFilter={handleFilter} />
      </div>
      <h3>add a new contact</h3>
      <PersonForm
        addContact={addContact}
        newName={newName}
        handleChange={handleChange}
        newNumbers={newNumbers}
        handleNumbers={handleNumbers}
      />

      <h2>Numbers</h2>
      <Person searchKey={searchKey} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
