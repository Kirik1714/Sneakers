import React, { useState } from 'react'
import Card from '../components/Main/Card';
import style from './MainWebSite.module.scss';
import axios from 'axios';


import { Search } from '../components/Main/Search';
import Popup from '../components/Main/Popup';
import {  useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSneakers } from '../redux/Slices/sneakersSlice';


const MainWebSite = () => {
  const items = useSelector(state =>state.sneakersSlice.items)
  const sexCategory =useSelector(state =>state.filterSlice.sexCategory);
  const dispatch =useDispatch();
  const searchValue = useSelector(state =>state.filterSlice.searchValue);
  const choosenCategory = useSelector(state =>state.filterSlice.choosenCategory)
  
  const sexAllCategory=sexCategory ? `&sex=${sexCategory}`: "&sex=female&sex=male" ;
  const getSneak =async()=>{
    dispatch(fetchSneakers({ searchValue, choosenCategory, sexAllCategory }));
  }

  React.useEffect(() => {
    getSneak()
  try {
  } catch (error) {
    console.log(error)
    alert("Не удалось получить кроссовки" );
  }
  }, [searchValue,choosenCategory,sexCategory]);


  if(!items){
    return 'Загрузка кроссовок';
  }

  return (
    <div className={style.block}>
      <div className={style.title}>Каталог</div>

      <div className={style.block_sort}>
        <div className={style.block_search}>
          <Search />
        </div>
        <div className={style.block_popup}>
          <Popup />
        </div>
      </div>
      <div className={style.block_conteiner}>
        {items.map((obj) => (
          <Link key={obj.id} to={`/FullCard/${obj.id}`} >
            <Card
              title={obj.title}
              price={obj.price}
              color={obj.color}
              sex={obj.sex}
              url={obj.url}
              id={obj.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MainWebSite