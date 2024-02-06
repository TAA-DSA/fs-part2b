const Person = ({ searchKey }) => {
  console.log("Hello from person component");
  return (
    <div>
      {searchKey.map((ele, index) => (
        <p key={index}>
          {ele.name} {ele.number}
        </p>
      ))}
    </div>
  );
};

export default Person;
