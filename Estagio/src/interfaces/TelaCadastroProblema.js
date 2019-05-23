import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Picker, Button} from 'react-native';



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
			
				<ScrollView >
					<View style={{ alignItems: 'center', marginTop: 15, fontSize: 20 }}>
						<Text style={{ fontSize: 20 }}>Tipo de problema:</Text>
						<Picker></Picker>
					</View>
					<View style={{ alignItems: 'center', marginTop: 15, fontSize: 20 }}>
						<Text style={{ fontSize: 20 }}>Descreva o problema:</Text>
					</View>
					<View style={{ alignItems: 'center',flexDirection: 'row',justifyContent: 'center', marginTop: 15}}>
						<Button
						style={{marginRight: 45}}
						OnPress={ ()=>{this.salvarProblemas(); }}
						title='Confirmar'
						color= 'rgb(43, 83, 142)'
						accessibilityLabel= 'Confirmar'
						/>
						<Button
						OnPress={ ()=>{ }}
						title='Cancelar'
						color= 'rgb(43, 83, 142)'
						accessibilityLabel= 'Cancelar'
						/>
					</View>
				</ScrollView>
			

			); 
    }
};
