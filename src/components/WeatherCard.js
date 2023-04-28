import classes from './WeatherCard.module.css'
import useWindowSize from '../hooks/useWindowSize'
import SavedCitiesWrapper from './SavedCitiesWrapper'
import FavCity from './FavCity'
import ViewedCity from './ViewedCity'
import LoadingMask from './LoadingMask'
import ErrorModal from './ErrorModal'
import Card from './Card'

const WeatherCard = ({
  weatherData,
  myCities,
  setMyCities,
  viewedCities,
  handleCityName,
  loading,
  error,
  handleError,
}) => {
  const { width } = useWindowSize()
  //console.log(weatherData)

  return (
    <div className={classes['weather-card']}>
      {width >= 780 && (
        <SavedCitiesWrapper title="Favorite">
          {myCities.map((city, i) => (
            <FavCity
              key={i}
              city={city}
              myCities={myCities}
              setMyCities={setMyCities}
              handleCityName={handleCityName}
            />
          ))}
        </SavedCitiesWrapper>
      )}
      {Object.keys(weatherData).length > 0 && !loading && (
        <Card
          weatherData={weatherData}
          myCities={myCities}
          setMyCities={setMyCities}
        />
      )}
      {error && <ErrorModal handleError={handleError} />}
      {loading && <LoadingMask />}
      {width >= 780 && (
        <SavedCitiesWrapper title="Viewed">
          {viewedCities.map((city, i) => (
            <ViewedCity key={i} city={city} handleCityName={handleCityName} />
          ))}
        </SavedCitiesWrapper>
      )}
    </div>
  )
}

export default WeatherCard
