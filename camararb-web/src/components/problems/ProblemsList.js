import React from 'react';
import ProblemsSummary from './ProblemsSummary'

const ProblemsList = () => {
    return (
        <div className="seção lista-Problemas">
            <ul className="center">
            <ProblemsSummary />
            <ProblemsSummary />
            <ProblemsSummary />
            <ProblemsSummary />
            <ProblemsSummary />
            <ProblemsSummary />
            </ul>
        </div>
    )
}

export default ProblemsList