import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import Async from './middlewares/async'

const ReduxDevTools = window.devToolsExtension ? window.devToolsExtension() : f => f
const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, ReduxDevTools)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
