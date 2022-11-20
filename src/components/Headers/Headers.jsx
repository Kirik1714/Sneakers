import React from 'react'
import style from './Headers.module.scss'
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import basket from '../../assets/img/basket.png';
import account from '../../assets/img/account.png';


export const Headers = () => {
  return (
    <header>
      <Link to='/'><img src={logo} className={style.logo}/> </Link>
        
        <nav className={style.nav_Bar}>
          <ul className={style.menu}>
           <Link to ='/main'><li>Каталог</li></Link> 
            <li>Мужские</li>
            <li>Женские</li>
            <li>Доставка и оплата</li>
            <li>Контакты</li>
          </ul>
        </nav>
        <div >
          <ul className={style.infoData}>
            <span> 1</span>
            <li><img src={basket} className={style.basket}/></li>
            <li><img src={account}/></li>
          </ul>
        </div>

      </header>
  )
}
export default Headers
