import React from 'react'
import logo from '../assets/img/logo.png';
import {Link} from 'react-router-dom'

const Home = () => {
   return (
     <>
       <Link to="/">
         <div className="">
           <img src={logo} />
         </div>
       </Link>
       <Link to="/mainSite">Основной сайт</Link>
       <Link to="/mainSite">Основной сайт</Link>

     </>
   );
}

export default Home;