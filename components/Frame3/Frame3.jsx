import React from 'react';
import cls from './Frame3.module.scss';
import Image from 'next/image';
import arrowImg from '../../public/img/arrows.svg';
import newContentFrame3 from './newContentFrame3';

export default function Frame3() {
  return (
    <div className={cls.frame3}>
      <div className={cls.titleFrame3}>
        <div className={cls.title}>Происшествия</div>
        <div className={cls.imgTitle}>
          <Image src={arrowImg} alt="img" />
        </div>
      </div>
      <div className={cls.containerCards}>
        {
                newContentFrame3.map((el) => (
                  <div key={el.id} className={cls.cards}>
                    <div className={cls.imgCard}>
                      <Image src={el.img} alt="img" />
                    </div>
                    <div className={cls.date}>{el.date}</div>
                    <div className={cls.description}>{el.description}</div>
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
