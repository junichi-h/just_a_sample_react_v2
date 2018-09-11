/* @flow */
import React from 'react';
import { NavLink } from 'redux-first-router-link';
import style from './style.sass';

type Props = {
  to: string,
  label: string
};

const NavigationList = (props: Props) => (
  <li className={style.navList}>
    <NavLink to={props.to}>{props.label}</NavLink>
  </li>
);
export default NavigationList;
