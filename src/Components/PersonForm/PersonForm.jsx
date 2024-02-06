const PersonForm = (prop) => {
  console.log("Hello from person form");
  return (
    <form onSubmit={prop.addContact}>
      <div>
        name: <input value={prop.newName} onChange={prop.handleChange} />
      </div>
      <div>
        number: <input value={prop.newNumbers} onChange={prop.handleNumbers} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
