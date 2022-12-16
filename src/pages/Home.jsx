import React from 'react'
import style from './Home.module.scss'
import fon from "../assets/img/1.png"

const Home = () => {
 
   return (
    <div className={style.block}>
     <img src={fon} atl='fon'/>
    </div>
   );
}

export default Home;