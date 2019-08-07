import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList,StyleSheet, SafeAreaView,Linking,Button} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import axios from 'axios';
import Noticia from '../Components/Noticia';
import { Actions } from 'react-native-router-flux';



function organizaNoticias(lista_noticias, ref) {
  var noticias = lista_noticias;
  var noticiasOrganizadas = [];
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
  //  console.log(noticiasOrganizadas)
  ref.setState({ noticias:  noticiasOrganizadas });
  // console.log(ref.state.noticias)
  
  

}

export default class CenaPrincipal extends React.Component {

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
        organizaNoticias(xml["children"], this);
        // console.log(xml["children"])
      })
    //  .catch(() => { console.log('Erro ao recuperar os dados'); });
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
      <SafeAreaView>
      <FlatList
        data ={this.state.noticias}
        keyExtractor = {item => item.title}
        renderItem = {({ item})  =>  {
          if(item.title == "Notícias"){
            return (
              <View style={styles.body} >
                <Text style={{ color: 'rgb(43, 83, 142)', fontSize: 40 }}>{item.title}</Text>
              </View>
            );
          }else{
            return (
              <View style={styles.item} >
                <TouchableOpacity 
                onPress = {() => Linking . openURL ( item.link )}>
                  <Text >{item.title}</Text>
                  <Text> {item.date} </Text>
                </TouchableOpacity>
              </View>
            );
          }
        }}
      />
    </SafeAreaView>
     
    );
  }

} 
{/* <ScrollView>
        {this.state.noticias.map(item =>  (<Noticia key={item.title} news={item} />))}
        {this.state.noticias.map(item =>  (<Text key={item.title}>{item.link}</Text>))}
        {this.state.noticias.map(item =>  (<Text key={item.title}>{item.date}</Text>))}


      </ScrollView> */}
{/* <FlatList
        data={this.state.noticias}
        renderItem={
          ({item}) => 
          <Text>
            {item.title }
          </Text> */}
// }
///>

{/* {this.state.noticias.map( function(item) { console.log(item) } )} */ }


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

const styles = StyleSheet.create({
  // container:{
  //     flex:1
  // },
  body: {
      flex:1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      justifyContent: 'flex-start',
      padding: 30
  },
  item: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 30
  }
  // vids:{
  //     paddingBottom:30,
  //     width:320,
  //     alignItems: 'center',
  //     backgroundColor: '#fff',
  //     justifyContent: 'center',
  //     borderBottomWidth: 0.6,
  //     borderColor: '#aaa'

  // },
  // vidItems:{
  //     flexDirection: 'row',
  //     alignItems: 'center',
  //     justifyContent: 'space-around',
  //     padding: 10
  // },
  // vidText:{
  //     padding: 20,
  //     color: '#000'
  // },
  })

