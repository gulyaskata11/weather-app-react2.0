import classes from './InputAndBtn.module.css'
import { useRef } from 'react';

const InputAndBtn = ({handleCityName}) => {

  const inputRef = useRef(null);

  const handleInputKeyDown = event => {
    if (event.key === 'Enter') {
     event.preventDefault()
      handleCityName(inputRef.current.value)
      inputRef.current.value = ""
    }
  }

  const handleInputClick = () => {
    handleCityName(inputRef.current.value)
    inputRef.current.value = ""
  }

  return (
    <div className={classes["saved-and-input"]}>
      <div className={classes['input-div']}>
        <input type="text" ref={inputRef} onKeyDown={handleInputKeyDown} />
        <button onClick={handleInputClick}>Search</button>
      </div>
    </div>
  )
}

export default InputAndBtn
