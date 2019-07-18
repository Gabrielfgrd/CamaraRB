import firebase from '@firebase/app';
import '@firebase/auth';
import "@firebase/database";
import { Actions } from 'react-native-router-flux'
import _ from 'lodash';

export const modificaId = (texto) => {
    return {
        type: 'modifica_id',
        payload: texto
    }
}
export const modificaAutorId = (texto) => {
    return {
        type: 'modifica_autorId',
        payload: texto
    }
}
export const modificaTipoDeProblemaId = (texto) => {
    return {
        type: 'modifica_tipoDeProblemaId',
        payload: texto
    }
}
export const modificaDescricao = (texto) => {
    return {
        type: 'modifica_descricao',
        payload: texto
    }
}
export const modificaBairro = (texto) => {
    return {
        type: 'modifica_bairro',
        payload: texto
    }
}
export const modificaRua = (texto) => {
    return {
        type: 'modifica_rua',
        payload: texto
    }
}

export const modificaDataCriacao = (texto) => {
    return {
        type: 'modifica_dataCriacao',
        payload: texto
    }
}
//Actions de edição
export const modificaEdiId = (texto) => {
    return {
        type: 'modifica_ediId',
        payload: texto
    }
}
export const modificaEdiAutorId = (texto) => {
    return {
        type: 'modifica_ediAutorId',
        payload: texto
    }
}
export const modificaEdiTipoDeProblemaId = (texto) => {
    return {
        type: 'modifica_ediTipoDeProblemaId',
        payload: texto
    }
}
export const modificaEdiDescricao = (texto) => {
    return {
        type: 'modifica_ediDescricao',
        payload: texto
    }
}
export const modificaEdiDataCriacao = (texto) => {
    return {
        type: 'modifica_ediDataCriacao',
        payload: texto
    }
}
export const modificaEdiBairro = (texto) => {
    return {
        type: 'modifica_ediBairro',
        payload: texto
    }
}
export const modificaEdiRua = (texto) => {
    return {
        type: 'modifica_ediRua',
        payload: texto
    }
}   
//recupera tipos de problemas
export const recuperaTiposDeProblemas = () => {
    return dispatch => {
        firebase.database().ref('tiposDeProblemas').once('value', (snapshort) => {
            var tiposDeProblemas = _.values(snapshort.val())
            dispatch({
                type: 'modifica_tiposDeProblemas',
                payload: tiposDeProblemas
            })
        })
    }
}
//inclusão de problema
export const inclusaoProblema = ({ descricao, tipoDeProblemaId, dataCriacao, bairro, rua }) => {
    return dispatch => {
        user = firebase.auth().currentUser;
        novoProblema = firebase.database().ref().child('/problemas').push()
        novoProblema.set({
            id: novoProblema.key,
            autorId: firebase.auth().currentUser.uid,
            tipoDeProblemaId: tipoDeProblemaId,
            descricao: descricao,
            dataCriacao: dataCriacao,
            bairro: bairro, 
            rua: rua,
        })
            .then(() => {
                alert('Problema criado em sucesso')
               Actions.MenuInterno()
                dispatch({
                    type: 'inclussaoProblema_successo'
                })
            })
            .catch(erro => {
                alert('erro ao criar problema, ' + erro.message)
                dispatch({
                    type: 'inclussaoProblema_erro'
                })
            })
    }
}
//recuperação de todos problemas
export const recuperaTodosOsProblemas = () => {
    return dispatch => {
        firebase.database().ref('problemas').on('value', (snapshort) => {
            const problemas = _.values(snapshort.val())
            dispatch({
                type: 'modifica_problemas',
                payload: problemas
            })
        })
    }
}
//recuperação do problema pelo id passado como parametro
export const recuperaProblema = (id) => {
    return dispatch => {
        firebase.database().ref('problemas').child(id).on('value', (snapshort) => {
            var problema = snapshort.val()
            var QueryNomeAutor = '', QueryTituloTipo = ''
            var idDoAutor = problema.autorId, idDoTipo = problema.tipoDeProblemaId;
            //buscar o nome do autor
            firebase.database().ref('users/' + idDoAutor).on('value', (snapshortAutor) => {
                QueryNomeAutor = snapshortAutor.val().nomeUsuario
                firebase.database().ref('tiposDeProblemas/' + idDoTipo).on('value', (snapshortTipo) => {
                    QueryTituloTipo = snapshortTipo.val().titulo
                    dispatch({
                        type: 'carregamento_problema_sucesso',
                        payload: problema,
                        nomeAutor: QueryNomeAutor,
                        tituloTipo: QueryTituloTipo
                    })
                })
            })
            //buscar o titulo do tipo de problema
            if(firebase.auth().currentUser == null){
                Actions.TelaExibicaoProblema()
            }
        })
    }
}

//limpa todas as informações presentes nos reducers
export const limpaTodosOsDados = () => {
    return dispatch => {
        dispatch({
            type: 'limpa_todos_dadosProblema'
        })
    }
}
//edição de problema
export const limpaDadosEdicaoProblema = () => {
    return {
        type: 'limpa_dados_problemaEdicao'
    }
}
export const igualaDadosEdicaoProblema = (id) => {
    if (id == firebase.auth().currentUser.uid) {
        Actions.TelaEdicaoProblema()
        return {
            type: 'inicia_edicaoProblema'
        }
    } else {
        alert('Somente o autor do problema pode edita-lo')
        return {
            type: 'achou que ia editar? achou errado otário'
        }
    }
}
export const editaDadosDoProblema = ({ autorId, id, ediTipoDeProblemaId, ediDescricao, ediDataCriacao, ediBairro, ediRua }) => {
    return dispatch => {
        firebase.database().ref('problemas/' + id).set({
            id: id,
            autorId: autorId,
            tipoDeProblemaId: ediTipoDeProblemaId,
            descricao: ediDescricao,
            dataCriacao: ediDataCriacao,
            bairo: ediBairro,
            rua : ediRua,
        })
        alert("Edição realizada!")
        Actions.MenuInterno()
        dispatch({
            type: 'limpa_todos_dadosProblema'
        })
    }
}
//excluir problema
export const excluirProblema = (id, autorId) => {
    return dispatch => {
        if (autorId == firebase.auth().currentUser.uid) {
            firebase.database().ref('problemas').child(id).off()
            firebase.database().ref('problemas/' + id).remove()
                .then(() => {
                    alert('Problema excluido com sucesso!')
                    dispatch({
                        type: 'limpa_todos_dadosProblema'
                    })
                })
                .catch((error) => {
                    alert('Erro ao excluir problema, ' + error.message)
                    dispatch({
                        type: 'limpa_todos_dadosProblema'
                    })
                })
                Actions.MenuInterno()
        } else {
            alert('Somente o autor do problema pode exclui-lo')
            dispatch({
                type: 'nada'
            })
        }
    }
}