import React from "react";
import s from './Links.module.css';
import Link from './Link/Link';

function Links() {
  return (
    <ul className={s.links}>
      <Link text="Ru"/>
      <Link text="En"/>
    </ul>
  );
}

export default Links;
