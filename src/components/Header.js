import classes from './Header.module.css'

const Header = () => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  const dayName = days[today.getDay()];

  return (
    <header className={classes.header}>
      <div>{today.toLocaleDateString("en-GB")} {dayName}</div>
      <div>Current Weather</div>
    </header>
  )
}

export default Header