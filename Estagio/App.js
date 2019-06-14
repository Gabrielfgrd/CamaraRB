import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase/app';
import '@firebase/auth';
import ReduxThunk from 'redux-thunk';
import Routes from './router';
import {Provider} from 'react-redux'
import reducers from './reducers'

//importar o componente barra navegação
// import TelaALteraDadosUsuario from './src/interfaces/TelaAlteraDadosUsuario';


export default class Estagio extends Component{
  render() {
    return (
    
  // <TelaALteraDadosUsuario/>
       <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
			 	<Routes />
			 </Provider>
     
    );
  }
}


