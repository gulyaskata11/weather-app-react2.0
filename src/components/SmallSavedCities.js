import classes from './SmallSavedCities.module.css'
import useWindowSize from '../hooks/useWindowSize'
import SavedCityNames from './SavedCityNames'
import { Fragment } from 'react'

const SmallSavedCities = ({viewedCities, myCities, setMyCities, handleCityName}) => {
  const { width } = useWindowSize()
 // console.log(viewedCities)

  return (
    <Fragment>
      {width < 780 && (
        <div className={classes.saved}>
          <SavedCityNames title={'Favorite'} cities={myCities} setMyCities={setMyCities} handleCityName={handleCityName} />
          <SavedCityNames title={'Viewed'} cities={viewedCities} handleCityName={handleCityName} />
        </div>
      )}
    </Fragment>
  )
}

export default SmallSavedCities
