import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeCatagery } from '../../redux/Reducers/filterReducer';
import style from './Popup.module.scss'

const categoryItem = [
  { id: 0, name: "популярности", sortProperty:'rating', order: "desc" },
  { id: 1, name: "возрастанию цены",sortProperty:'price', order: "asc" },
  { id: 2, name: "убыванию цены", sortProperty:'price',order: "desc" },
];



const Popup = () => {
  const [isOpenPopup,setIsOpenPopup] = React.useState(false);
  const choosenCategory = useSelector(state => state.filter.choosenCategory)
  const dispatch = useDispatch();
  const changeCategory =(index) =>{
    dispatch(changeCatagery(index))
    setIsOpenPopup(false)
  }
  return (
    <>
      <p>
        Сортировка по{" "}
        <span
          className={style.activType}
          onClick={() => setIsOpenPopup(!isOpenPopup)}
        >
          {choosenCategory.name}
        </span>{" "}
      </p>
      {isOpenPopup && (
        <ul className={style.popupList}>
          {categoryItem.map((item,i) => (
            <li
              key={i}
              className={choosenCategory.id === item.id ? style.activType : style.allCategory}
              onClick={() => changeCategory(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Popup