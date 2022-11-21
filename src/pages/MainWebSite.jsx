import React from 'react'
import Card from '../components/Headers/Card';
import style from './MainWebSite.module.scss'


const MainWebSite = () => {
  return (
    <div className={style.block}>
      <div className={style.title}>Каталог</div>
      <div className={style.block_conteiner}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
             
      </div>
    </div>
  );
}

export default MainWebSite