import React from 'react'
import { useSelector } from 'react-redux'
import BasketEmpty from '../components/Basket/BasketEmpty';
import CartItem from '../components/Basket/CartItem';
import WindowOrder from '../components/Basket/WindowOrder';
import style from './Basket.module.scss'
const Basket:React.FC = () => {
  //@ts-ignore
  const sneakers =useSelector(state => state.basketSlice.sneakers)
  return (
    <div className={style.block}>
      <div className={style.block_title}>Корзина</div>
      <div className={style.block_conteiner}>
        <div className={style.block_mainContent}>
          {sneakers.length > 0 ? (
            <div>
              {sneakers.map((item:any) => (
                <CartItem
                  url={item.url}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  count={item.count}
                />
              ))}
            </div>
          ) : (
            //@ts-ignore
            <BasketEmpty className={style.basketEmpty}/>
          )}
        </div>
        {sneakers.length ? <div className={style.block_windowOrder}><WindowOrder/></div>:''}
      </div>
    </div>
  );
}

export default Basket