import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import style from './WindowOrder.module.scss'

const WindowOrder:React.FC = () => {
  
  const totalPrice = useSelector((state:RootState) =>state.basketSlice.totalPrice)
  return (
    <div className={style.block}>
      <div className={style.block_conteiner}>
        <div className={style.amountOrder}>
          <p className={style.text}>СУММА ЗАКАЗОВ</p>
          <p className={style.price}>Итого {totalPrice}</p>
          <button className={style.btn}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default WindowOrder