export const createProblem = (problem) => {
    return (dispatch, getState) => {
        //faz uma chamada assincrona ao bd
        dispatch({ type: 'CREATE_PROBLEM', problem});
    }
};