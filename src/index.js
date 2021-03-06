import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware}from 'redux'
import reducer from './Reducers'
import logActivity from './Middleware/api'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(logActivity))

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
