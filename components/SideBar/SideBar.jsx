import React from 'react';
import cls from './SideBar.module.scss';
import category from './category';
import Image from 'next/image';
import lentaImg from '../../public/img/lenta.svg';

export default function SideBar() {
  return (
    <div className={cls.sideBar}>
      <div className={cls.lenta}>
        <Image src={lentaImg} alt="lenta" />
        <div className={cls.lentaText}>Лента</div>
      </div>
      {
        category.map((el) => (
          <div key={el.id} className={cls.categoryText}>
            <div className={cls.img}>
              <Image src={el.img} alt={el.name} />
            </div>
            <div className={cls.name}>{el.name}</div>
          </div>
        ))
      }
    </div>
  );
}
