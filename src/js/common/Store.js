import { createStore, applyMiddleware } from 'redux';
import { allReducers } from './Reducers';
import thunk from 'redux-thunk';

const Store = createStore(
	allReducers,
	applyMiddleware(thunk)
);

export default Store;