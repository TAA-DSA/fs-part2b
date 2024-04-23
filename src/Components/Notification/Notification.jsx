const Notification = ({ message }) => {
  return (
    <div className='bg-slate-50 text-green-500 text-2xl border-2 border-gray-400 rounded p-4 mb-4 '>
      {message}
    </div>
  )
}

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div
      className='bg-orange-100 mx-2 mb-2 border-l-4 border-orange-500 text-orange-700 p-4'
      role='alert'
    >
      <strong className='font-bold'>{errorMessage}</strong>
    </div>
  )
}

export { Notification, ErrorMessage }
