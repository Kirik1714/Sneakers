import React, { useState } from 'react'
import style from './Card.module.scss'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  {addToBasketSneakers}  from '../../redux/Slices/basketSlice';

type Card ={
  url:string;
  title:string;
  price:number;
  id:number;
  color:string;
  sex:string;
}

const Card:React.FC<Card> = ({url,title,price,id,color,sex}) => {
  const [isAddedToBasket,setIsAddedToBasket] = useState(false);
  const dispatch = useDispatch()
  const addToBasket = (url:string,title:string,price:number,id:number) =>{
    const sneakers = {
      url,
      title,
      price,
      id,
      count:1,

    }
    dispatch(addToBasketSneakers(sneakers))
    setIsAddedToBasket(true);
    
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
          <Link to="/basket" className={style.checkBusket}>
            ПРОСМОТР КОРЗИНЫ
          </Link>
        ) : (
          <Link to='' onClick={() => addToBasket(url, title, price, id)}>
            В КОРЗИНУ
          </Link>
        )}
      </div>
    </div>
  );
}

export default Card