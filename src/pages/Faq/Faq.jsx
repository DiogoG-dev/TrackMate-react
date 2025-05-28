import './Faq.css';
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';
import { Question } from '../../components/common/Question/Question.jsx';
import faqData from '../../data/faqs.json'

export function Faq() {
    return (
        <>
            <Header />
            <main className='main-container'>
                <div className="content">
                    <h2>FAQ</h2>
                    <h3>Perguntas frequentes</h3>
                    {faqData.map((item, index) => (
                        <Question 
                        key={index}
                        questionContentId={index} 
                        arrowId={index} 
                        responseId={index} 
                        question={item.question} 
                        response={item.response} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    )
}