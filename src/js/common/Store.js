import { createStore, applyMiddleware } from 'redux';
import { allReducers } from './Reducers';
import { enableBatching } from "redux-batched-actions";
import thunk from 'redux-thunk';

const Store = createStore(
	enableBatching(allReducers),
	applyMiddleware(thunk)
);

export default Store;