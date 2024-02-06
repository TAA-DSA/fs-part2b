import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  //console.log(persons);
  const [newName, setNewName] = useState("");
  //console.log(newName);

  const addContact = (e) => {
    e.preventDefault();
    //console.log("button initiated", e.target);
    //alert("button pressed");
    console.log(newName);
    persons.map((ele) =>
      ele.name === newName
        ? alert(`${newName} already added to phone book`)
        : setPersons([...persons, { name: newName }])
    );
  };

  const handleChange = (e) => {
    //console.log(e.target.value);
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>debug: {newName}</div>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((ele, index) => (
        <p key={index}>{ele.name}</p>
      ))}
    </div>
  );
};

export default App;
