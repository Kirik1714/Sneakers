import React, { useState } from 'react'
import style from './Card.module.scss'
import { Link } from 'react-router-dom';
const Card = ({url,title,price}) => {
  const [isAddedToBasket,setIsAddedToBasket] = useState(false);

  return (
    <div className={style.block}>
      <img width={300} src={url} alt="s" />
      <p>{title}</p>
      <div className={style.block__info}>
        <div className={style.block__info__price}>
          <span>Цена: </span>
          <b>{price}$</b>
        </div>

        {isAddedToBasket ? (
          <Link to="/" className={style.checkBusket}>ПРОСМОТР КОРЗИНЫ</Link>
        ) : (
          <Link onClick={() => setIsAddedToBasket(true)}>В КОРЗИНУ</Link>
        )}
      </div>
    </div>
  );
}

export default Card