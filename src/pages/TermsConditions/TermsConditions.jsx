import './TermsConditions.css';
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';

export function TermsConditions() {
    return (
        <>
            <Header />
            <main className="terms-conditions-container">
                <div className="terms-conditions-content">
                    <h2>Termos e Condições</h2>
                    <p>
                        Ao acessar este site, você concorda com os termos e condições descritos abaixo. Caso não concorde, por favor, não 
                        utilize nossos serviços.
                    </p>
                    <h3>Uso do Site:</h3>
                    <p>
                        Você se compromete a utilizar o TrackMate apenas para fins legais e de acordo com estes termos.
                    </p>
                    <h3>Propriedade Intelectual:</h3>
                    <p>
                        Todo o conteúdo do site (textos, imagens, código) é de propriedade do desenvolvedor ou licenciado e não pode ser 
                        reproduzido sem autorização.
                    </p>
                    <h3>Limitação de Responsabilidade:</h3>
                    <p>
                        Não nos responsabilizamos por perdas ou danos decorrentes do uso do site ou da indisponibilidade temporária dos 
                        serviços.
                    </p>
                    <h3>Modificações:</h3>
                    <p>
                        Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entram em vigor a partir de sua 
                        publicação.
                    </p>
                    <p className='disclaimer'>
                        <i><strong>Este site foi criado para fins educacionais.</strong> Os termos acima representam um exemplo de política 
                        aplicável em um contexto comercial.</i>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}