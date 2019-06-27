import _ from 'lodash';
import {constUsuario} from '../constantes'

const INITIAL_STATE = {
    //valores normais
    id: '',
    nome: 'Teste',
    endereco: 'Rua do Teste',
    cpf: '11111111111',
    email: 'teste@teste.com',
    senha: '123456',
    senha2: '123456',
    //valores de edição
    ediNome: '',
    ediEndereco: '',
    ediCpf: '',
    ediEmail: '',
    ediSenha: '',
    ediSenha2: '',
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //modificação de valores normais
        case constUsuario.modificaNome:
            return { ...state, nome: action.payload }
        case constUsuario.modificaEndereco:
            return { ...state, endereco: action.payload }
        case constUsuario.modificaCpf:
            return { ...state, cpf: action.payload }
        case constUsuario.modificaEmail:
            return { ...state, email: action.payload }
        case constUsuario.modificaSenha:
            return { ...state, senha: action.payload }
        case constUsuario.modificaSenha2:
            return { ...state, senha2: action.payload }
        //modificação de valores de edição
        case constUsuario.modificaEdiNome:
            return { ...state, ediNome: action.payload }
        case constUsuario.modificaEdiEndereco:
            return { ...state, ediEndereco: action.payload }
        case constUsuario.modificaEdiCpf:
            return { ...state, ediCpf: action.payload }
        case constUsuario.modificaEdiEmail:
            return { ...state, ediEmail: action.payload }
        case constUsuario.modificaEdiSenha:
            return { ...state, ediSenha: action.payload }
        case constUsuario.modificaEdiSenha2:
            return { ...state, ediSenha2: action.payload }
        //autenticação de usuario
        case constUsuario.autenticacaoSucesso:
            return {
                ...state,
               nome: state.ediNome,
               endereco: state.ediEndereco,
               cpf: state.ediCpf,
               email: state.ediEmail,
               senha: state.ediSenha,   
               senha2: state.ediSenha2,
            }
        case constUsuario.igualaDadosEdicao:
            return {
                ...state,
                ediNome: state.nome,
                ediEndereco: state.endereco,
                ediCpf: state.cpf,
                ediEmail: state.email,
                ediSenha: state.senha,
                ediSenha2: state.senha2,
            }
            case 'atenticacao_sucesso':
            return {
                ...state,
                id: action.id,
                endereco: action.payload.endereco,
                nome: action.payload.nome,
                cpf: action.payload.cpf,
                email: action.email,
                senha: '',
                senha2: '',
            }
    }
    
    return state;
}