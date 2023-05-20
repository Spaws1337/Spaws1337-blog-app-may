import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>Политика конфиденциальности</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptates velit fuga perspiciatis itaque iste, aliquid dignissimos voluptate modi,
            tempore assumenda adipisci dolor hic atque quod consequuntur cupiditate. Quasi, nobis veritatis!
          </p>
        </div>
        <div className={classes.col}>
          <h2>Контакты</h2>
          <span>Телефон +123 456 789</span>
          <span>GitHub: <a className={classes.link} href='https://github.com/Spaws1337/'>Spaws1337</a></span>
        </div>
        <div className={classes.col}>
          <h2>Локация</h2>
          <span>Страна: Россия</span>
          <span>Город: Нижний Новгород</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer