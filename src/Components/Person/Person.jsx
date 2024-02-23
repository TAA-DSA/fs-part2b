const Person = ({ searchKey, deleteContact }) => {
  //console.log("Hello from person component");
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Number</th>
        </tr>
      </thead>
      <tbody>
        {searchKey.map((element, index) => (
          <tr key={index}>
            <td>{element.name}</td>
            <td>{element.number}</td>
            <td>
              <button
                id={index}
                onClick={deleteContact}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Person;

// {searchKey.map((ele, index) => (
//   <p className="contact" key={index}>
//     {ele.name} {ele.number}{" "}
//     <button id={index} onClick={deleteContact}>
//       Delete
//     </button>
//   </p>
// ))}
