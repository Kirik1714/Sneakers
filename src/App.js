import './App.module.css';
import logo from '../src/assets/img/logo.png';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import MainWebSite from './pages/MainWebSite';

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mainSite' element={<MainWebSite/>}/>
      </Routes>
    </div>
  );
}

export default App;
