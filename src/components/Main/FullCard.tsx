import axios from "axios";
import React from "react";
import style from './FullCard.module.scss'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasketSneakers, CartItem } from "../../redux/Slices/basketSlice";


const FullCard:React.FC =()=>{
    const {id} = useParams();
    const [pizza,setPizza]=useState<{
      url:string,
      color:string,
      title:string,
      sex:string,
      price:number,
      id:number,
    }>();
    const [isAdded,setIsAdded] = useState(false)
    const dispatch=useDispatch();
    
    React.useEffect(()=>{
        try {
            const fetchData=async()=>{
                const {data} = await axios.get(`http://localhost:3001/items/${id}`)
                setPizza(data)
            }
            fetchData()
            
        } catch (error) {
            alert("Не удалось открыть пиццу((((((((")
        }
    },[id])
    const addToBasket=(url:string, title:string, price:number, id:number)=>{
        const sneakers:CartItem = {
            url,
            title,
            price,
            id,
            count:1,
          }
          dispatch(addToBasketSneakers(sneakers))
          setIsAdded(true)
    }
    if(!pizza){
        return <>"Загрузка ......"</>;
    }

    return (
      <>
        <div className={style.block}>
          <img src={pizza.url} className={style.block_foto} alt="pizza" />
          <div className={style.block_description}>
            <p>{pizza.title}</p>
            <p>Цвет: {pizza.color}</p>
            <p>Sex : {pizza.sex}</p>
            <p>Цена: {pizza.price}$</p>
            {isAdded?"Добавлено":<Link to=""
              className={style.btn}
              onClick={() => addToBasket(pizza.url, pizza.title, pizza.price, pizza.id)}
            >
              Добавит в корзину
            </Link>}
            
          </div>
        </div>
      </>
    );
}
export default FullCard