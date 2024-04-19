const Login = ({ loginSubmit }) => {
  return (
    <form className='max-w-sm mx-auto'>
      <div className='mb-5'>
        <input
          type='username'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Username'
        />
      </div>
      <div className='mb-5'>
        <input
          type='password'
          id='password'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Password'
        />
      </div>

      <button
        type='submit'
        className='flex align-middle gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 disabled:opacity-50 disabled:pointer-events-none dark:text-green-500 dark:hover:text-green-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
        onSubmit={loginSubmit}
      >
        Login
      </button>
    </form>
  )
}

export default Login
