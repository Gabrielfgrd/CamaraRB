import React from 'react';
import {View, Text, TextInput, TouchableHighlight,TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {styles, colors} from '../Components/layout';
import {
	modificaEmail,
    modificaSenha,
    autenticaUsuario
} from '../../actions/UsuariosActions'
import { connect } from 'react-redux';



class TelaLogin extends React.Component {
	_autenticaUsuario() {
		Actions.TelaCarregamento();
		const { email, senha } = this.props
		this.props.autenticaUsuario({ email, senha })
	}
	render() {
		return (
			<View style ={{ flex: 1, padding: 10}}>
                <View style ={{flex: 3, alignItems: 'center', justifyContent: 'center', marginTop: 60}}>
                    <Text style={styles.textoPadrao} >E-mail</Text>
                    <TextInput style={styles.textInput} value={this.props.email} placeholder = "E-mail" onChangeText={texto => this.props.modificaEmail(texto)}/>
                    <Text style={styles.textoPadrao} >Senha</Text>
                    <TextInput style={styles.textInput} value={this.props.senha} secureTextEntry placeholder = "Senha" onChangeText={texto => this.props.modificaSenha(texto)}/>
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
	}
}
const mapStateToProps = state => (
	{
		email: state.UsuarioReducer.email,
		senha: state.UsuarioReducer.senha
	}
)
export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticaUsuario})(TelaLogin);
