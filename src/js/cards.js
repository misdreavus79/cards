//import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import '../scss/style.scss';
import { Provider } from 'react-redux';
import Store from './common/Store';

ReactDOM.render(
	<Game store={Store} />,
	document.body
);

// <Provider store={createStore(Actions)}>
// 		<Game />
// 	</Provider>