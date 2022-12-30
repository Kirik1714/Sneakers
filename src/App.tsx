import style from './App.module.scss'
import Headers from './components/Headers/Headers';
import {Routes,Route} from 'react-router-dom'
import MainWebSite from './pages/MainWebSite'
import Home from './pages/Home';
import Basket from './pages/Basket';
import Footer from './components/Footer/Footer';
import FullCard from './components/Main/FullCard';
import React from 'react';




function App() {
  return (
    <div>
      <div className={style.wrapper}>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<MainWebSite />} />
          <Route path="/basket" element={<Basket />} />
          <Route path='/fullCard/:id' element={<FullCard/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
