import React from 'react';
import { Helmet } from 'react-helmet';
import style from './style.sass';

// Login
const Login = () => (
  <div className={style.wrapper}>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <h2 className={style.title}>Login</h2>
  </div>
);
export default Login;
