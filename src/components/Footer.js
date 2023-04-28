import classes from './Footer.module.css'

const Footer = () => {

  return (
    <footer className={classes.footer}>
      <div className={classes['made-by']}>Made by: Katalin Rácz-Gulyás</div>
      <div><a href="https://github.com/gulyaskata11/weather-app-react2.0">Github page</a></div>
    </footer>
  )
}

export default Footer