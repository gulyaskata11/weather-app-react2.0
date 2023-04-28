import '../App.css'
import { useState, useEffect } from 'react'
import InputAndBtn from './InputAndBtn'
import WeatherCard from './WeatherCard'
import classes from './Collapse.module.css'
import Forecast from './Forecast'
import SmallSavedCities from './SmallSavedCities'

const Main = () => {
  const [weatherData, setWeatherData] = useState({})
  const [forecast, setForecast] = useState({})
  const [cityName, setCityName] = useState('')
  const [viewedCities, setViewedCities] = useState([])
  const [myCities, setMyCities] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const apiKey = process.env.REACT_APP_APIKEY 
  let fetchUrl = `${process.env.REACT_APP_URL}/weather?q=${cityName}&appid=${apiKey}&lang=en&units=metric`
  let fetchUrlForcast = `${process.env.REACT_APP_URL}/forecast?q=${cityName}&appid=${apiKey}&lang=en&units=metric`

  useEffect(() => {
    if (cityName !== '') {
      setLoading(true)
      fetch(fetchUrl)
        .then((res) => res.json())
        .then((data) => {
          if (data.cod !== 200) {
           // console.log(data)
            setError(true)
            setLoading(false)          
          } else {
            setWeatherData(data)
           // console.log(data)
          }
        })

      fetch(fetchUrlForcast)
        .then((res) => res.json())
        .then((data) => {
          if (data.cod !== '200') {
           // console.log(data)
            return
          } else {
            setForecast(data)
           // console.log(data)
            setLoading(false)
          }
        })
    }
  }, [cityName, fetchUrl, fetchUrlForcast])
 
  const handleCityName = (inputValue) => {
    setCityName(inputValue)
  }

  useEffect(() => {
    if (Object.keys(weatherData).length > 0) {
      if (!viewedCities.includes(weatherData.name)) {
        setViewedCities([...viewedCities, weatherData.name])
      }
    }
  }, [weatherData, viewedCities])

  useEffect(() => {
    const favoritesItem = JSON.parse(localStorage.getItem('myCities'))
    if (favoritesItem) {
      setMyCities(favoritesItem)
    }
  }, [])

  const handleError = () => {
    setError(false)
  }
console.log(process.env)
  return (
    <main className={classes.main}>
      <SmallSavedCities
        viewedCities={viewedCities}
        myCities={myCities}
        setMyCities={setMyCities}
        handleCityName={handleCityName}
      />
      <InputAndBtn handleCityName={handleCityName} />
      <WeatherCard
        weatherData={Object.keys(weatherData).length > 0 ? weatherData : {}}
        myCities={myCities}
        setMyCities={setMyCities}
        handleCityName={handleCityName}
        viewedCities={viewedCities}
        loading={loading}
        error={error}
        handleError={handleError}
      />
      {Object.keys(forecast).length > 0 && !loading && <Forecast forecast={forecast} />}
    </main>
  )
}

export default Main
