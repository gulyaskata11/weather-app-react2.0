import classes from './SavedCitiesWrapper.module.css'

const SavedCitiesWrapper = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>{props.title} cities</h3>
        <div>{props.children}</div>
      </div>
    </div>
  )
}

export default SavedCitiesWrapper
