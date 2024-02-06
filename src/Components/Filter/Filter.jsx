const Filter = ({ handleFilter }) => {
  return (
    <div>
      filter shown with :{" "}
      <input
        type="search"
        placeholder="search contact"
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;
