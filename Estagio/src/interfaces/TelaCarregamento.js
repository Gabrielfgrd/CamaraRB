import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { autologin } from '../../actions/UsuariosActions'
import '@firebase/auth';
import { colors } from '../Components/layout'
import {
	BallIndicator,
	BarIndicator,
	DotIndicator,
	MaterialIndicator,
	PacmanIndicator,
	PulseIndicator,
	SkypeIndicator,
	UIActivityIndicator,
	WaveIndicator,
} from 'react-native-indicators';

class TelaCarregamento extends React.Component {
	_autologin() {
		this.props.autologin()
	}
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: colors.azul, alignItems: 'center', justifyContent: 'center' }}>
			{this._autologin()}
				<Text style={{ top: '40%', fontSize: 60, color: colors.branco, marginBottom: 15 }}>CâmaraRB</Text>
				<BarIndicator  color={colors.branco} count={4} />
			</View>
		);
	}
}
const mapStateToProps = state => (
	{
	}
)
export default connect(mapStateToProps, { autologin })(TelaCarregamento);