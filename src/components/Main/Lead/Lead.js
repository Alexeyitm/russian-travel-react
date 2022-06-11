import React from "react";
import s from './Lead.module.css';
import Way from "../../../image/Lead/lead-polka.jpg";

function Lead() {
  return (
    <section className={s.lead}>
      <h1 className={s.title}>Путешествия по России</h1>
      <p className={s.subtitle}>Настоящая страна не в выпусках новостей, а здесь.</p>
      <img className={s.img} src={Way} alt="Маршрут"></img>
      <span class={s.caption}>ваша полка — верхняя</span>
    </section>
  );
}

export default Lead;
