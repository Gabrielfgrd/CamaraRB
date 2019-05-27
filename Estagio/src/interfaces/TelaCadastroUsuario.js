import React from 'react';
import {View , TextInput, Button} from 'react-native';
import { connect } from 'react-redux';

export default props =>(

    <View style={{flex: 1, padding: 10}}>
        <View style={{flex: 7, justifyContent: 'center'}}>
            <TextInput style={{fontSize: 20, height: 45}} placeholder = "Nome"/>
            <TextInput style={{fontSize: 20, height: 45}} placeholder = "E-mail"/>
            <TextInput style={{fontSize: 20, height: 45}} placeholder = "Endereço"/>
            <TextInput style={{fontSize: 20, height: 45}} placeholder = "CEP"/>
            <TextInput style={{fontSize: 20, height: 45}} placeholder = "Senha"/>
            <TextInput style={{fontSize: 20, height: 45}} placeholder = "Confirmação de Senha"/>
        </View>
        <View style={{flex: 1}}>
            <Button title= "Cadastrar" color = 'rgb(43, 83, 142)' onPress={() => false}/>
        </View>
    </View>

);