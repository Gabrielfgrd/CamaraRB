import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker, TextInput, ScrollView, Image } from 'react-native';
import { styles, colors } from '../layout'
import Botao from '../components/Botao'


class TelaCadastroProblema extends React.Component {
    render() {
		return (
			<ScrollView style={{backgroundColor: colors.branco}}>
					<View style={{ alignItems: 'center', marginTop: 15, fontSize: 20 }}>
						<Image
							style={{ height: 100, width: 100 }}
							source={this.state.imagem} />
						<Text style={{ fontSize: 20, color: colors.preto }}>Tipo de problema:</Text>
						<Picker>
						</Picker>
						<Text style={{ fontSize: 20, color: colors.preto }}>Descreva o problema:</Text>
						<TextInput value={this.props.descricao} maxLength={200} multiline={true} style={styles.textArea} placeholder="descrição do problema" onChangeText={(texto) => { }} />
						<Botao texto='Inserir problema' onPress={() => {  }} />
					</View>
			</ScrollView>
		);
	}
}
