import React from 'react';
import { Text, View, ScrollView, Picker, TouchableOpacity, TextInput} from 'react-native';
import {styles, colors} from '../Components/layout';

export default class SAPL extends React.Component {

   
    render(){
        return(

            <ScrollView style={{flex: 1, padding: 10}}>
                <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.textoPadrao}>Pesquisa Básica</Text>
                </View>
                <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>
						<Text style={styles.textoPadrao}>Tipo de Matéria Legislativa:</Text>
						<Picker></Picker>
				</View >
                <View style={{flex: 5, justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                    <Text style={styles.textoPadrao}>Nº</Text>
                    <TextInput style= {styles.textInput}  placeholder='Nº'/>
                    <Text style={styles.textoPadrao}>Nº. do Processo</Text>
                    <TextInput style= {styles.textInput} placeholder='Nº. do Processo'/>
                </View>
                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                    <Text style={styles.textoPadrao}>Nº. do Protocolo</Text>
                    <TextInput style= {styles.textInput} placeholder='Nº. do Protocolo'/>
                </View>
                <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                    <Text style={styles.textoPadrao}>Autor</Text>
                    <TextInput style= {styles.textInput} placeholder='Autor'/>
                </View>
                <View style={{flex: 1, marginTop: 30,  justifyContent: 'center', alignItems: 'center', marginBottom: 35}}> 
                    <TouchableOpacity
                        OnPress={ ()=>{ }}
                        style={styles.botao}>
                        <Text style={styles.textoBotao}> Pesquisar </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        );
    }

}
