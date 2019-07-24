import React, { Component } from 'react';
import {  Text, View,ScrollView, TouchableOpacity } from 'react-native';

import axios from 'axios';
import Noticia from '../Components/Noticia';
import { Actions } from 'react-native-router-flux';

function organizaNoticias(lista_noticias) {
  const noticias = lista_noticias;
  const noticiasOrganizadas = [];
  noticias.map(noticia => {
    let temp_noticia = {};
    noticia.children.map(children => { 
      if (children.name == 'title') { temp_noticia.title = children.value }
      if (children.name == 'link') { temp_noticia.link = children.value }
      if (children.name == 'dc:date') { temp_noticia.date = children.value } 
    });
    if (temp_noticia) {
        noticiasOrganizadas.push(temp_noticia);
      }
  });
  console.log(noticiasOrganizadas)
  this.setState({ noticias: noticiasOrganizadas})
}

export default class CenaPrincipal extends Component {

  constructor() {
    super()
    this.state = {
      noticias: []
    }
  }

  componentWillMount() {
    //requisição HTTP
    var parseString = require('react-native-xml2js').parseString;
    var XMLParser = require('react-xml-parser');

    axios.get('http://www.riobranco.ac.leg.br/institucional/noticias/RSS')
      .then(response => {
        var xml = new XMLParser().parseFromString(response.data);
        
        organizaNoticias( xml["children"]);
        console.log(xml["children"])
      })
      // .catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  // <Text>Noticias</Text>
  // {this.state.noticias.map( noticia =>{
  //   var aux=0;
  //   if(aux!=0){
  //     return (
  //       <Noticia titulo={noticia['item']["children"]['title']} data={noticia["children"][6]}/>
  //     );
  //   }
  //   aux++;
  // })}
  render() {
    return (
      <View>
        {/* {this.state.noticias.map( function(item) { console.log(item.title) } )} */}
        {/* <ScrollView>
          {this.state.noticias.map(item => (<Noticia key={item.ementa} materia={item} />))}
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 30, flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity
              OnPress={() => { Actions.tipo_materia(item.page) }}
              style={styles.botao}>
              <Text style={styles.textoBotao}> Carregar Mais </Text>
            </TouchableOpacity>

          </View>
        </ScrollView> */}
      </View>
    )
  }

}



// export default class CenaPrincipal extends Component {
//   render() {
//     return (
//       <WebView
//       automaticallyAdjustContentInsets={true}
//         source={{uri: "https://www.riobranco.ac.leg.br/institucional/noticias"}}
//         scalesPageToFit={true}
//       />
//     );
//   }
// }

// function organizaNoticias(DicionarioItem) {
//   var vetNoticias = [];
//   parseString(DicionarioItem, function (err, result) {
//     //captura o vetor de noticias e armazena na constatne
//      //aux = organizaNoticias(result["rdf:RDF"]["item"]);
//      for (var i = 0; i < result["rdf:RDF"]["item"].length; i++) {
//        vetNoticias[i] = { titulo: result["rdf:RDF"]["item"][i]["title"][0], link: result["rdf:RDF"]["item"][i]["link"][0], data: result["rdf:RDF"]["item"][i]["link"][0]["dc:date"] }
//      }
//      return vetNoticias;
//   })
// }

// export default class CenaPrincipal extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { noticias: '' };
//   }
//   //link, tittle, dc:date
//   componentWillMount() {
//     //requisição HTTP
//     var parseString = require('react-native-xml2js').parseString;
//     axios.get('http://www.riobranco.ac.leg.br/institucional/noticias/RSS')
//       .then(response => {
//         this.setState({noticias: response.data})
//       })
//       .catch(() => { console.log('Erro ao recuperar os dados'); });

//   }
// }

// //   render() {
// //     return (

// //       <View>
// //       </View>
// //       // <FlatList>
// //       // listaNoticias={this.state.listaNoticias}
// //       //</FlatList> 
// //     );
// //   }
// // }



