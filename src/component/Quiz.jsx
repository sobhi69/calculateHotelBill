import React, { useState } from 'react'
import Score from './Score'

const Quiz = () => {
    const [index, setIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [questions, setQuestions] = useState([
        {
            id: 0,
            title: 'what kinda of soping does javascript use ?',
            options: ['Literal', 'Lexical', 'Segmental', 'Sequential'],
            correctAnswer: 'Lexical',
        },
        {
            id: 1,
            title: '99 + 7 ?',
            options: ['100', '92', '106', 'the weast'],
            correctAnswer: '106',
        },
        {
            id: 2,
            title: 'in arrays we start at index ?',
            options: ['zero', 'two', 'three', 'array.length'],
            correctAnswer: 'zero',
        },
        {
            id: 3,
            title: "what's up ?",
            options: ['Oo', '99', 'pretty cool', 'fine'],
            correctAnswer: 'Oo',
        },
    ])
    const handleSubmit = (option) => {

        const nextQuetion = index + 1

        if (nextQuetion < questions.length) {
            if (option === questions[index].correctAnswer) {
                setScore(prev => prev + 1)
            }
            setIndex(nextQuetion)
        } else {
            // const playAgian = confirm('play agian?')
            alert(` your score :${option === questions[index].correctAnswer ? score + 1 : score}, play agian?`)
            setIndex(0)
            setScore(0)
        }
    }




    return (

        <>
            <div className="container" style={{ width: '300px' }}>
                <Score
                    questions={questions}
                    index={index}
                    score={score}
                />
                <div>
                    <h2>{questions[index].title}</h2>
                    <div className="options">
                        {questions[index].options.map((option, idx) => (
                            <button onClick={() => handleSubmit(option)}>{option}</button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quiz


// what we wnna do here is simply whenever we select