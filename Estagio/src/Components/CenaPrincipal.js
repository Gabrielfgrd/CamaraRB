import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, StatusBar, FlatList} from 'react-native';

import BarraNavegacao from './BarraNavegacao';
import axios from 'axios';
import Noticia from './Noticia';


export default class CenaPrincipal extends Component{
  constructor(props) {
    super(props);
    this.state = { noticias: "" };
}
//link, tittle, dc:date
componentWillMount(){
   //requisição HTTP
  var parseString = require('react-native-xml2js').parseString;
  axios.get('http://www.riobranco.ac.leg.br/institucional/noticias/RSS')
  .then(response => { 
    parseString( response.data, function(err, result) {
      const not = result["rdf:RDF"].data

      this.setState({noticias: not})
      console.log(this.state.noticias);
    })
   
})
  .catch(() => {console.log('Erro ao recuperar os dados'); });
}

    render() {
       return (
     <View>
        <StatusBar backgroundColor = '#CCC'
        ANIMATED ={true}/>

        <BarraNavegacao />
<View>
   {/* <Noticia  titulo={this.state.noticias[0].tittle} /> */}
   
</View>
        
      </View>
       // <FlatList>
        // listaNoticias={this.state.listaNoticias}
       //</FlatList> 
      );
    }
}

         
         