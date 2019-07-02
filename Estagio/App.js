import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase/app';
import '@firebase/auth';
import ReduxThunk from 'redux-thunk';
import Routes from './router';
import {Provider} from 'react-redux'
import reducers from './reducers'

  import Lista_Materia from './src/interfaces/Lista_Materia';
  import GaleriaDeVideos from './src/interfaces/GaleriaDeVideos';

  const criaTiposDeProblema = () => {
    var titulos = ["Estrutura Viária", "Iluminação Pública", "Rede de Distribuição de Água", "Rede Elétrica", "Rede de Esgoto"]
    var descricoes = ["Problemas relacionados as condições das vias públicas. Ex: buracos, inexistência de asfalto.",
      "Problemas relacionados as condições ou inexistência de iluminação pública. Ex: poste sem lâmpada.",
      "Problemas relacionados as condições ou inexistencia da rede de distribuição de água. Ex: falta de água, cano vazando.",
      "Problemas relacionados as condições ou inexistência da rede elétrica. Ex: fio quebrado, poste caido.",
      "Problemas relacionados as condições ou inexistencia da rede de esgoto. Ex: esgoto á céu aberto, boeiro vazando."];
    var visibilidades = [2, 3, 3, 2, 2];
    //Definindo tamnho dos vetores de bytes
    for (let i = 0; i < 5; i++) {
      var novoProblema = firebase.database().ref('tiposDeProblemas/').push()
      novoProblema.set({
        id: novoProblema.key,
        titulo: titulos[i],
        descricao: descricoes[i],
        tempoVisibilidade: visibilidades[i]
      })
    }
  }

export default class Estagio extends Component{
  constructor(props) {
    super(props)
    var firebaseConfig = {
      apiKey: "AIzaSyCy7su1rlTXnMv536mpZ4TA3Xi7rKu9aNI",
      authDomain: "camararb-f6e02.firebaseapp.com",
      databaseURL: "https://camararb-f6e02.firebaseio.com",
      projectId: "camararb-f6e02",
      storageBucket: "camararb-f6e02.appspot.com",
      messagingSenderId: "923387632369",
      appId: "1:923387632369:web:2c5f88377c7a9d6d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
	}
  render() {
    return (
  
      // <Lista_Materia/>
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
			  	<Routes />
			  </Provider>
     
    );
  }
}


