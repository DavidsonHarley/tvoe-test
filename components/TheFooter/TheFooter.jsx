import React from 'react';
import cls from './TheFooter.module.scss';
import Image from 'next/image';
import telegram from '../../public/img/telegram.svg';

export default function TheFooter() {
  return (
    <div className={cls.footer}>
      <div className={cls.containerLogo}>
        <div className={cls.logo}>ЛОГО</div>
        <div className={cls.logoText}>© НАЗВАНИЕ 2023. Все права защищены</div>
      </div>
      <div className={cls.containerInfo}>
        <div className={cls.content1}>
          <div className={cls.content1Text}>Контакты</div>
          <div className={cls.content1Text}>Редакция</div>
        </div>
        <div className={cls.content1}>
          <div className={cls.content1Text}>Политика конфиденциальности</div>
          <div className={cls.content1Text}>Условия использования</div>
          <div className={cls.content1Text}>Реклама</div>
        </div>
      </div>
      <div className={cls.content2}>
        <div className={cls.text}>
          По любым вопросам   пишите на
          <a className={cls.a} href="/"> privet@yandex.com</a>
        </div>
        <div className={cls.telegram}>
          <Image className={cls.telegramImg} src={telegram} alt="telegram" />
          <div className={cls.text}>Подписаться</div>
        </div>
      </div>
      <div className={cls.containerButton}>
        <button className={cls.button} type="submit">Предложить новость</button>
      </div>
    </div>
  );
}
