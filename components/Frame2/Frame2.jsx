import React from 'react';
import cls from './Frame2.module.scss';
import Image from 'next/image';
import arrowImg from '../../public/img/arrows.svg';
import readNews from './readNews';

export default function Frame2() {
  return (
    <div className={cls.frame2}>
      <div className={cls.frame2Title}>
        <div className={cls.title}>Читайте также</div>
        <div className={cls.img}><Image src={arrowImg} alt="arrow" /></div>
      </div>
      <div className={cls.containerContent}>
        {
        readNews.map((el) => (
          <div key={el.id} className={cls.containerCard}>
            <div className={cls.cardTitle}>
              <div className={cls.category}>{el.category}</div>
              <div className={cls.date}>{el.date}</div>
            </div>
            <div className={cls.cardDescripion}>{el.description}</div>
            <div className={cls.containerSmal}>
              <div className={cls.small}>
                <div className={cls.imgSmall}>
                  <Image src={el.smalLove} alt="img" />
                </div>
                <div className={cls.quantity}>
                  {el.quantity}
                </div>
              </div>
              <div className={cls.small}>
                <div className={cls.imgSmall}>
                  <Image src={el.smallGnev} alt="alt" />
                </div>
                <div className={cls.quantity}>
                  {el.quantity}
                </div>
              </div>
              <div className={cls.small}>
                <div className={cls.imgSmall}>
                  <Image src={el.smallNegativ} alt="img" />
                </div>
                <div className={cls.quantity}>
                  {el.quantity}
                </div>
              </div>
              <div className={cls.small}>
                <div className={cls.imgSmall}>
                  <Image src={el.comment} alt="img" />
                </div>
                <div className={cls.quantity}>
                  {el.quantityComment}
                </div>
              </div>
              <div className={cls.small}>
                <div className={cls.imgSmall}>
                  <Image src={el.post} alt="img" />
                </div>
                <div className={cls.quantity}>
                  {el.quantityPost}
                </div>
              </div>
            </div>
          </div>
        ))
    }
      </div>

    </div>
  );
}
