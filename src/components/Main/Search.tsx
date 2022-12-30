import debounce from 'lodash.debounce'
import React, { useState } from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import search from '../../assets/img/search.png'
import { setSearchValue } from '../../redux/Slices/filterSlice'
import style from './Search.module.scss'

export const Search:React.FC = () => {
  const [value,setValue]=useState();
  const dispatch = useDispatch();

  const updateSearchValue = useCallback(
    debounce((str:string)=>{
      dispatch(setSearchValue(str))
    },1000),[]
  )

  const changeSearchValue=(event:any)=>{
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }
  
  return (
    <>
      <img src={search} className={style.search_loop} alt="Фото поиска" />
      <input  placeholder="Поиск ..."  value={value} onChange={changeSearchValue} className={style.input} />
    </>
  );
}
