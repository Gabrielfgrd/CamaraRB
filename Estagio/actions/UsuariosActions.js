import firebase from '@firebase/app';
import '@firebase/auth';
import "@firebase/database";
import '@firebase/storage'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash';
import {constUsuario} from '../constantes'


//modificação de valores normais ================
export const modificaNome = (texto) => {
	return {
		type: constUsuario.modificaNome,
		payload: texto
	}
}
export const modificaEndereco = (texto) => {
	return {
		type: constUsuario.modificaEndereco,
		payload: texto
	}
}
export const modificaCpf = (texto) => {
	return {
		type: constUsuario.modificaCpf,
		payload: texto
	}
}
export const modificaEmail = (texto) => {
	return {
		type: constUsuario.modificaEmail,
		payload: texto
	}
}
export const modificaSenha = (texto) => {
	return {
		type: constUsuario.modificaSenha,
		payload: texto
	}
}
export const modificaSenha2 = (texto) => {
	return {
		type: constUsuario.modificaSenha2,
		payload: texto
	}
}
//modificação de valores de edição ================
export const modificaEdiNome = (texto) => {
	return {
		type: constUsuario.modificaEdiNome,
		payload: texto
	}
}
export const modificaEdiEndereco = (texto) => {
	return {
		type: constUsuario.modificaEdiEndereco,
		payload: texto
	}
}
export const modificaEdiCpf = (texto) => {
	return {
		type: constUsuario.modificaEdiCpf,
		payload: texto
	}
}
export const modificaEdiEmail = (texto) => {
	return {
		type: constUsuario.modificaEdiEmail,
		payload: texto
	}
}
export const modificaEdiSenha = (texto) => {
	return {
		type: constUsuario.modificaEdiSenha,
		payload: texto
	}
}
export const modificaEdiSenha2 = (texto) => {
	return {
		type: constUsuario.modificaEdiSenha2,
		payload: texto
	}
}
//cadastro de usuario
export const cadastraUsuario = (nome, endereco, cpf, email, senha) => {
	return dispatch => {
		firebase.auth().createUserWithEmailAndPassword(email, senha)
			.then((user) => {
				user = firebase.auth().currentUser;
				firebase.database().ref('users/' + user.uid).set({
					nome: nome,
					endereco: endereco,
					cpf: cpf
				})
				alert("Cadastro realizado com sucesso!")
				Actions.TelaLogin()
				dispatch(
					{
						type: 'cadastro_sucesso'
					}
				) 
			})
			.catch((erro) => {
				alert("Erro ao realizar cadastro, " + erro.message)
				dispatch(
					{
						type: 'cadastro_erro'
					}
				) 
			})
	}
}
//autenticação de usuario
export const autenticaUsuario = ({ email, senha }) => {
	return dispatch => {
		//percisitir os dados de autenticação
		firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
			.then(function () {
				//executando autenticação no fire
				firebase.auth().signInWithEmailAndPassword(email, senha)
					.then(() => {
						firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', (snapshort) => {
							const dados = snapshort.val()
							Actions.MenuInterno()
							dispatch({
								type: constUsuario.autenticacaoSucesso,
								id: firebase.auth().currentUser.uid,
								payload: dados,
								email: firebase.auth().currentUser.email
							})
						})
					})
					.catch(erro => { 
						Actions.TelaLogin();
						alert('Falha ao realizar login, verifique seu e-mail e senha e tente novamente.')
						dispatch({
							type: 'autenticacao_erro'
						})
					 })
			})
			.catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
			});
	}
}
//Edição
export const editaSenha = (senha) => {
	return dispatch => {
		firebase.auth().currentUser.updatePassword(senha)
						.then(() => { alert('Senha alterada com sucesso'); Actions.TelaConfiguracoesConta()})
						.catch(erro => { alert(erro.message); Actions.TelaAlteraSenha() })
		dispatch({
			type: 'senhinha'
		})
	}
}
export const igualaDadosEdicao = () => {
	return {
		type: constUsuario.igualaDadosEdicao
	}
}
export const editaDadosUsuario = ( ediNome, ediEndereco, ediCpf, ediEmail) => {
	const novoNome = ediNome, novoEndereco = ediEndereco, novoCPF = ediCpf, novoEmail = ediEmail
	
	return dispatch => {
		firebase.auth().currentUser.updateEmail(novoEmail)
			.then(() => {
				firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
					nome: novoNome,
					endereco: novoEndereco,
					cpf: novoCPF,
				})
				alert('Edição realizada com sucesso!')
				Actions.MenuInterno()
				dispatch({
					type: constUsuario.edicaoSucesso
				})
			})
			.catch(erro => {Alert(erro.message) })
	}
}
export const autologin = () => {
	return dispatch => {
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', (snapshort) => {
					const dados = snapshort.val()
					Actions.MenuInterno()
					dispatch({
						type: 'atenticacao_sucesso',
						id: firebase.auth().currentUser.uid,
						payload: dados,
						email: firebase.auth().currentUser.email,
					})
				})
			} else {
				Actions.MenuExterno()
				dispatch({
					type: 'menu'
				})
			}
		})
	}
}
