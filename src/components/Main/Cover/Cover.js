import React from 'react';
import s from './Cover.module.css';

function Cover() {
  return (
    <section className={s.cover}>
      <a className={s.overlay} href="https://stampsy.com/na-elektrichkakh-do-baikala" target="/_blank">
        <h2 className={s.title}>До Байкала «на&nbsp;собаках»</h2>
        <p className={s.subtitle}>По мотивам учебной темы о Транссибе — путешествие от столицы до Байкала на электричках.</p>
      </a>
    </section>
  );
}

export default Cover;
