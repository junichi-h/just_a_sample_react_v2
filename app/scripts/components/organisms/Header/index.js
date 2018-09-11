import React from 'react';

import Logo from '../../atoms/Logo/index';
import Navigation from '../../molecules/navigation';
import style from './style.sass';

const Header = () => (
  <header className={style.wrapper}>
    <Logo />
    <Navigation />
  </header>
);

export default Header;
