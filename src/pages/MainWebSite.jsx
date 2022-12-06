import React, { useState } from 'react'
import Card from '../components/Main/Card';
import style from './MainWebSite.module.scss';
import axios from 'axios';


import { Search } from '../components/Main/Search';
import Popup from '../components/Main/Popup';
import {  useSelector } from 'react-redux';



const MainWebSite = () => {
  const [item,setItem] = useState([]);
  const choosenCategory = useSelector(state =>state.filter.choosenCategory)
  const [searchValue,setSearchValue]= useState('');

  React.useEffect(() => {
    const fetchData = async() =>{
       const {data} = await axios.get(`http://localhost:3001/items?q=${searchValue}&_sort=${choosenCategory.sortProperty}&_order=${choosenCategory.order}`)
      return setItem(data);
    }
    fetchData()
  }, [searchValue,choosenCategory]);


  return (
    <div className={style.block}>
      <div className={style.title}>Каталог</div>
      
     <div className={style.block_sort}>
      <div className={style.block_search}>
        <Search  searchValue={searchValue}  setSearchValue={setSearchValue} />
      </div>
      <div className={style.block_popup}>
        <Popup />
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
            id={obj.id}
          />
        ))}
      </div>
    </div>
  );
}

export default MainWebSite