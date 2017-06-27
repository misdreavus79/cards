//import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import '../scss/style.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { defaultState, levels } from './common/InitialState';

ReactDOM.render(
	<Game defaultState={defaultState} levels={levels} />,
	document.body
);

// <Provider store={createStore(Actions)}>
// 		<Game />
// 	</Provider>