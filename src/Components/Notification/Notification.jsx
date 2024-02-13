const Notification = ({ message }) => {
  return <div className="notification">{message}</div>;
};

const ErrorMessage = ({ errorMessage }) => {
  return <div className="error">{errorMessage}</div>;
};

export { Notification, ErrorMessage };
