import React from "react";
import s from './Header.module.css';
import Logo from './Logo/Logo'
import Links from './Links/Links'

function Header() {
  return (
    <header className={s.header}>
      <Logo />
      <Links />
    </header>
  );
}

export default Header;
