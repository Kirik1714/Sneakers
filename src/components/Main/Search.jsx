import React, { useState } from 'react'
import search from '../../assets/img/search.png'
import style from './Search.module.scss'

export const Search = ({searchValue,setSearchValue}) => {
  const changeSearchValue=(event)=>{
    setSearchValue(event.target.value)
  }
  
  return (
    <>
      <img src={search} className={style.search_loop} alt="Фото поиска" />
      <input  placeholder="Поиск ..."  value={searchValue} onChange={changeSearchValue} className={style.input} />
    </>
  );
}
