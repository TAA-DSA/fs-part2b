const Person = ({ searchKey, deleteContact }) => {
  //console.log("Hello from person component");
  return (
    <div className='flex flex-col m-20'>
      <div className='-m-1.5 overflow-x-auto'>
        <div className='p-1.5 min-w-full inline-block align-middle'>
          <div className='border overflow-hidden dark:border-gray-700'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                  >
                    Name
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                  >
                    Phone Number
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase'
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                {searchKey.map((items, index) => (
                  <tr key={index}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-black-200'>
                      {items.name}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-black-200'>
                      {items.number}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap  text-sm font-medium'>
                      <button
                        id={index}
                        onClick={deleteContact}
                        type='button'
                        className='inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 disabled:opacity-50 disabled:pointer-events-none dark:text-green-500 dark:hover:text-green-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Person
