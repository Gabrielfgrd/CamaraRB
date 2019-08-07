import React from 'react'

const ProblemsDetails = (props) => {
    const id=props.match.params.id;
    return (
        <div className="container secao detalhe-problema">
            <div className="card z-depth-0">
                <div className="card-content" >
                    <span className="card-title">Titulo do Problema - {id}</span>
                    <p>Eu tenho um buraco de aproximadamente 10 metros na minha rua que impede a passagem do carro</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Postado por Gabriel</div>
                    <div>2 de setembro, 12:00</div>
                </div>
            </div>
        </div>
    )
}

export default ProblemsDetails
