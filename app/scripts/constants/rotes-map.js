// import { redirect, NOT_FOUND } from 'redux-first-router';

const routesMap = {
  HOME: '/',
  LOGIN: '/login',
  LIST: {
    path: '/list/:category'
  }
};
export default routesMap;

/*
,
    thunk: async (dispatch, getState) => {
      const {
        location: {
          payload: { category: cat }
        }
      } = getState();
      console.log(cat);
    }
 */
