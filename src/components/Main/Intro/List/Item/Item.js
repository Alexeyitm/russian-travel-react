import React from 'react';
import s from './Item.module.css';

function Item(props) {
  return (
    <li>
      <h3 className={s.subtitle}>{props.text}</h3>
      <span className={s.number}> {props.number}</span>
    </li>
  );
}

export default Item;
