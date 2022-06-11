import React from 'react';
import s from './Item.module.css';

function Item(props) {
  return (
    <li>
      <h3 class={s.subtitle}>{props.text}</h3>
      <span class={s.number}> {props.number}</span>
    </li>
  );
}

export default Item;
