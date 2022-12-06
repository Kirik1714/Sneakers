import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/Basket/CartItem';
import WindowOrder from '../components/Basket/WindowOrder';
import style from './Basket.module.scss'
const Basket = () => {
  const sneakers =useSelector(state => state.basket.sneakers)
  return (
    <div className={style.block}>
      <div className={style.block_title}>Корзина</div>
      <div className={style.block_conteiner}>
        <div className={style.block_mainContent}>
          {sneakers.length > 0 ? (
            <div>
              {sneakers.map((item) => (
                <CartItem
                  url={item.url}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                />
              ))}
            </div>
          ) : (
            <div>Лох</div>
          )}
        </div>
        {sneakers.length && <div className={style.block_windowOrder}><WindowOrder/></div>}
      </div>
    </div>
  );
}

export default Basket