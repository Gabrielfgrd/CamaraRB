import authReducer from './authReducer'
import problemReducer from './problemReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    problem: problemReducer
});

export default rootReducer