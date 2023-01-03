import React from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCatagery } from '../../redux/Slices/filterSlice';
import { RootState } from '../../redux/store';
import style from './Popup.module.scss'

type CategoryItem={
  id:number;
  name:string;
  sortProperty:string;
  order:string;
}


type PopupClick =MouseEvent & {
  path:Node[];
};
const categoryItem:CategoryItem[] = [
  { id: 0, name: "популярности", sortProperty:'rating', order: "desc" },
  { id: 1, name: "возрастанию цены",sortProperty:'price', order: "asc" },
  { id: 2, name: "убыванию цены", sortProperty:'price',order: "desc" },
];
 


const Popup:React.FC = () => {
  const [isOpenPopup,setIsOpenPopup] = React.useState(false);
  const choosenCategory = useSelector((state:RootState) => state.filterSlice.choosenCategory);
  const sortRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const changeCategory =(index:CategoryItem) =>{
    dispatch(changeCatagery(index))
    setIsOpenPopup(false)
  }

  React.useEffect(()=>{
    const handleClickOutsite =(event:MouseEvent) =>{
      const _event = event as PopupClick;
      if(sortRef.current && !_event.path.includes(sortRef.current)){
        setIsOpenPopup(false);
      }

    }
    document.body.addEventListener('click',handleClickOutsite)
    return () =>{
      document.body.removeEventListener('click',handleClickOutsite);
      console.log("Удалена");
    }
  },[])
  return (
    <div  ref ={sortRef} className="block_popup" >
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
    </div>
  );
}

export default Popup