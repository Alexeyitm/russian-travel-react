import React from 'react';
import s from './Link.module.css';

function Link(props) {
  return (
    <a className={s.link} href={props.href} target="/_blank" title={props.title}>{props.text}</a>
  );
}

export default Link;
