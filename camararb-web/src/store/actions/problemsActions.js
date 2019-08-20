import Firebase from 'firebase';


export const createProblem = (problem) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //faz uma chamada assincrona ao bd
        // const firestore = getFirestore();
        // firestore.collection('problemas').add({  
        const novoProblema = Firebase.database().ref().child('/problemas').push()
        novoProblema.set({
            ...problem,
            id: novoProblema.key,
            titulo: 'TO AQUI2',
            descricao: 'TO AQUI',
            bairro: 'TO AQUI',
            rua: 'TO AQUI',
            authorId: 678,
            createdAt: Date(),
        }).then(() => {
            dispatch({ type: 'CREATE_PROBLEM', problem });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROBLEM_ERROR', err });
        })

    }
};