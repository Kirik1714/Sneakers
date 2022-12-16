import React from 'react'
import style from './Footer.module.scss'
const Footer = () => {
  return (
    <div className={style.block}>
      <div className={style.block_brands}>
        <p className={style.title}>Бренды</p>
        <div className={style.brands}>
          Nike,adidas,reebok,puma,fila,asics jordan,fila
        </div>
      </div>
      <div className={style.block_contacts}>
        <p className={style.title}>
          Адреса магазина,время работы телефон:
          <br />
        </p>
        <div className={style.addres}>
          г.Минск,пр-т. Независимости,60 с 11:00 до 20:00 без выходных
          +375-11-113-11-19
        </div>
      </div>
      <div className={style.block_auther}>
        <p className={style.title}>
          ИП Шатило Кирилл Сергеевич
          <br />
        </p>
        <div className={style.addres}>
          УНП 1017888 230050 г. Минск-Борисов, а/я 305
        </div>
      </div>
    </div>
  );
}

export default Footer