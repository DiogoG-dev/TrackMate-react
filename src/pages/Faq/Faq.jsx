import './Faq.css';
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';
import { Question } from '../../components/common/Question/Question.jsx';
import faqData from '../../data/faq.json'

export function Faq() {
    console.log(faqData)
    return (
        <>
            <Header />
            <main className='main-container'>
                <div className="content">
                    <h2>FAQ</h2>
                    <h3>Perguntas frequentes</h3>
                    <Question questionContentId='question-content-1' arrowId='arrow-1' responseId='response-1' question={faqData[0].question} response={faqData[0].response} />
                    <Question questionContentId='question-content-2' arrowId='arrow-2' responseId='response-2' question={faqData[1].question} response={faqData[1].response} />
                    <Question questionContentId='question-content-3' arrowId='arrow-3' responseId='response-3' question={faqData[2].question} response={faqData[2].response} />
                    <Question questionContentId='question-content-4' arrowId='arrow-4' responseId='response-4' question={faqData[3].question} response={faqData[3].response} />
                    <Question questionContentId='question-content-5' arrowId='arrow-5' responseId='response-5' question={faqData[4].question} response={faqData[4].response} />
                    <Question questionContentId='question-content-6' arrowId='arrow-6' responseId='response-6' question={faqData[5].question} response={faqData[5].response} />
                    <Question questionContentId='question-content-7' arrowId='arrow-7' responseId='response-7' question={faqData[6].question} response={faqData[6].response} />
                    <Question questionContentId='question-content-8' arrowId='arrow-8' responseId='response-8' question={faqData[7].question} response={faqData[7].response} />
                    <Question questionContentId='question-content-9' arrowId='arrow-9' responseId='response-9' question={faqData[8].question} response={faqData[8].response} />
                    <Question questionContentId='question-content-10' arrowId='arrow-10' responseId='response-10' question={faqData[9].question} response={faqData[9].response} />
                    <Question questionContentId='question-content-11' arrowId='arrow-11' responseId='response-11' question={faqData[10].question} response={faqData[10].response} />
                </div>
            </main>
            <Footer />
        </>
    )
}