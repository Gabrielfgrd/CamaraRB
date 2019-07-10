import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from '../Components/layout'


export default class Menu extends React.Component {
	render() {
		return (
            <ScrollView style={{ backgroundColor: '#rgb(43, 83, 142)' }}>
               <View style={{ paddingTop: 20, paddingBottom: 10, alignItems: 'center', justifyContent: 'center'}}>
               <Text style={{ fontSize: 40, color: '#FFFFFF',marginLeft: 25 }}>Câmara Municipal</Text>
               </View>
               <View style={{justifyContent:'center', borderTopWidth: 1, borderColor: '#FFFFFF', marginTop: 20}}>
					<TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => {Actions.TelaLogin() }}>
						<Text style={{ fontSize: 20, color: colors.branco, }}>
						<Ionicons name="ios-log-in" size={20} color={colors.branco} /> Login</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => {Actions.TelaCadastroUsuario() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', textDecorationLine: 'underline' }}>
						<Ionicons name="md-person-add" size={20} color={colors.branco} /> Cadastre-se</Text>	
					</TouchableOpacity>
				</View>	
					<View style={{justifyContent:'center', borderTopWidth: 1, borderColor: '#FFFFFF', marginTop: 20}}>
					<TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => { Actions.Leis() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}> 
						<Ionicons name="md-paper" size={20} color={colors.branco} /> Leis </Text>
					</TouchableOpacity>
					<TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => { Actions.SAPL() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}>
						<Foundation name="book-bookmark" size={20} color={colors.branco} /> Sistema de Apoio ao Processo Legislativo</Text>
					</TouchableOpacity>
                    <TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => { Actions.GaleriaDeVideos() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}>
						<Foundation name="play-video" size={20} color={colors.branco} /> Vídeos</Text>
					</TouchableOpacity>
                    <TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => { }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}>
						<MaterialCommunityIcons name="image-filter" size={20} color={colors.branco} /> Fotos</Text>
					</TouchableOpacity>
					
				
				</View>
				<View style={{justifyContent:'center', borderTopWidth: 1, borderColor: '#FFFFFF', marginTop: 20}}>
					<TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => { Actions.Sobre()}}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}>
						<Ionicons name="ios-information-circle-outline" size={20} color={colors.branco} /> Sobre</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{justifyContent: 'center', marginLeft: 30, marginTop: 20}} onPress={() => { Actions.CamaraAoVivo() }}>
						<Text style={{ fontSize: 20, color: '#FFFFFF', }}> 
						<MaterialIcons name="live-tv" size={20} color={colors.branco} /> Câmara ao Vivo</Text>
					</TouchableOpacity>
				</View>
            </ScrollView>
        );
    }
}