import {combineReducers} from 'redux';
import UsuarioReducer from './UsuarioReducer'
import ProblemaReducer from './ProblemaReducer'
import YouTubeReducer from './YouTubeReducer'

export default combineReducers({
    ProblemaReducer,
    UsuarioReducer, 
    YouTubeReducer
});