import { useState, useEffect } from "react";
import Filter from "./Components/Filter/Filter";
import PersonForm from "./Components/PersonForm/PersonForm";
import Person from "./Components/Person/Person";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "persons");

  //console.log(persons);
  const [newName, setNewName] = useState("");
  //console.log(newName);
  const [newNumbers, setNewNumbers] = useState("");
  //console.log(numbers);
  const [filterWords, setFilterWords] = useState("");
  //console.log(filterWords);

  const addContact = (e) => {
    e.preventDefault();
    //console.log("button initiated", e.target);
    //alert("button pressed");
    console.log(newName);
    persons.some((ele) => ele.name === newName)
      ? alert(`${newName} already added to phone book`)
      : setPersons([...persons, { name: newName, number: newNumbers }]);
    // persons.map((ele) =>
    //   ele.name === newName
    //     ? alert(`${newName} already added to phone book`)
    //     : setPersons([...persons, { name: newName, number: newNumbers }])
    // );
  };

  const handleChange = (e) => {
    //console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleNumbers = (e) => {
    setNewNumbers(e.target.value);
  };

  const handleFilter = (e) => {
    //case insensitive
    //console.log(e.target.value);
    setFilterWords(e.target.value.toLowerCase());
  };

  const searchKey = persons.filter((ele) =>
    ele.name.toLowerCase().includes(filterWords)
  );
  //console.log("searchKey", searchKey);

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
      <Person searchKey={searchKey} />
    </div>
  );
};

export default App;
