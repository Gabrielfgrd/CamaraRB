import _ from 'lodash';

export const modificaId = (texto) => {
    return {
        type: 'modifica_id',
        payload: texto
    }
}
export const modificaVideoId = (texto) => {
    return {
        type: 'modifica_videoId',
        payload: texto
    }
}