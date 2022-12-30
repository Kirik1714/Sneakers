import React from 'react';
import style from './CartItem.module.scss';
import minusItem from '../../assets/img/minusItem.svg';
import del from '../../assets/img/del.svg';
import addItem from '../../assets/img/addItem.svg';
import { useDispatch } from 'react-redux';
import { addItemCount,minusItemCount,removeItems} from '../../redux/Slices/basketSlice';

type CartItemInBasket={
  url:string;
  title:string;
  price:number;
  id:number;
  count:number;
}

const CartItem:React.FC<CartItemInBasket> = ({url,title,price,id,count}) => {
  const dispatch = useDispatch();
  return (
    <div className={style.block}>
      <div className={style.block_conteiner}>
        <img src={del} onClick={()=>dispatch(removeItems(id))} className={style.removeBtn} />
        <img className={style.img}  src={url} alt="sneak" />
        <div className={style.text}>{title}</div>
        <img src={minusItem}   className={style.minusItem}  onClick={count>1?()=>dispatch(minusItemCount(id)):style.disabled} alt="" />
        <p className={style.price}>{count}</p>
        <img src={addItem} className={style.addItem} onClick={()=>dispatch(addItemCount(id))} alt="" />
        <div className={style.price}>{price}$</div>
      </div>
    </div>
  );
}

export default CartItem