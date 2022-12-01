import style from './App.module.scss'
import Headers from './components/Headers/Headers';
import {Routes,Route} from 'react-router-dom'
import MainWebSite from './pages/MainWebSite'
import Home from './pages/Home';
import Basket from './pages/Basket';
import {useState } from 'react';



// const SearchContext = createContext('')
function App() {
  return (
    <div className={style.wrapper}>
      <Headers/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/main' element={<MainWebSite/>}/>
        <Route path='/basket' element={<Basket/>}/>
      </Routes>
    

    </div>

  );
}

export default App;
