import './Question.css';
import { useEffect } from 'react';

export function Question({ questionContentId, arrowId, responseId, question, response }) {

    function toggleQuestion() {
        const arrow = document.getElementById(`arrow-${arrowId}`)
        const response = document.getElementById(`response-${responseId}`)

        arrow.classList.toggle('change');
        response.classList.toggle('show');
    }

    useEffect(() => {
        const questionContainer = document.getElementById(`question-content-${questionContentId}`)
        if(questionContainer) {
            questionContainer.addEventListener('click', toggleQuestion)
        }
    }, [])

    return (
        <div className='question-container'>
            <div className="question-content" id={`question-content-${questionContentId}`}>
                <h4 className='question'>{question}</h4>
                <span id={`arrow-${arrowId}`}><i className="fa-solid fa-angle-down"></i></span>
            </div>
            <p className='response' id={`response-${responseId}`}>{response}</p>
        </div>
    )
}