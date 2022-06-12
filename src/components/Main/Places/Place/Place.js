import React from "react";
import s from './Place.module.css';

function Place(props) {
  return (
    <article className={s.place}>
      <h2 className={s.title}>{props.title}</h2>
      <div className={s.website}>
        <p className={s.url}>URL</p>
        <a className={s.link} href={props.href} target="/_blank" title={props.title}>{props.link}</a>
      </div>
      <img className={s.image} src={props.img} alt={props.title} />
      <div className={s.paragraphs}>
        <p className={s.paragraph}>{props.text1}</p>
        <p className={s.paragraph + " " + s.paragraph_margin}>{props.text2}</p>
      </div>
    </article>
  );
}

export default Place;
