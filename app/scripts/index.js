// reset.css
import 'ress/ress.css';
import './style.sass';
// React
import React from 'react';
import { render } from 'react-dom';
// Redux
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
// Store
import configureStore from './store';
// entry point
import App from './components/app';

const history = createHistory();
const store = configureStore(history);
const root = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
