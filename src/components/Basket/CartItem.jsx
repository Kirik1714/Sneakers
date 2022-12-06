import React from 'react';
import style from './CartItem.module.scss';
import minusItem from '../../assets/img/minusItem.svg';
import del from '../../assets/img/del.svg';
import addItem from '../../assets/img/addItem.svg';

const CartItem = ({url,title,price,id}) => {
  return (
    <div className={style.block}>
      <div className={style.block_conteiner}>
        <img src={del} className={style.removeBtn} />
        <img className={style.img} src={url} alt="sneak" />
        <div className={style.text}>{title}</div>
        <img src={minusItem} className={style.minusItem} alt="" />
        <p className={style.price}>0</p>
        <img src={addItem} className={style.addItem} alt="" />

        <div className={style.price}>{price}$</div>
      </div>
    </div>
  );
}

export default CartItem