import { createStore } from 'redux';
import { allReducers } from './Reducers';
import { enableBatching } from "redux-batched-actions";

const Store = createStore(enableBatching(allReducers));

export default Store;