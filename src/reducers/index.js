import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { basket } from './basket';
import { goods } from './goods';

export default combineReducers({
    routing: routerReducer,
    basket,
    goods
})