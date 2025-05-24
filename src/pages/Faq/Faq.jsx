import './Faq.css';
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';

export function Faq() {
    return (
        <>
            <Header />
            <main className='main-container'>
                <div className="content">
                    <h2>FAQ</h2>
                    <h3>Perguntas frequentes</h3>
                    <div className='test-container open'>
                        <h4 className='title-1'>Conteúdo teste?</h4>
                        <p>Sim, esse conteúdo é um teste!</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}