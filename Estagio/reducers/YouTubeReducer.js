import _ from 'lodash';

const INITIAL_STATE = {
    Videos: [], 
    id: '',
    videoId: '',
   
}
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifica_id':
            return { ...state, problemas: action.payload }
        case 'modifica_videoId':
            return { ...state, tiposDeProblemas: action.payload }
    }
    return state;
}
    