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
				<Text style={styles.textoPadrao} >Nome</Text>
				<TextInput style={styles.textInput} editable = {false} placeholder = "Nome"/>
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center', marginTop:20}}>
				<Text style={styles.textoPadrao}  >E-mail</Text>
				<TextInput style={styles.textInput} editable = {false} placeholder = "E-mail"/>
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center', marginTop:20}}>
				<Text style={styles.textoPadrao} >Endereço</Text>
				<TextInput style={styles.textInput} editable = {false} placeholder = "Endereço"/>
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center', marginTop:20}}>
				<Text style={styles.textoPadrao} >CEP</Text>
				<TextInput style={styles.textInput} editable = {false} placeholder = "CEP"/>
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center', marginTop:20}}>
				<Text style={styles.textoPadrao} >Senha</Text>
				<TextInput style={styles.textInput} editable = {false} placeholder = "Senha"/>
			</View>
			<View style={{ justifyContent: 'center', alignItems: 'center', marginTop:20}}>
				<Text style={styles.textoPadrao} >Confirmação de Senha</Text>
				<TextInput style={styles.textInput} editable = {false} placeholder = "Confirmação de Senha"/>
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
