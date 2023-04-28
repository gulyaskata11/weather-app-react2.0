import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes['made-by']}>
        Made by:{' '}
        <a href="https://www.linkedin.com/in/katalin-r%C3%A1cz-guly%C3%A1s-416100201/">
          Katalin Rácz-Gulyás
        </a>
      </div>
      <div>
        <a href="https://github.com/gulyaskata11/weather-app-react2.0">
          Github page
        </a>
      </div>
    </footer>
  )
}

export default Footer
