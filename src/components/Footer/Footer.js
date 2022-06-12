import React from 'react';
import s from './Footer.module.css';
import Nav from './Nav/Nav';

function Footer() {
  return (
    <footer className={s.footer}>
      <Nav />
      <p className={s.copyright}>© 2022. Алексей Пономарев</p>
    </footer>
  );
}

export default Footer;
