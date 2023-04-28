import classes from './Card.module.css'

const Card = ({ weatherData, myCities, setMyCities }) => {
  let icon =
    Object.keys(weatherData).length > 0 ? weatherData?.weather[0].icon : null

  let visibility =
    Object.keys(weatherData).length > 0
      ? weatherData?.visibility.toString()
      : null

  const handleVisibility = () => {
    if (visibility?.length >= 4) {
      return visibility.slice(0, -3) + ' km'
    } else {
      return visibility + ' m'
    }
  }

  const handleMyCities = () => {
    if (!myCities.includes(weatherData.name)) {
      setMyCities([...myCities, weatherData.name])
      localStorage.setItem(
        'myCities',
        JSON.stringify([...myCities, weatherData.name])
      )
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes['first-sec']}>
        <div className={classes['city-name-wrapper']}>
          <div className={classes['city-name']} onClick={handleMyCities}>
            {weatherData.name}
            <span className={classes.tooltiptext}>Add to Favorite</span>
          </div>
          <div className={classes['current-weather']}>
            {weatherData.weather[0].description.toUpperCase()}
          </div>
        </div>
        <div className={classes.icon}>
          {/* <img src={`/icon/${icon}.png`} alt="icon" /> */}
          <img src={require(`../image/${icon}.png`)} alt="icon" />
        </div>
      </div>
      <div className={classes['second-sec']}>
        <div className={classes.temperature}>
          {Math.round(weatherData.main.temp)} °C
        </div>
        <div className={classes['details-info']}>
          <h3>Detailed Information:</h3>
          <div className={classes['feels-like']}>
            Feels like: {Math.round(weatherData.main.feels_like)} °C
          </div>
          <div className={classes.wind}>
            Wind speed: {weatherData.wind.speed} km/h
          </div>
          <div className={classes.humidity}>
            Humidity: {weatherData.main.humidity} g/m³
          </div>
          <div className={classes.visibility}>
            Visibility: {handleVisibility()}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
