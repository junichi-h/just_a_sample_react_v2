import React from 'react';
import { Helmet } from 'react-helmet';
import style from './style.sass';

const Home = () => (
  <div className={style.wrapper}>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h2 className={style.title}>Home</h2>
  </div>
);
export default Home;
