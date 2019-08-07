import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email:'',
        senha: '',
        primeiroNome: '',
        ultimoNome: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Cadastrar</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="primeiroNome">Primeiro Nome</label>
                        <input type="text" id="primeiroNome" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="segundoNome">Ultimo Nome</label>
                        <input type="text" id="segundoNome" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn indigo darken-1 z-depth-0"> Cadastrar </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp
