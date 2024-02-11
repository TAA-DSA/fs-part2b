const Person = ({ searchKey, deleteContact }) => {
  //console.log("Hello from person component");
  return (
    <div>
      {searchKey.map((ele, index) => (
        <p key={index}>
          {ele.name} {ele.number}{" "}
          <button id={index} onClick={deleteContact}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Person;
