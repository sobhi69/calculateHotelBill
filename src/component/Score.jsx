import React from 'react'

const Score = ({index,questions,score}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p>Quetion {index + 1} out of {questions.length}</p>
            <p>Score: {score}</p>
        </div>
    )
}

export default Score
