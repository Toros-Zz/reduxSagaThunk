import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from './App';
import { rootReducer } from './redux/rootReducer';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk, 
    saga,
  ),
));

saga.run(sagaWatcher);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
