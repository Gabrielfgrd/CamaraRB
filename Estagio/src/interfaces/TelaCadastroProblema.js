import firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Picker, Button, TextInput} from 'react-native';



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
			
				<ScrollView style={{flex: 1, padding: 10}}>
					<View style={{flex: 2, alignItems: 'center', marginTop: 15, fontSize: 20 }}>
						<Text style={{ fontSize: 20 }}>Tipo de problema:</Text>
						<Picker></Picker>
					</View >
					<View style={{flex: 4, alignItems: 'center', marginTop: 15, fontSize: 20 }}>
						<Text style={{ fontSize: 20 }}>Descreva o problema:</Text>
						<TextInput maxLength={200} multiline={true} style ={{textAlign: 'center', padding: 5, borderTopRightRadius: 10, borderTopLeftRadius: 10, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, borderBottomColor: '#000', borderTopColor: '#000', borderLeftColor: '#000', borderRightColor: '#000', borderBottomWidth: 1, borderTopWidth: 1, borderLeftWidth: 1,
							borderRightWidth: 1, marginTop: 10, fontSize: 20, height: 200, width: 300 }} placeholder='Descreva o Porblema'/>
					</View>
					<View style={{flez: 1, alignItems: 'center',flexDirection: 'row',justifyContent: 'center', marginTop: 20, height: 40}}>
						<Button
						OnPress={ ()=>{this.salvarProblemas(); }}
						title='Confirmar'
						color= 'rgb(43, 83, 142)'
						accessibilityLabel= 'Confirmar'
						/>
					</View>
				</ScrollView>
			

			); 
    }
};
