import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
//import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';


export default class MenuInterno extends React.Component {
	render() {
		return (
            <ScrollView style={{ backgroundColor: '#rgb(43, 83, 142)' }}>
               <View style={{ paddingTop: 20, paddingBottom: 10, alignItems: 'center', justifyContent: 'center'}}>
               <Text style={{ fontSize: 40, color: '#FFFFFF',marginLeft: 25 }}>Câmara Municipal</Text>
               </View>


               <View style={{justifyContent:'center', borderTopWidth: 1, borderColor: '#FFFFFF', marginTop: 20}}>
                    <TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}}
					 onPress={() => {  }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}>  </Text>
					</TouchableOpacity>
               </View>


               <View style={{justifyContent:'center', borderTopWidth: 1, borderColor: '#FFFFFF', marginTop: 20}}>
					
					<TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}}
					 onPress={() => { Actions.Leis() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}> Leis </Text>
					</TouchableOpacity>
					<TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => { Actions.SAPL() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Sistema de Apoio ao Processo Legislativo</Text>
					</TouchableOpacity>
                    <TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => { Actions.TelaCadastroProblema() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Cadastrar Problemas</Text>
					</TouchableOpacity>
                    <TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => {  }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Vídeos</Text>
					</TouchableOpacity>
                    <TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => { }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}>Fotos</Text>
					</TouchableOpacity>
					
				
				</View>
				<View style={{justifyContent:'center', borderTopWidth: 1, borderColor: '#FFFFFF', marginTop: 20}}>
					<TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => { Actions.Sobre()}}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}> Sobre</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => { }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}> Câmara ao Vivo</Text>
					</TouchableOpacity>
                    <TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => {Actions.MenuExterno() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', textDecorationLine: 'underline' }}> Sair</Text>
					</TouchableOpacity>
				</View>
            </ScrollView>
        );
    }
}