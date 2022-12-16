import style from './App.module.scss'
import Headers from './components/Headers/Headers';
import {Routes,Route} from 'react-router-dom'
import MainWebSite from './pages/MainWebSite'
import Home from './pages/Home';
import Basket from './pages/Basket';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <>
      <div className={style.wrapper}>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<MainWebSite />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>

      </div>
        <Footer/>
    </>
  );
}

export default App;
