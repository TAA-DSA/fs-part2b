const Notification = ({ message }) => {
  return (
    <div className='bg-slate-50 text-green-500 text-2xl border-2 border-gray-400 rounded p-4 mb-4 '>
      {message}
    </div>
  )
}

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className='bg-red-300  text-red-500 text-2xl bore-2 border-gray rounded  p-4 mb-4'>
      {errorMessage}
    </div>
  )
}

export { Notification, ErrorMessage }
