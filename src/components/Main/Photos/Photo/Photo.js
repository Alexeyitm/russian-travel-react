import React from 'react';
import s from './Photo.module.css';

function Photo(props) {
  return (
    <img className={s.photo} src={props.src} alt={props.alt}></img>
  );
}

export default Photo;
