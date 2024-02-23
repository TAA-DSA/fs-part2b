const PersonForm = ({
  addContact,
  newName,
  handleChange,
  newNumbers,
  handleNumbers,
}) => {
  //console.log("Hello from person form");
  //   const { addContact, newName, handleChange, newNumbers, handleNumbers } = prop;
  return (
    <form className="max-w-md mx-auto" onSubmit={addContact}>
      <div className="py-5">
        <h2
          className="text-center
         text-green-600"
        >
          Add a new contact
        </h2>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input
          type="name"
          value={newName}
          onChange={handleChange}
          className="block 
            py-2.5 px-0 w-full 
            text-sm text-gray-900 
            bg-transparent border-0 
            border-b-2 border-gray-300 
            appearance-none dark:text-black
           dark:border-gray-600
           dark:focus:border-blue-500 
             focus:outline-none focus:ring-0
           focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          className="peer-focus:font-medium 
        absolute 
        text-sm
       text-gray-500
       dark:text-gray-400 
       duration-300 
       transform -translate-y-6 
       scale-75 top-3 -z-10 
       origin-[0] peer-focus:start-0 
       rtl:peer-focus:translate-x-1/4 
       rtl:peer-focus:left-auto
       peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 
       peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0 
       peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Name
        </label>
      </div>
      <div
        className="relative 
      z-0 
      w-full 
      mb-5 
      group"
      >
        <input
          type="phone number"
          value={newNumbers}
          onChange={handleNumbers}
          className="block 
          py-2.5 
          px-0 w-full 
          text-sm
         text-gray-900 bg-transparent 
          border-0 border-b-2
         border-gray-300 
          appearance-none dark:text-black
         dark:border-gray-600
         dark:focus:border-blue-500 
          focus:outline-none focus:ring-0
         focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          className="peer-focus:font-medium 
        absolute 
        text-sm
       text-grey-500
       dark:text-grey-400 
       duration-300 
       transform -translate-y-6 
       scale-75 top-3 -z-10 
       origin-[0] peer-focus:start-0 
       rtl:peer-focus:translate-x-1/4
       peer-focus:text-blue-600
       peer-focus:dark:text-blue-500 
       peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0 
       peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Phone Number
        </label>
      </div>

      <button
        type="submit"
        className="text-white
         bg-green-700
         hover:bg-green-800 
         focus:ring-4 focus:outline-none
         focus:ring-blue-300 font-medium 
         rounded-lg text-sm w-full 
         sm:w-auto px-5 py-2.5 text-center
          dark:bg-green-600"
      >
        Save Contact
      </button>
    </form>
  );
};

export default PersonForm;
