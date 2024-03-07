interface ErrorNotificationProps {
  message: string | null
}

const ErrorNotification = ( { message } : ErrorNotificationProps) => {
  if (!message) {
    return null
  }
  return (
    <div style={{ color: 'red'}}>
      {message}
    </div>
  )
}
export default ErrorNotification