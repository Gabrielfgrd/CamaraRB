import React from 'react';
import { ScrollView, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { styles, colors } from '../Components/layout';
import {
	modificaEdiSenha,
	modificaEdiSenha2,
	editaSenha,
	igualaDadosEdicao
} from '../../actions/UsuariosActions'
import Botao from '../Components/Botao'

class TelaAlteraSenhaUsuario extends React.Component {
	constructor(props) {
		super(props)
		this.props.igualaDadosEdicao()
		this.state = {
			msgSenha: '',
			msgSenha2: '',
		}
	}

	validaSenha() {
		if (this.props.ediSenha == '') {
			this.setState({ msgSenha: 'O campo senha está vazio' })
			return false;
		} else if (this.props.ediSenha.length < 6) {
			this.setState({ msgSenha: 'A senha deve ter mais de 6 digitos' })
			return false;
		} else {
			this.setState({ msgSenha: '' })
			return true
		}
	}

	validasenha2() {
		if (this.props.ediSenha2 == '') {
			this.setState({ msgSenha2: 'O campo de confirmação de senha está vazio' })
			return false;
		} else if (this.props.ediSenha2 != this.props.ediSenha) {
			this.setState({ msgSenha2: 'As senhas não estão iguais' })
			return false;
		} else {
			this.setState({ msgSenha2: '' })
			return true
		}
	}

	editaSenha() {
		var v1 = this.validaSenha(), v2 = this.validasenha2()
		if (v1 && v2) {
			this.props.editaSenha(this.props.ediSenha);
		}
	}
	render() {
		return (
			<ScrollView style={{ padding: 10 }}>
				<View style={{ justifyContent: 'center', marginTop: 15 }}>
					{/* <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
						<Text style={styles.textoPadrao} >Senha Atual</Text>
						<TextInput style={styles.textInput} editable={true} />
					</View> */}
					<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
						<Text style={styles.textoPadrao}  >Nova Senha</Text>
						<TextInput value={this.props.ediSenha} secureTextEntry={true} maxLength={10} style={styles.textInput} editable={true} placeholder="Pelo menos 6 caracteres" onChangeText={texto => this.props.modificaEdiSenha(texto)} />
					</View>
					<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
						<Text style={styles.textoPadrao} >Confirmar a senha</Text>
						<TextInput value={this.props.ediSenha2} secureTextEntry={true} maxLength={10} style={styles.textInput} editable={true} placeholder="Pelo menos 6 Caracteres" onChangeText={texto => this.props.modificaEdiSenha2(texto)} />
					</View>
				</View>
				<View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 40 }}>
					<Botao texto='Confirmar' onPress={() => { this.editaSenha() }} />
				</View>
			</ScrollView>

		);
	}

}
const mapStateToProps = state => (
	{
		email: state.UsuarioReducer.email,
		senha: state.UsuarioReducer.senha,
		//edicao
		ediSenha: state.UsuarioReducer.ediSenha,
		ediSenha2: state.UsuarioReducer.ediSenha2
	}
)
export default connect(mapStateToProps, {
	modificaEdiSenha,
	modificaEdiSenha2,
	editaSenha,
	igualaDadosEdicao
})(TelaAlteraSenhaUsuario);
