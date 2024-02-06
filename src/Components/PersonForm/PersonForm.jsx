const PersonForm = ({
  addContact,
  newName,
  handleChange,
  newNumbers,
  handleNumbers,
}) => {
  console.log("Hello from person form");
  //   const { addContact, newName, handleChange, newNumbers, handleNumbers } = prop;
  return (
    <form onSubmit={addContact}>
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
  );
};

export default PersonForm;
