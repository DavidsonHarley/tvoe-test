import React from 'react';
import cls from './Frame1.module.scss';
import { newContent, warning } from './content';
import Image from 'next/image';

export default function Frame1() {
  return (
    <div className={cls.content1}>
      <div className={cls.lenta}>
        <div className={cls.title}>Лента</div>
        {
                newContent.map((el) => (
                  <div key={el.id} className={cls.news}>
                    <div className={cls.imageDescription}>
                      <Image src={el.img} alt="img" />
                      <div className={cls.description}>
                        {el.description}
                      </div>
                    </div>
                    <div className={cls.timeCategory}>
                      <div className={cls.time}>{el.time}</div>
                      <div className={cls.category}>
                        <button className={cls.categoryButton} type="submit">{el.category}</button>
                      </div>
                    </div>
                  </div>
                ))
            }
        <div className={cls.warning}>
          <marquee direction="right" scrollamount="10">
            <div className={cls.marquee}>
              {
                warning.map((el) => (
                  <div key={el.id} className={cls.containerWarning}>
                    <div className={cls.img}>
                      <Image src={el.img} alt="img" />
                    </div>
                    <div className={cls.warningText}>{el.text}</div>
                  </div>

                ))
              }
            </div>
          </marquee>
        </div>
      </div>
      <div className={cls.advertisement}>
        <div className={cls.containerTitle}>
          <div className={cls.linkText}>Ссылка на сайт</div>
          <div className={cls.advertisementText}>РЕКЛАМА</div>
        </div>
        <div className={cls.imgAdvertisement}>
          <div className={cls.imgAdvertisementText}>Реклама</div>
        </div>
        <div className={cls.advertisementDescription}>Текст длинного рекламного объявления</div>
      </div>
    </div>
  );
}
