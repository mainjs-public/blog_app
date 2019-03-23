import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initState = {
	loading: false,
	blogs: []
};

const blogsApp = (state = initState, action) => {
  switch (action.type) {
  	case 'FETCH_BLOG_REQUEST':
  		return {...state, loading: true}
  	case 'FETCH_BLOG_SUCCESS':
  		return {...state, blogs: action.payload, loading: false}
    default:
      return state
  }
}

const store = createStore(blogsApp);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
