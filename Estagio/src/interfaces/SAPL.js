import React from 'react';
import { StyleSheet, Text, View, ScrollView, Picker, Button, TextInput} from 'react-native';

export default class SAPL extends React.Component {

    render(){
        return(

            <ScrollView style={{flex: 1, padding: 10}}>
                <View style ={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style ={{fontSize: 25}}>Pesquisa Básica</Text>
                </View>
                <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', marginTop: 15, fontSize: 20 }}>
						<Text style={{ fontSize: 20 }}>Tipo de Matéria Legislativa:</Text>
						<Picker></Picker>
				</View >
                <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontSize: 20 }}>Nº</Text>
                    <TextInput style= {styles.textInput}  placeholder='Nº'/>
                    <Text style={{ fontSize: 20 }}>Nº. do Processo</Text>
                    <TextInput style= {styles.textInput} placeholder='Nº. do Processo'/>
                </View>
                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontSize: 20 }}>Nº. do Protocolo</Text>
                    <TextInput style= {styles.textInput} placeholder='Nº. do Protocolo'/>
                    <Text style={{ fontSize: 20 }}>Tipo de Matéria Legislativa:</Text>
						<Picker></Picker>
                </View>
                <View style={{flex: 1,  justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ fontSize: 20 }}>Autor</Text>
                    <TextInput style= {styles.textInput} placeholder='Autor'/>
                </View>
                <View style={{flex: 1, marginTop: 35}}> 
                    <Button  title= "Pesquisar" color = 'rgb(43, 83, 142)' onPress={() => false}/>
                </View>
            </ScrollView>

        );
    }

}
export const styles = StyleSheet.create({
    textInput: {
		textAlign: 'center',
		padding: 5,
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		borderBottomColor: '#000',
		borderTopColor: '#000',
		borderLeftColor: '#000',
		borderRightColor: '#000',
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		marginTop: 10,
		fontSize: 20,
		height: 45,
        width: 400
    },
}
)