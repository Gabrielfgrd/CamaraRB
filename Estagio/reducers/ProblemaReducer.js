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
    //edicao
    ediId: '',
    ediAutorID: '',
    ediTipoDeProblemaId: '',
    ediDescricao: '',
    ediDataCriacao: '',
    ediBairro: '',
    ediRua: '',
    //Dados extras
    nomeAutor: '',
    tituloTipoProblema: '',
    ediTituloTipoProblema: '',
   

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
        case 'modifica_ediId':
            return { ...state, ediId: action.payload }
        case 'modifica_ediAutorId':
            return { ...state, ediAutorID: action.payload }
        case 'modifica_ediTipoDeProblemaId':
            return { ...state, ediTipoDeProblemaId: action.payload }
        case 'modifica_ediDescricao':
            return { ...state, ediDescricao: action.payload }
        case 'modifica_ediDataCriacao':
            return { ...state, ediDataCriacao: action.payload }
        case 'modifica_ediBairro':
            return { ...state,ediBairro: action.payload }
        case 'modifica_ediRua':
            return { ...state,ediRua: action.payload }
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
        case 'carregamento_problema_sucesso':
            state.denuncias = _.values(action.payload.denuncias)   
            state.avaliacoes = _.values(action.payload.avaliacoes)
        return {
            ...state,
            id: action.payload.id,
            autorId: action.payload.autorId,
            tipoDeProblemaId: action.payload.tipoDeProblemaId,
            descricao: action.payload.descricao,
            dataCriacao: action.payload.dataCriacao,
            bairro: action.payload.bairro,
            rua: action.payload.rua,
            
            
            nomeAutor: action.nomeAutor,
            tituloTipoProblema: action.tituloTipo
        }
        case 'limpa_todos_dadosProblema_exeto':
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
    }
    return state;
}