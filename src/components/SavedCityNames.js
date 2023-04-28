import { useEffect } from 'react'
import { useState } from 'react'
import classes from './SavedCityNames.module.css'

const SavedCityNames = ({ title, cities, setMyCities, handleCityName }) => {
  
  //console.log(cities, title)
  const [favOrViewed, setFavOrViewed] = useState(false)

  useEffect(() => {
    if (title === 'Favorite') {
      setFavOrViewed(true)
    }
  }, [title])

  const deleteCity = (city) => {
    if(cities.includes(city)){
        let withoutCity = cities.filter((elem) => elem !== city)
        setMyCities([...withoutCity])
        localStorage.setItem("myCities", JSON.stringify([...withoutCity]))
    }
}

const grabCityName = (event) => {
  handleCityName(event.target.value)
}


  return (
    <div className={classes['saved-cities']}>
      <div className={classes.tooltip}>
        {title} Cities
        {cities.length > 0 && (
          <div className={classes.bottom}>
            <div className={classes['saved-input']}>
              {cities.map((item) => (
                <div className={classes.city} key={item}>
                  <input type="button" value={item} className={classes.input} onClick={grabCityName} />
                  {favOrViewed && <button onClick={deleteCity.bind(null, item)}>Delete</button>}
                </div>
              ))}
            </div>
            <i></i>
          </div>
        )}
      </div>
    </div>
  )
}

export default SavedCityNames
