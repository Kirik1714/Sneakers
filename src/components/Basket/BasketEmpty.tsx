import React from 'react'
import { Link } from 'react-router-dom'
import style from './BasketEmpty.module.scss';

const BasketEmpty:React.FC =()=>{
    return (
      
        <div className={style.block}>
            <div className={style.text}>
                Ваша Корзина Пуста
            </div>
            <Link to='/main' className={style.back}>Вернуться в магазин</Link>
        </div>
      
    );
}

export default BasketEmpty