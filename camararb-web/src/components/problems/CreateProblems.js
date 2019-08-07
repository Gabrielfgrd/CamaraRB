import React, { Component } from 'react'

class CreateProblems extends Component {
    state = {
        titulo: '',
        descricao: '',
        bairro: '',
        rua: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
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
                    <h5 className="grey-text text-darken-3">Criar Problema</h5>
                    <div className="input-field">
                        <label htmlFor="title">Título</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea  id="descricao" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="bairro">Bairro</label>
                        <input type="text" id="bairro" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="rua">Rua</label>
                        <input type="text" id="rua" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn indigo darken-1 z-depth-0"> Criar </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateProblems
