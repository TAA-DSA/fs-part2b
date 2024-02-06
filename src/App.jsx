import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

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
      <form onSubmit={addContact}>
        {/* <div>debug: {newName}</div> */}
        <div>
          filter shown with :{" "}
          <input
            type="search"
            placeholder="search contact"
            onChange={handleFilter}
          />
        </div>
        <h3>add a new contact</h3>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number: <input value={newNumbers} onChange={handleNumbers} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {searchKey.map((ele, index) => (
        <p key={index}>
          {ele.name} {ele.number}
        </p>
      ))}
    </div>
  );
};

export default App;
