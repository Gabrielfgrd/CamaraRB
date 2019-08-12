import React from 'react';
import ProblemsSummary from './ProblemsSummary'

const ProblemsList = ({problems}) => {
    return (
        <div className="seção lista-Problemas">
          {problems && problems.map(problem => {
            return(
                <ProblemsSummary problem={problem} key={problem.id}/>
            )
          })}
        </div>
    )
}

export default ProblemsList