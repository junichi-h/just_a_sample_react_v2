import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { connectRoutes } from 'redux-first-router';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { createLogger } from 'redux-logger';
import * as reducers from '../reducers';
import options from './options';
import routesMap from '../constants/rotes-map';

/* const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators })
  : compose; */

const logger = createLogger({
  level: 'info',
  collapsed: true
});

export default history => {
  const { reducer, middleware, enhancer } = connectRoutes(
    history,
    routesMap,
    options
  );
  const rootReducer = combineReducers({
    ...reducers,
    location: reducer
  });
  let middlewares = applyMiddleware(middleware, thunk, promiseMiddleware);
  if (process.env.NODE_ENV === 'development') {
    middlewares = applyMiddleware(middleware, logger, thunk, promiseMiddleware);
  }

  const enhancers = compose(
    enhancer,
    middlewares
  );
  return createStore(rootReducer, enhancers);
};
