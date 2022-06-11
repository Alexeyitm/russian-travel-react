import React from "react";
import s from './Link.module.css';

function Link(props) {
  return (
    <li>
      <a className={s.link} href="/#">{props.text}</a>
    </li>
  );
}

export default Link;
