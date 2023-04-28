import { Fragment } from 'react'
import classes from './FavCity.module.css'

const FavCity = ({ city, myCities, setMyCities, handleCityName }) => {
  //console.log(myCities)

  const deleteCity = () => {
    if (myCities.includes(city)) {
      let withoutCity = myCities.filter((elem) => elem !== city)
      setMyCities([...withoutCity])
      localStorage.setItem('myCities', JSON.stringify([...withoutCity]))
    }
  }

  const grabCityName = (event) => {
    handleCityName(event.target.innerText)
  }

  return (
    <Fragment>
      <div className={classes['fav-city']}>
        <p onClick={grabCityName}>{city}</p>
        <button onClick={deleteCity}>Delete</button>
      </div>
      <hr />
    </Fragment>
  )
}

export default FavCity
