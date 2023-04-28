import { Fragment } from 'react'
import classes from './ViewedCity.module.css'

const ViewedCity = ({city, handleCityName}) => {

  const grabCityName = (event) => {
    handleCityName(event.target.innerText)
  }

  return (
    <Fragment>
      <div className={classes['viewed-city']}>
        <p onClick={grabCityName}>{city}</p>
      </div>
      <hr />
    </Fragment>
  )
}

export default ViewedCity