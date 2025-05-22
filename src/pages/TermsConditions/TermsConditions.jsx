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
                        Ao acessar e utilizar este site ou adquirir produtos da marca TrackMate, você concorda integralmente com os termos 
                        e condições estabelecidos abaixo. Caso não concorde, recomendamos que interrompa a navegação e não utilize nossos 
                        serviços.
                    </p>
                    <h3>Uso do Site</h3>
                    <p>
                        Você concorda em utilizar o site e os produtos TrackMate de forma lícita, responsável e em conformidade com a 
                        legislação brasileira vigente. É proibido:
                    </p>
                    <ul>
                        <li>Utilizar o site para fins ilegais, fraudulentos ou abusivos;</li>
                        <li>Tentar acessar áreas restritas ou realizar engenharia reversa;</li>
                        <li>Violar direitos de terceiros, inclusive propriedade intelectual e privacidade.</li>
                    </ul>
                    <h3>Propriedade Intelectual</h3>
                    <p>
                        Todos os conteúdos disponíveis neste site — incluindo textos, imagens, vídeos, logotipos, marcas, layout, códigos e 
                        demais elementos — são de titularidade da TrackMate ou licenciados a ela, sendo protegidos pelas leis de direitos 
                        autorais e propriedade industrial.
                    </p>
                    <h3>Limitação de Responsabilidade</h3>
                    <p>
                        Nos esforçamos para manter as informações do site atualizadas e os serviços em pleno funcionamento. No entanto:
                    </p>
                    <ul>
                        <li>Não garantimos a disponibilidade contínua ou isenta de falhas da plataforma;</li>
                        <li>
                            Não nos responsabilizamos por perdas ou danos indiretos decorrentes do uso do site, interrupções temporárias, 
                            falhas técnicas, ou imprecisões de conteúdo
                        </li>
                    </ul>
                    <h3>Modificações</h3>
                    <p>
                        A TrackMate reserva-se o direito de alterar estes Termos e Condições a qualquer momento, sem aviso prévio. 
                        Recomendamos que você revise periodicamente este documento. O uso contínuo dos nossos serviços após a publicação 
                        das mudanças implica a aceitação das novas condições.
                    </p>
                    <h3>Contato e Dúvidas</h3>
                    <p>
                        Em caso de dúvidas, sugestões ou reclamações sobre nossos termos ou produtos, entre em contato pelo e-mail:
                        <span> suporte@trackmate.com</span>
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