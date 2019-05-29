import React from 'react';
import {ScrollView, View , TextInput, TouchableOpacity,Text} from 'react-native';
import { connect } from 'react-redux';
import {styles, colors} from '../Components/layout';

export default props =>(

    <ScrollView style={{flex: 1, padding: 10}}>
        <View style={{flex: 6, justifyContent: 'center', marginTop:15}}>
        <Text style={styles.textoPadrao} >Nome</Text>
            <TextInput style={styles.textInput} placeholder = "Nome"/>
            <Text style={styles.textoPadrao} >E-mail</Text>
            <TextInput style={styles.textInput} placeholder = "E-mail"/>
            <Text style={styles.textoPadrao} >Endereço</Text>
            <TextInput style={styles.textInput} placeholder = "Endereço"/>
            <Text style={styles.textoPadrao} >CEP</Text>
            <TextInput style={styles.textInput} placeholder = "CEP"/>
            <Text style={styles.textoPadrao} >Senha</Text>
            <TextInput style={styles.textInput} placeholder = "Senha"/>
            <Text style={styles.textoPadrao} >Confirmação de Senha</Text>
            <TextInput style={styles.textInput} placeholder = "Confirmação de Senha"/>
        </View>
        <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', marginTop:15}}>
            <TouchableOpacity
                style={styles.botao}
                onPress={false}>
                <Text style={styles.textoBotao}> Cadastrar </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>

);