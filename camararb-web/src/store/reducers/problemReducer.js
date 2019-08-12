const initState ={
    problems: [
       {id: '1', titulo: 'help me' , descricao: 'bla bla bla', bairro: 'Xavier Maia', rua:'Edmundo Pinto'},
       {id: '2', titulo: 'problema eletrico' , descricao: 'bla bla bla', bairro: 'Conquista', rua:'Valdir'},
       {id: '3', titulo: 'buraco' , descricao: 'bla bla bla', bairro: 'Cidade nova', rua:'zxcxcaca'} 
    ]
}

const problemReducer = (state = initState,action) => {
    switch (action.type){
        case 'CREATE_PROBLEM':
        console.log('prblema criado', action.problem)
    }
    return state
}

export default problemReducer