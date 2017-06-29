import { createStore } from 'redux';
import { allReducers } from './Reducers';

const Store = createStore(allReducers);

export default Store;