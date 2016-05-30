import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory} from 'react-router';

import RequireAuth from './components/require_authentication'

import App from './components/app';
import Resources from './components/resources'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="resources" component={RequireAuth(Resources)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
