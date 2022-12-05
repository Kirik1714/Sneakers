import React from 'react'
import style from './WindowOrder.module.scss'
const WindowOrder = () => {
    let a =2;
  return (
    <div className={style.block}>
      <div className={style.block_conteiner}>
        <div className={style.amountOrder}>
          <p className={style.text}>СУММА ЗАКАЗОВ</p>
          <p className={style.price}>Итого {a}</p>
          <button className={style.btn}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default WindowOrder