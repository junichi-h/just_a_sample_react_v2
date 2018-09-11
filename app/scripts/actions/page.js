import { NOT_FOUND } from 'redux-first-router'

export const HOME = '@@page/HOME';
export const LOGIN = '@@page/LOGIN';

export const goToHome = () => dispatch => {
  dispatch({
    type: HOME
  });
};

export const goToLogin = () => dispatch => {
  dispatch({
    type: LOGIN
  });
};

export const notFound = () => dispatch => {
  dispatch({
    type: NOT_FOUND
  });
};
