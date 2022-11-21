import React from 'react'
import style from './Card.module.scss'
import { Link } from 'react-router-dom';
const Card = () => {
  return (
    <div className={style.block}>
      <img width={300}  src="https://bunt.by/wp-content/uploads/2022/08/F804120-350x435.jpg" alt='s'/>
      <p>Nike Air</p>
      <div className={style.block__info}>
        <span className={style.block__info__price}>Цена: 324$</span>
        <Link to="/">В КОРЗИНУ</Link>
      </div>
    </div>
  );
}

export default Card