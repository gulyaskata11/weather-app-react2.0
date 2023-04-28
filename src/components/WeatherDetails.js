import classes from './WeatherDetails.module.css'

const WeatherDetails = ({
  temp,
  feels_like,
  wind,
  humidity,
  visibility,
  curDate,
}) => {
  let vis = visibility.toString()

  const handleVisibility = () => {
    if (vis.length >= 4) {
      return vis.slice(0, -3) + ' km'
    } else {
      return vis + ' m'
    }
  }

  const whichTimeOfDay = () => {
    const timeOfDay = curDate.slice(11, 13).toString()
    let resOfTimeOfDay

    switch (timeOfDay) {
      case '06':
        resOfTimeOfDay = 'morning'
        break
      case '12':
        resOfTimeOfDay = 'noon'
        break
      case '21':
        resOfTimeOfDay = 'evening'
        break
      default:
        console.log('time of day')
    }
    return resOfTimeOfDay
  }

  
  return (
    <div className={classes['second-sec']}>
      <div className={classes.temperature}>
        <span className={classes['time-of-day']}>{whichTimeOfDay()}</span>
        {Math.round(temp)} °C
      </div>
      <div className={classes['details-info']}>
        <h3>Detailed Information:</h3>
        <div className={classes['feels-like']}>
          Feels like: {Math.round(feels_like)} °C
        </div>
        <div className={classes.wind}>Wind speed: {wind} km/h</div>
        <div className={classes.humidity}>Humidity: {humidity} g/m³</div>
        <div className={classes.visibility}>
          Visibility: {handleVisibility()}
        </div>
      </div>
    </div>
  )
}

export default WeatherDetails
