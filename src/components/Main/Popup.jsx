import React from 'react'
import style from './Popup.module.scss'
const categoryItem =['популярности','возрастанию','убыванию']

const Popup = () => {
  const [isOpenPopup,setIsOpenPopup] = React.useState(false);
  const [choosenCategory,setChoosenCategory] =React.useState(0);
  const changeCategory =(index) =>{
    setChoosenCategory(index);
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
          {categoryItem[choosenCategory]}
        </span>{" "}
      </p>
      {isOpenPopup && (
        <ul className={style.popupList}>
          {categoryItem.map((item, index) => (
            <li
              className={choosenCategory == index ? style.activType : ""}
              onClick={() => changeCategory(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Popup