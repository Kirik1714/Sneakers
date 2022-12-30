import React from 'react'
import style from './Headers.module.scss'
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import basket from '../../assets/img/basket.png';
import account from '../../assets/img/account.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeSexCategory } from '../../redux/Slices/filterSlice';


export const Headers:React.FC = () => {
 //@ts-ignore
  const sneakers = useSelector(state => state.basketSlice.sneakers)
  const dispatch=useDispatch();
 const totalCount = sneakers.reduce((sum:number,obj:any)=>sum+obj.count,0)

  
  return (
    <header>
      <Link to='/'><img src={logo} className={style.logo} alt='logo'/> </Link>
        
        <nav className={style.nav_Bar}>
          <ul className={style.menu}>
           <Link to ='/main'><li onClick={()=>dispatch(changeSexCategory(''))}>Каталог</li></Link> 
            <Link to=''><li onClick={()=>dispatch(changeSexCategory('male'))}>Мужские</li></Link>
            <Link to=''><li onClick={()=>dispatch(changeSexCategory('female'))}>Женские</li></Link>
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
