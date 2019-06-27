import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, StatusBar, FlatList } from 'react-native';

import BarraNavegacao from '../Components/BarraNavegacao';
import axios from 'axios';
import Noticia from '../Components/Noticia';
import { Actions } from 'react-native-router-flux';


function organizaNoticias(DicionarioItem) {
  var vetNoticias = [];
  parseString(DicionarioItem, function (err, result) {
    //captura o vetor de noticias e armazena na constatne
     //aux = organizaNoticias(result["rdf:RDF"]["item"]);
     for (var i = 0; i < result["rdf:RDF"]["item"].length; i++) {
       vetNoticias[i] = { titulo: result["rdf:RDF"]["item"][i]["title"][0], link: result["rdf:RDF"]["item"][i]["link"][0], data: result["rdf:RDF"]["item"][i]["link"][0]["dc:date"] }
     }
     return vetNoticias;
  })
}

export default class CenaPrincipal extends Component {
  constructor(props) {
    super(props);
    this.state = { noticias: '' };
  }
  //link, tittle, dc:date
  componentWillMount() {
    //requisição HTTP
    var parseString = require('react-native-xml2js').parseString;
    axios.get('http://www.riobranco.ac.leg.br/institucional/noticias/RSS')
      .then(response => {
        this.setState({noticias: response.data})
      })
      .catch(() => { console.log('Erro ao recuperar os dados'); });
     
  }

  render() {
    return (

      <View>
      </View>
      // <FlatList>
      // listaNoticias={this.state.listaNoticias}
      //</FlatList> 
    );
  }
}



