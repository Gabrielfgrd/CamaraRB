import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';

class TelaAlteraDadosUsuario extends React.Component {

    render() {
		return (
            <ScrollView>
				<View style={{ padding: 20 }}>
					<View style={{ marginTop: 30, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={styles.textoPadrao}>Ok, errou alguma coisa?</Text>
						<TextInput style={styles.textInput} placeholder="Nome" />
						<TextInput style={styles.textInput} placeholder="Sobrenome" />
						<TextInputMask
							 style={styles.textInput} placeholder="CPF"
							mask={"[000].[000].[000]-[00]"}
						/>
						<TextInput  style={styles.textInput} placeholder="E-mail" />
						<TextInput  style={styles.textInput} placeholder="Nome de usuário" />
						<Botao texto='Confirmar' onPress={() => {}} />
					</View>
				</View>
			</ScrollView>
        );
    }
}

export const styles = StyleSheet.create({
    textoPadrao: {
        fontSize: 20,
        color: '#000000', 
        justifyContent: 'center',
         alignItems: 'center',
         marginRight: 15,
         marginLeft: 15

    },
    titulo:{
        fontSize: 30,
        fontWeight: 'bold'
    },
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
);