import React from 'react';
import s from './List.module.css';
import Item from './Item/Item';

function List() {
  return (
    <ul className={s.list}>
      <Item text="Часовых поясов" number="11"/>
      <Item text="Объектов природного наследия ЮНЕСКО" number="12"/>
      <Item text="Объектов культурного наследия ЮНЕСКО" number="16"/>
      <Item text="Природных заповедников" number="105"/>
      <Item text="Аэропортов" number="241"/>
    </ul>
  );
}

export default List;
