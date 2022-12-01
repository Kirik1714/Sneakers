import React, { useState } from 'react'
import Card from '../components/Main/Card';
import style from './MainWebSite.module.scss';
import axios from 'axios';


import { Search } from '../components/Main/Search';
import Popup from '../components/Main/Popup';



const MainWebSite = () => {
  const [item,setItem] = useState([]);
  const [searchValue,setSearchValue]= useState('');

 
  React.useEffect(() => {
    const fetchData = async() =>{
       const {data} = await axios.get(`http://localhost:3001/items?q=${searchValue}`)
      return setItem(data);
    }
    fetchData()
  }, [searchValue]);

  console.log(searchValue);

  return (
    <div className={style.block}>
      <div className={style.title}>Каталог</div>
      
     <div className={style.block_sort}>
      <div className={style.block_search}>
        <Search  searchValue={searchValue}  setSearchValue={setSearchValue} />
      </div>
      <div className={style.block_popup}>
        <Popup/>
      </div>
     </div>
      <div className={style.block_conteiner}>
        {item.map((obj) => (
          <Card
            key={obj.id}
            title={obj.title}
            price={obj.price}
            color={obj.color}
            sex={obj.sex}
            url={obj.url}
            onClick={() => console.log(obj)}
          />
        ))}
      </div>
    </div>
  );
}

export default MainWebSite