import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import search from '../../assets/img/search.png'
import { setSearchValue } from '../../redux/Slices/filterSlice'
import style from './Search.module.scss'

export const Search = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(state =>state.filterSlice.searchValue)
  const changeSearchValue=(event)=>{
    dispatch(setSearchValue(event.target.value))
  }
  
  return (
    <>
      <img src={search} className={style.search_loop} alt="Фото поиска" />
      <input  placeholder="Поиск ..."  value={searchValue} onChange={changeSearchValue} className={style.input} />
    </>
  );
}
