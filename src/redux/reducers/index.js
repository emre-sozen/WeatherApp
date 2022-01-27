import { combineReducers } from 'redux'
import weatherReducer from './weatherReducer';
import byLocationReducer from './byLocationReducer';

const rootReducer = combineReducers({
    weatherStore: weatherReducer,
    weatherbyLocation: byLocationReducer,
})

export default rootReducer