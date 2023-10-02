import React from 'react';
import cls from './TheHeader.module.scss';
import iconSearch from '../../public/img/search.svg';
import iconUser from '../../public/img/user.svg';
import calendar from '../../public/img/icons_small.svg';
import Image from 'next/image';
import currency from './currency';

export default function TheHeader() {
  return (
    <div className={cls.header}>
      <div className={cls.logo}>ЛОГО</div>
      <div className={cls.conteinerInfo}>
        <div className={cls.newDate}>
          <Image src={calendar} alt="calendar" />
          <div className={cls.textCalendar}>ПН, 4.08.2023</div>
        </div>
        <div className={cls.containerContent}>

          <div className={cls.containerCurrency}>
            {
          currency.map((el) => (
            <div key={el.name} className={cls.currency}>
              <Image src={el.img} alt={el.name} />
              <div className={cls.currencyText}>
                {el.price}
              </div>
            </div>
          ))
        }
          </div>
          <div className={cls.icons}>
            <Image className={cls.imgSearch} src={iconSearch} alt="iconSearch" />
            <Image src={iconUser} alt="user" />
          </div>
        </div>
      </div>

    </div>
  );
}
