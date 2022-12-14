import React from 'react'
import style from './Headers.module.scss'
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import basket from '../../assets/img/basket.png';
import account from '../../assets/img/account.png';
import { useSelector } from 'react-redux';


export const Headers = () => {
  const sneakers = useSelector(state => state.basketSlice.sneakers)

 const totalCount = sneakers.reduce((sum,obj)=>sum+obj.count,0)

  
  return (
    <header>
      <Link to='/'><img src={logo} className={style.logo} alt='logo'/> </Link>
        
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
            <span> {totalCount}</span>
            <li><Link to='/basket'><img src={basket} className={style.basket} alt='b'/></Link></li>
            <li><img src={account} alt='acc'/></li>
          </ul>
        </div>

      </header>
  )
}
export default Headers
