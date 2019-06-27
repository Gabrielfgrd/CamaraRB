import {combineReducers} from 'redux';
import UsuarioReducer from './UsuarioReducer'
import ProblemaReducer from './ProblemaReducer'

export default combineReducers({
    ProblemaReducer,
    UsuarioReducer
});