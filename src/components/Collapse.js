import { Fragment, useState } from 'react'
import useWindowSize from '../hooks/useWindowSize'
import classes from './Collapse.module.css'
import WeatherDetails from './WeatherDetails'

const Collapse = ({ forecastDays, days }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { width } = useWindowSize()

  const onToggle = (event) => {
    event.preventDefault()
    setIsOpen(!isOpen)
  }

  //console.log(days[0].dt_txt.slice(11, 13))

  return (
    <Fragment>
      <div className={isOpen && width < 780 ? classes.backdrop : null} />
      <details open={isOpen} onClick={onToggle} className={classes.collapse}>
        <summary className={classes.dayname}>
          <div className={classes['summary-wrapper']}>
            {forecastDays}
            <div className={isOpen ? classes.minus : classes.plus}></div>
          </div>
        </summary>
        <div className={classes['forecast-details-wrapper']}>
          {days.map((item) => (
            <WeatherDetails
              key={item.dt}
              temp={item.main.temp}
              feels_like={item.main.feels_like}
              wind={item.wind.speed}
              humidity={item.main.humidity}
              visibility={item.visibility}
              curDate={item.dt_txt}
            />
          ))}
        </div>
      </details>
    </Fragment>
  )
}

export default Collapse
