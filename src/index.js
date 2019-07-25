import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer.js';
import App from './App';
import './App.css';

import { addComment } from './action.js';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
    	<App />
  	</Provider>, 
  	document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
store.dispatch(addComment('trzeci komentarz'));
store.dispatch(addComment('czwarty komentarz'));