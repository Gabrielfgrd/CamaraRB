import _ from 'lodash';

const INITIAL_STATE = {
    //array com todos os problemas
    problemas: [],
    //array com os tipos de problemas
    tiposDeProblemas: [],
    //problema
    id: '',
    autorId: '',
    tipoDeProblemaId: '',
    descricao: '',
    dataCriacao: '',
    bairro: '',
    rua: '',
   

}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifica_problemas':
            return { ...state, problemas: action.payload }
        case 'modifica_tiposDeProblemas':
            return { ...state, tiposDeProblemas: action.payload }
        case 'modifica_id':
            return { ...state, id: action.payload }
        case 'modifica_autorId':
            return { ...state, autorId: action.payload }
        case 'modifica_descricao':
            return { ...state, descricao: action.payload }
        case 'modifica_tipoDeProblemaId':
            return { ...state, tipoDeProblemaId: action.payload }
        case 'modifica_dataCriacao':
            return { ...state, dataCriacao: action.payload }
        case 'modifica_bairro':
            return { ...state, bairro: action.payload }
        case 'modifica_rua':
            return { ...state, rua: action.payload }
            case 'modifica_nomeAutor':
            return { ...state, nomeAutor: action.payload }
        case 'modifica_tituloTipoProblema':
            return { ...state, tituloTipoProblema: action.payload }
        case 'modifica_ediTituloTipoProblema':
            return { ...state, ediTituloTipoProblema: action.payload }
    

        case 'limpa_dados_problema':
            return {
                ...state,
                id: '',
                autorId: '',
                tipoDeProblemaId: '',
                descricao: '',
                bairro: '',
                rua: '',    
                dataCriacao: '',
                nomeAutor: '',
                tituloTipoProblema: '',

                }
                case 'limpa_dados_problemaEdicao':
            return {
                ...state,
                ediId: '',
                ediAutorID: '',
                ediTipoDeProblemaId: '',
                ediDescricao: '',
                ediDataCriacao: '',
                ediBairro: '',
                ediRua: '',
                ediTituloTipoProblema: ''
                
            }
            case 'limpa_todos_dadosProblema':
            return {
                ...state,
                id: '',
                autorId: '',
                tipoDeProblemaId: '',
                descricao: '',
                dataCriacao: '',
                bairro: '',
                rua: '',    
                
                //edicao
                ediId: '',
                ediAutorID: '',
                ediTipoDeProblemaId: '',
                ediDescricao: '',
                ediDataCriacao: '',
                ediBairro: '',
                ediRua: '',
                //extras
                nomeAutor: '',
                tituloTipoProblema: '',
                ediTituloTipoProblema: ''
            
            }
            case 'inicia_edicaoProblema':
                return {
                    ...state,
                    ediId: state.id,
                    ediAutorID: state.autorId,
                    ediTipoDeProblemaId: state.tipoDeProblemaId,
                    ediDescricao: state.descricao,
                    ediDataCriacao: state.dataCriacao,
                    ediBairro: state.bairro,
                    ediRua: state.rua,
                    ediTituloTipoProblema: action.tituloTipoProblema
                }
    }
    return state;
}