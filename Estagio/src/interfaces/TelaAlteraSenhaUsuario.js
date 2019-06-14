import React from 'react';
import {ScrollView, View , TextInput, TouchableOpacity,Text} from 'react-native';
import { connect } from 'react-redux';
import {styles, colors} from '../Components/layout';

export default class TelaAlteraDadosUsuario extends React.Component {
	render(){
		return(
    <ScrollView style={{ padding: 10}}>
        <View style={{ justifyContent: 'center', marginTop:15}}>
			<View style={{ justifyContent: 'center', alignItems: 'center', marginTop:20}}>
				<Text style={styles.textoPadrao} >Senha Atual</Text>
				<TextInput style={styles.textInput} editable = {false} />
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center', marginTop:20}}>
				<Text style={styles.textoPadrao}  >Nova Senha</Text>
				<TextInput style={styles.textInput} editable = {false} placeholder = "Pelo menos 6 caracteres"/>
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center', marginTop:20}}>
				<Text style={styles.textoPadrao} >Confirmar a senha</Text>
				<TextInput style={styles.textInput} editable = {false} placeholder = "Pelo menos 6 Caracteres"/>
			</View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 40}}>
            <TouchableOpacity
                style={styles.botao}
                onPress={false}>
                <Text style={styles.textoBotao}> Confirmar </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>

		);	
	}
	
}
