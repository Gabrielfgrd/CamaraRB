import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

export default class TelaConfirmacaoCadastro extends React.Component {
	render() {
		return (
			<ScrollView>
				<View style={{ padding: 20 }}>
					<View style={styles.formularioLogin}>
						<Text style={{ fontSize: 30 }}>Seu cadastro foi concluido, agora você poderá ajudar na administração de sua cidade!</Text>
					</View>
				</View>
			</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	formularioLogin: {
		marginTop: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btn: {
		borderTopRightRadius: 10,
		borderTopLeftRadius: 10,
		borderBottomRightRadius: 10,
		borderBottomLeftRadius: 10,
		height: 60,
		width: 150,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1d9a78',
	}
});
