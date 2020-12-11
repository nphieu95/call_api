import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from 'redux';
import appReducers from './reducers/index';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  appReducers,
  composeEnhancer(applyMiddleware(thunk))
)
ReactDOM.render(
  <Provider store={store}>
    <App>

    </App>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
