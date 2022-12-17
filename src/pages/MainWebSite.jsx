import React, { useState } from 'react'
import Card from '../components/Main/Card';
import style from './MainWebSite.module.scss';
import axios from 'axios';


import { Search } from '../components/Main/Search';
import Popup from '../components/Main/Popup';
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const MainWebSite = () => {
  const [item,setItem] = useState([]);
  const choosenCategory = useSelector(state =>state.filterSlice.choosenCategory)
  const searchValue = useSelector(state =>state.filterSlice.searchValue);
  const sexCategory =useSelector(state =>state.filterSlice.sexCategory);
  console.log(sexCategory);
  const sexAllCategory=sexCategory ? `&sex=${sexCategory}`: "&sex=female&sex=male" ;

  React.useEffect(() => {
    const fetchData = async() =>{
       const {data} = await axios.get(`http://localhost:3001/items?q=${searchValue}&_sort=${choosenCategory.sortProperty}&_order=${choosenCategory.order}${sexAllCategory}`)
      return setItem(data);
    }
    fetchData()
  }, [searchValue,choosenCategory,sexCategory]);


  return (
    <div className={style.block}>
      <div className={style.title}>Каталог</div>

      <div className={style.block_sort}>
        <div className={style.block_search}>
          <Search />
        </div>
        <div className={style.block_popup}>
          <Popup />
        </div>
      </div>
      <div className={style.block_conteiner}>
        {item.map((obj) => (
          <Link key={obj.id} to={`/FullCard/${obj.id}`} >
            <Card
              title={obj.title}
              price={obj.price}
              color={obj.color}
              sex={obj.sex}
              url={obj.url}
              id={obj.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MainWebSite