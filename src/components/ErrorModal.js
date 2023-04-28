import classes from './ErrorModal.module.css'

const ErrorModal = ({ handleError }) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={handleError} />
      <div className={classes.card}>
        <header>
          <h2>Oops, something went wrong!</h2>
        </header>
        <div className={classes.content}>
          <p>Please pay attention to the correct spelling of the city's name!</p>
        </div>
        <footer>
          <button onClick={handleError}>Close</button>
        </footer>
      </div>
    </div>
  )
}

export default ErrorModal
