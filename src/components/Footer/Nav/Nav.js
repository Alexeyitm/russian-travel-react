import React from 'react';
import s from './Nav.module.css';
import Link from './Link/Link'

function Nav() {
  return (
    <nav className={s.nav}>
      <Link href="https://yandex.ru/maps" title="Яндекс.Карты" text="Карты"/>
      <Link href="https://yandex.ru/pogoda" title="Яндекс.Погода" text="Погода"/>
      <Link href="https://rasp.yandex.ru" title="Яндекс.Расписания" text="Расписание"/>
      <Link href="https://calendar.yandex.ru" title="Яндекс.Календарь" text="Календарь"/>
      <Link href="https://travel.yandex.ru" title="Яндекс.Путешествия" text="Путешествия"/>
    </nav>
  );
}

export default Nav;
