import React from 'react';
import {ScrollView, View , TextInput, TouchableOpacity,Text} from 'react-native';
import { connect } from 'react-redux';
import {styles, colors} from '../Components/layout';
import {
	modificaEdiNome,
	modificaEdiEndereco,
	modificaEdiCpf,
	modificaEdiEmail,
	igualaDadosEdicao,
    editaDadosUsuario
} from '../../actions/UsuariosActions'
import TextInputMask from 'react-native-text-input-mask'

class TelaAlteraDadosUsuario extends React.Component {
	constructor(props){
        super(props)
        this.state={
            msgNome: '',
            msgEndereco: '',
            msgCpf: '',
			msgEmail: ''
        }
		this.props.igualaDadosEdicao()
	}
	validaNome(){
        if(this.props.ediNome==''){
            this.setState({msgNome: 'O campo nome está vazio'})
            return false;
        }else{
            this.setState({msgNome: ''})
            return true
        }
    }
    validaEndereco(){
        if(this.props.ediEndereco==''){
            this.setState({msgEndereco: 'O campo endereço está vazio'})
            return false;
        }else{
            this.setState({msgEndereco: ''})
            return true
        }
    }
    validaCpf(){
        if(this.props.ediCpf==''){
            this.setState({msgCpf: 'O campo cpf está vazio'})
            return false;
        }else if(this.props.ediCpf.length < 11 ){
            this.setState({msgCpf: 'Formato incorreto de CPF'})
            return false;
        }else{
            this.setState({msgCpf: ''})
            return true
        }
    }
    validaEmail(){
        if(this.props.ediEmail==''){
            this.setState({msgEmail: 'O campo e-mail está vazio'})
            return false;
        }else if(this.props.ediEmail.indexOf("@")==-1 || this.props.ediEmail.indexOf(".com") == -1){
            this.setState({msgEmail: 'Digite um e-mail válido'})
            return false;
        }else{
            this.setState({msgEmail: ''})
            return true
        }
    }
    validaAlteracoes() {
        var v1 = this.validaNome(), v2= this.validaEndereco(), v3= this.validaCpf(),v4= this.validaEmail();
        if(v1 && v2  && v3  &&  v4 ){
            this.props.editaDadosUsuario(this.props.ediNome, this.props.ediEndereco, this.props.ediCpf, this.props.ediEmail);
        }
    }
	render(){
		return(
			<ScrollView style={{ padding: 10}}>
				<View style={{flex: 6, justifyContent: 'center', marginTop:15}}>
					<Text style={styles.textoPadrao}>Nome</Text>
						<TextInput style={styles.textInput} value={this.props.ediNome} placeholder = "Nome" onChangeText={texto => this.props.modificaEdiNome(texto)}/>
						<Text style={styles.textoAviso} >{this.state.msgNome}</Text>
						<Text style={styles.textoPadrao} >E-mail</Text>
						<TextInput style={styles.textInput} value={this.props.ediEmail} placeholder = "E-mail" onChangeText={texto => this.props.modificaEdiEmail(texto)}/>
						<Text style={styles.textoAviso} >{this.state.msgEmail}</Text>
						<Text style={styles.textoPadrao} >Endereço</Text>
						<TextInput style={styles.textInput} value={this.props.ediEndereco} placeholder = "Endereço" onChangeText={texto => this.props.modificaEdiEndereco(texto)}/>
						<Text style={styles.textoAviso} >{this.state.msgEndereco}</Text>
						<Text style={styles.textoPadrao} >CEP</Text>
						<TextInputMask
								value={this.props.ediCpf} style={styles.textInput} placeholder="CPF"
								refInput={ref => { this.input = ref }}
								onChangeText={(formatted, extracted) => {
									this.props.modificaEdiCpf(extracted)
								}}
								mask={"[000].[000].[000]-[00]"}
						/>
						<Text style={styles.textoAviso} >{this.state.msgCpf}</Text>
					</View>
       			<View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 40}}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={()=>{this.validaAlteracoes()}}>
                        <Text style={styles.textoBotao}> Confirmar </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

		)	
	};
	
}
const mapStateToProps = state => (
	{
		ediNome: state.UsuarioReducer.ediNome,
		ediEndereco: state.UsuarioReducer.ediEndereco,
		ediCpf: state.UsuarioReducer.ediCpf,
		ediEmail: state.UsuarioReducer.ediEmail
	}
)
export default connect(mapStateToProps, {
	modificaEdiNome,
	modificaEdiEndereco,
	modificaEdiCpf,
	modificaEdiEmail,
	igualaDadosEdicao,
	editaDadosUsuario
})(TelaAlteraDadosUsuario);
