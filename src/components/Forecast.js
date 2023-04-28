import classes from './Forecast.module.css'
import Collapse from './Collapse'
import colclasses from './Collapse.module.css'

/* const forecast = [
  [
    { temp: 25, feels_like: 20, wind: 10, humidity: 80, visibility: 10 },
    { temp: 24, feels_like: 20, wind: 10, humidity: 80, visibility: 10 },
    { temp: 23, feels_like: 20, wind: 10, humidity: 80, visibility: 10 },
  ],
  [
    { temp: 22, feels_like: 20, wind: 10, humidity: 80, visibility: 10 },
    { temp: 21, feels_like: 20, wind: 10, humidity: 80, visibility: 10 },
    { temp: 20, feels_like: 20, wind: 10, humidity: 80, visibility: 10 },
  ],
  [
    { temp: 26, feels_like: 20, wind: 10, humidity: 80, visibility: 10 },
    { temp: 27, feels_like: 20, wind: 10, humidity: 80, visibility: 10 },
    { temp: 28, feels_like: 20, wind: 10, humidity: 80, visibility: 10 },
  ],
  [
    { temp: 29, feels_like: 20, wind: 10, humidity: 80, visibility: 10 },
    { temp: 30, feels_like: 20, wind: 10, humidity: 80, visibility: 10 },
    { temp: 31, feels_like: 20, wind: 10, humidity: 80, visibility: 10 },
  ],
] */

const Forecast = ({ forecast }) => {
  const WEEK_DAYS = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  const dayinInAWeek = new Date().getDay()
  const forecastDays = WEEK_DAYS.slice(dayinInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayinInAWeek)
  )

  const todayForecast = forecast.list[0].dt_txt.slice(0, 10)
  const daysForecast = forecast.list
    .filter((elem) => !elem.dt_txt.includes(todayForecast))
    .slice(0, 32)
    .filter(
      (elem) =>
        elem.dt_txt.includes('06:00:00') ||
        elem.dt_txt.includes('12:00:00') ||
        elem.dt_txt.includes('21:00:00')
    )

  let allDays = []
  for (let i = 0; i < daysForecast.length; i += 3) {
    allDays.push(daysForecast.slice(i, i + 3))
  }

  //console.log(allDays)

  return (
    <div className={classes.forecast}>
      <div className={colclasses['forecast-wrapper']}>
        {allDays.map((day, i) => (
          <Collapse key={i} days={day} forecastDays={forecastDays[i]} />
        ))}
      </div>
    </div>
  )
}

export default Forecast
