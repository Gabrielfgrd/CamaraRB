import React from 'react';

const ProblemsSummary = ({problem}) => {
    return (
        <div className="card z-depth-0 sumario-problema">
            <div className="card-content indigo-text text-darken-2 ">
                <span className="card-title">{problem.titulo}</span>
                <p>Postado pelo Gabriel</p>
                <p className="indigo-text">3 de Janeiro, 12:00</p>
            </div>
        </div>
    )
}

export default ProblemsSummary