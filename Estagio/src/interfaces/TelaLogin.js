import React from 'react';
import {View, Text, TextInput, TouchableHighlight,TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {styles, colors} from '../Components/layout';


export default props => (

<View style ={{ flex: 1, padding: 10}}>
    <View style ={{flex: 3, alignItems: 'center', justifyContent: 'center', marginTop: 60}}>
        <TextInput  style={styles.textInput} placeholder='E-mail'/>
        <TextInput style={styles.textInput} placeholder='Senha'/>
       <View style ={{flex: 3, alignItems: 'center', justifyContent: 'center'}} >
        <Text style={styles.textoPadrao} >Ainda não tem cadastro? </Text>
       <TouchableHighlight onPress={() => Actions.TelaCadastroUsuario() }>
        <Text style ={{fontSize: 20, textDecorationLine: 'underline', color: '#000000'} }>Cadastre-se</Text>
        </TouchableHighlight>
        </View>
    </View>
    <View style ={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
            style={styles.botao}
            onPress={()=>{Actions.MenuInterno()}}>
            <Text style={styles.textoBotao}> Entrar </Text>
        </TouchableOpacity>
    </View>
</View>
);