import React, { useState } from 'react'
import search from '../../assets/img/search.png'
import style from './Search.module.scss'

export const Search = () => {

  return (
    <>
      <img src={search} className={style.search_loop} alt="Фото поиска" />
      <input  placeholder="Поиск ..."  className={style.input} />
    </>
  );
}
