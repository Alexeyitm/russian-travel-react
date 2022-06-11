import React from 'react';
import s from './Photos.module.css';
import Photo from './Photo/Photo'
import train from '../../../image/Photo-grid/photo-grid-train.jpg'
import tulsi from '../../../image/Photo-grid/photo-grid-atharva-tulsi.jpg'
import tuman from '../../../image/Photo-grid/photo-grid-tuman.jpg'
import sochi from '../../../image/Photo-grid/photo-grid-sochi.jpg'
import arisa from '../../../image/Photo-grid/photo-grid-arisa.jpg'
import baikal from '../../../image/Photo-grid/photo-grid-baikal.jpg'
import elbrus from '../../../image/Photo-grid/photo-grid-elbrus.jpg'
import znak from '../../../image/Photo-grid/photo-grid-kondratiev.jpg'
import kamchatka1 from '../../../image/Photo-grid/photo-grid-kamchatka-1.jpg'
import kamchatka2 from '../../../image/Photo-grid/photo-grid-kamchatka-2.jpg'
import utes from '../../../image/Photo-grid/photo-grid-baikal-2.jpg'
import tuman2 from '../../../image/Photo-grid/photo-grid-ergaki.jpg'

function Photos() {
  return (
    <section className={s.photos}>
      <Photo src={train} alt="Поезд"/>
      <Photo src={tulsi} alt="Вершина"/>
      <Photo src={tuman} alt="Туман"/>
      <Photo src={arisa} alt="Лед"/>
      <Photo src={sochi} alt="Сочи"/>
      <Photo src={baikal} alt="Байкал"/>
      <Photo src={elbrus} alt="Эльбрус"/>
      <Photo src={znak} alt="Знак"/>
      <Photo src={kamchatka1} alt="Камчатка"/>
      <Photo src={kamchatka2} alt="Камчатка"/>
      <Photo src={utes} alt="Утес"/>
      <Photo src={tuman2} alt="Туман"/>
    </section>
  );
}

export default Photos;
