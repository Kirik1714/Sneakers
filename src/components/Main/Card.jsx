import React, { useState } from 'react'
import style from './Card.module.scss'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToBasketSneakers } from '../../redux/Reducers/basketReducer';
const Card = ({url,title,price,id}) => {
  const [isAddedToBasket,setIsAddedToBasket] = useState(false);
  
  const dispatch = useDispatch()


  const addToBasket = (url,title,price,id) =>{
    const sniakers = {
      url,
      title,
      price,
      id,

    }
    
    dispatch(addToBasketSneakers(sniakers))
    setIsAddedToBasket(true)
  }

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
          <Link to="/basket" className={style.checkBusket}>ПРОСМОТР КОРЗИНЫ</Link>
        ) : (
          <Link onClick={() => addToBasket(url,title,price,id)}>В КОРЗИНУ</Link>
        )}
      </div>
    </div>
  );
}

export default Card