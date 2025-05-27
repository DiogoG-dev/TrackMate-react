import './Question.css';
import { useEffect } from 'react';

export function Question({ questionContentId, arrowId, responseId, question, response }) {

    function toggleQuestion() {
        const arrow = document.getElementById(arrowId)
        const response = document.getElementById(responseId)

        arrow.classList.toggle('change');
        response.classList.toggle('show');
    }

    useEffect(() => {
        const questionContainer = document.getElementById(questionContentId)
        if(questionContainer) {
            questionContainer.addEventListener('click', toggleQuestion)
        }
    }, [])

    return (
        <div className='question-container'>
            <div className="question-content" id={questionContentId}>
                <h4 className='question'>{question}</h4>
                <span id={arrowId}><i class="fa-solid fa-angle-down"></i></span>
            </div>
            <p className='response' id={responseId}>{response}</p>
        </div>
    )
}