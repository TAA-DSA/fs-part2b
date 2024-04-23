const Login = ({
  loginSubmit,
  handleUserName,
  handlePassword,
  userName,
  password,
}) => {
  return (
    <form className='max-w-sm mx-auto' onSubmit={loginSubmit}>
      <div className='mb-5'>
        <input
          type='text'
          value={userName}
          onChange={handleUserName}
          placeholder='Username'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500'
        />
      </div>
      <div className='mb-5'>
        <input
          type='password'
          value={password}
          onChange={handlePassword}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Password'
        />
      </div>
      <div className='grid gap-4 grid-cols-2 pb-4'>
        <button
          type='submit'
          className='px-6 pb-2 pt-2.5 gap-x-2 text-sm font-semibold rounded-lg border border-solid border-green-600 text-green-600 hover:text-green-800 disabled:opacity-50 disabled:pointer-events-none dark:text-green-500 dark:hover:text-green-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-green-800'
        >
          Login
        </button>
      </div>
    </form>
  )
}

export default Login
