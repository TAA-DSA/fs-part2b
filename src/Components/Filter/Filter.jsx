const Filter = (prop) => {
  return (
    <div>
      filter shown with :{" "}
      <input
        type="search"
        placeholder="search contact"
        onChange={prop.handleFilter}
      />
    </div>
  );
};

export default Filter;
