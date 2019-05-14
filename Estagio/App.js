import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

//importar o componente barra navegação
import Leis from './src/interfaces/Leis';
import CenaPrincipal from './src/Components/CenaPrincipal';
import TelaCadastroProblema from './src/interfaces/TelaCadastroProblema';

export default class Estagio extends Component{
  render() {
    return (
      
      <TelaCadastroProblema/>
     
    );
  }
}


