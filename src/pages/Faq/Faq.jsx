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
                    <Question questionContentId='question-content-1' arrowId='arrow-1' responseId='response-1' question={faqData[0].question} response={faqData[0].response}  />
                    <Question questionContentId='question-content-2' arrowId='arrow-2' responseId='response-2' question='a' response='f' />
                </div>
            </main>
            <Footer />
        </>
    )
}