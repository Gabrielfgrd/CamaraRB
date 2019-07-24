import React from 'react';
import {ScrollView, View , TextInput, TouchableOpacity,Text} from 'react-native';
import { connect } from 'react-redux';
import {
	modificaNome,
	modificaEndereco,
	modificaCpf,
	modificaEmail,
	modificaSenha,
    modificaSenha2,
    cadastraUsuario
} from '../../actions/UsuariosActions'
import {styles, colors} from '../Components/layout';
import TextInputMask from 'react-native-text-input-mask'

class TelaCadastroUsuario extends React.Component {
    constructor(props){
        super(props)
        this.state={
            msgNome: '',
            msgEndereco: '',
            msgCpf: '',
            msgEmail: '',
            msgSenha: '',
            msgSenha2: '',
        }
    }
    validaNome(){
        if(this.props.nome==''){
            this.setState({msgNome: 'O campo nome está vazio'})
            return false;
        }else{
            this.setState({msgNome: ''})
            return true
        }
    }
    validaEndereco(){
        if(this.props.endereco==''){
            this.setState({msgEndereco: 'O campo endereço está vazio'})
            return false;
        }else{
            this.setState({msgEndereco: ''})
            return true
        }
    }
    validaCpf(){
        if(this.props.cpf==''){
            this.setState({msgCpf: 'O campo cpf está vazio'})
            return false;
        }else if(this.props.cpf.length < 11 ){
            this.setState({msgCpf: 'Formato incorreto de CPF'})
            return false;
        }else{
            this.setState({msgCpf: ''})
            return true
        }
    }
    validaEmail(){
        if(this.props.email==''){
            this.setState({msgEmail: 'O campo e-mail está vazio'})
            return false;
        }else if(this.props.email.indexOf("@")==-1 || this.props.email.indexOf(".com") == -1){
            this.setState({msgEmail: 'Digite um e-mail válido'})
            return false;
        }else{
            this.setState({msgEmail: ''})
            return true
        }
    }
    validaSenha(){
        if(this.props.senha==''){
            this.setState({msgSenha: 'O campo senha está vazio'})
            return false;
        }else if(this.props.senha.length < 6 ){
            this.setState({msgSenha: 'A senha deve ter mais de 6 digitos'})
            return false;
        }else{
            this.setState({msgSenha: ''})
            return true
        }
    }
    validasenha2(){
        if(this.props.senha2==''){
            this.setState({msgSenha2: 'O campo de confirmação de senha está vazio'})
            return false;
        }else if(this.props.senha2 !=this.props.senha){
            this.setState({msgSenha2: 'As senhas não estão iguais'})
            return false;
        }else{
            this.setState({msgSenha2: ''})
            return true
        }
    }
    verificaCadastro() {
        var v1 = this.validaNome(), v2= this.validaEndereco(), v3= this.validaCpf(),v4= this.validaEmail(), v5= this.validaSenha(), v6= this.validasenha2();
        if(v1 && v2  && v3  &&  v4  &&  v5 && v6 ){
            this.props.cadastraUsuario(this.props.nome, this.props.endereco, this.props.cpf, this.props.email, this.props.senha);
        }
    }
    render() {
        return (
            <ScrollView style={{flex: 1, padding: 10}}>
                <View style={{flex: 6, justifyContent: 'center', marginTop:15}}>
                <Text style={styles.textoPadrao} >Nome</Text>
                    <TextInput style={styles.textInput} value={this.props.nome} placeholder = "Nome" onChangeText={texto => this.props.modificaNome(texto)}/>
                    <Text style={styles.textoAviso} >{this.state.msgNome}</Text>
                    <Text style={styles.textoPadrao} >E-mail</Text>
                    <TextInput style={styles.textInput} value={this.props.email} placeholder = "E-mail" onChangeText={texto => this.props.modificaEmail(texto)}/>
                    <Text style={styles.textoAviso} >{this.state.msgEmail}</Text>
                    <Text style={styles.textoPadrao} >Endereço</Text>
                    <TextInput style={styles.textInput} value={this.props.endereco} placeholder = "Endereço" onChangeText={texto => this.props.modificaEndereco(texto)}/>
                    <Text style={styles.textoAviso} >{this.state.msgEndereco}</Text>
                    <Text style={styles.textoPadrao} >CPF</Text>
                    <TextInputMask
							value={this.props.cpf} style={styles.textInput} placeholder="CPF"
							refInput={ref => { this.input = ref }}
							onChangeText={(formatted, extracted) => {
								this.props.modificaCpf(extracted)
							}}
							mask={"[000].[000].[000]-[00]"}
					/>
                    <Text style={styles.textoAviso} >{this.state.msgCpf}</Text>
                    <Text style={styles.textoPadrao} >Senha</Text>
                    <TextInput style={styles.textInput} value={this.props.senha} secureTextEntry placeholder = "Senha" onChangeText={texto => this.props.modificaSenha(texto)}/>
                    <Text style={styles.textoAviso} >{this.state.msgSenha}</Text>
                    <Text style={styles.textoInformacaoValidacao} >A senha deve ter mais de 6 caracteres</Text>
                    <Text style={styles.textoPadrao} >Confirmação de Senha</Text>
                    <TextInput style={styles.textInput} value={this.props.senha2} secureTextEntry placeholder = "Confirmação de Senha" onChangeText={texto => this.props.modificaSenha2(texto)}/>
                    <Text style={styles.textoAviso} >{this.state.msgSenha2}</Text> 
                </View>
                <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', marginTop:15, marginBottom:50}}>
                    <TouchableOpacity
                        style={styles.botao}
                        onPress={()=>{this.verificaCadastro()}}>
                        <Text style={styles.textoBotao}> Cadastrar </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    };
}
const mapStateToProps = state => (
	{
		nome: state.UsuarioReducer.nome,
		endereco: state.UsuarioReducer.endereco,
		cpf: state.UsuarioReducer.cpf,
		email: state.UsuarioReducer.email,
		senha: state.UsuarioReducer.senha,
		senha2: state.UsuarioReducer.senha2
	}
)
export default connect(mapStateToProps, {
	modificaNome,
	modificaEndereco,
	modificaCpf,
	modificaEmail,
	modificaSenha,
    modificaSenha2,
    cadastraUsuario
})(TelaCadastroUsuario);