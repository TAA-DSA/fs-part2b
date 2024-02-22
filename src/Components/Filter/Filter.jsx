const Filter = ({ handleFilter }) => {
  return (
    <div>
      <form className="max-w-md mx-auto">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <input
            onChange={handleFilter}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-black-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 light:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Contact"
          />
        </div>
      </form>
    </div>
  );
};

export default Filter;
