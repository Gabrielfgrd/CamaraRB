import React from 'react';
import {View, Text, TextInput, Button, TouchableHighlight} from 'react-native';
import {Action} from 'react-native-router-flux';


export default props => (

<View style ={{ flex: 1, padding: 10}}>
    <View  style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style ={{fontSize: 25}}>Login</Text>
    </View>
    <View style ={{flex: 2}}>
        <TextInput style ={{fontSize: 20, height: 45}} placeholder='E-mail'/>
        <TextInput style ={{fontSize: 20, height: 45}} placeholder='Senha'/>
       <TouchableHighlight onPress={() => Action.TelaCadastroUsuario() }>
        <Text style ={{fontSize: 20}} >Ainda não tem cadastro? Cadastre-se</Text>
        </TouchableHighlight>
    </View>
    <View style ={{flex: 2}}>
        <Button title= "Acessar" color = 'rgb(43, 83, 142)' onPress={() => false}/>
    </View>
</View>
);