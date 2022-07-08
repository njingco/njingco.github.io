import { combineReducers } from 'redux'
import navReducer from './nav'

const allReducers = combineReducers({
    nav: navReducer,
});

export default allReducers;