import firebase from 'firebase';
import React from 'react';
import { Text, View, ScrollView, Picker, TouchableOpacity, TextInput} from 'react-native';
import {styles, colors} from '../Components/layout';

	export default class TelaCadastroProblema extends React.Component {
	
	componentWillMount(){
		
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

	salvarProblemas(){
		var database = firebase.database();
		database.ref("cadastroProblema").set("100");
	}


	render(){
		return(
			
				<ScrollView style={{flex: 1, padding: 10, marginTop:25}}>
					<View style={{flex: 2, alignItems: 'center', marginTop: 15, fontSize: 20 }}>
						<Text style={styles.textoPadrao}>Tipo de problema:</Text>
						<Picker></Picker>
					</View >
					<View style={{flex: 3, alignItems: 'center', marginTop: 15, fontSize: 20 }}>
						<Text style={styles.textoPadrao}>Descreva o problema:</Text>
						<TextInput maxLength={200} multiline={true} style={styles.textArea} placeholder='Descreva o Porblema'/>
					</View>
					<View style={{flez: 1, alignItems: 'center',justifyContent: 'center', marginTop: 30}}>
						<TouchableOpacity
						OnPress={ ()=>{this.salvarProblemas(); }}
						style={styles.botao}>
						<Text style={styles.textoBotao}> Cadastrar </Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			

			); 
    }
};
