import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, StatusBar, FlatList} from 'react-native';

import BarraNavegacao from './BarraNavegacao';
import axios from 'axios';
import Noticia from './Noticia';


export default class CenaPrincipal extends Component{
    

//componentWillMount(){
  // requisição HTTP
  //var parseString = require('react-native-xml2js').parseString;
  //axios.get('http://www.riobranco.ac.leg.br/institucional/noticias/RSS')
  //.then(response => { this.setState({ listaNoticias:  parseString( response.data, function (err, result) {
    //    console.log(result);
    //})
  //});
   
//})
  //.catch(() => {console.log('Erro ao recuperar os dados'); });
//}

    render() {
       return (
     <View>
        <StatusBar backgroundColor = '#CCC'
        ANIMATED ={true}/>

        <BarraNavegacao />

        
      </View>
       // <FlatList>
        // listaNoticias={this.state.listaNoticias}
       //</FlatList> 
      );
    }
}

         
         