import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { styles } from '../Components/layout';

export default class Botao extends React.Component {
	render() {
		return (
			<View>
				<TouchableHighlight style={styles.botao} onPress={() => { this.props.onPress() }}>
					<Text style={styles.textoBotao}>{this.props.texto}</Text>
				</TouchableHighlight>
			</View>
		);
	}
}