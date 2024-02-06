const Person = (prop) => {
  console.log("Hello from person component");
  return (
    <div>
      {prop.searchKey.map((ele, index) => (
        <p key={index}>
          {ele.name} {ele.number}
        </p>
      ))}
    </div>
  );
};

export default Person;
