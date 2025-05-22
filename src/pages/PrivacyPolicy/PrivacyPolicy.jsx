import './PrivacyPolicy.css';
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';

export function PrivacyPolicy() {
    return (
        <>
            <Header />
            <main className="privacy-policy-container">
                <div className="privacy-policy-content">
                    <h2>Política de Privacidade</h2>
                    <p>
                        A sua privacidade é importante para nós. Esta política descreve como coletamos, usamos, armazenamos e protegemos 
                        suas informações pessoais quando você utiliza o site e os serviços do TrackMate.
                    </p>
                    <h3>Dados Coletados</h3>
                    <p>Podemos coletar as seguintes informações, quando fornecidas por você ou obtidas automaticamente durante a navegação:</p>
                    <ul>
                        <li>Nome e e-mail</li>
                        <li>Endereço IP e localização geográfica aproximada</li>
                        <li>Informações sobre seu navegador, dispositivo e sistema operacional</li>
                        <li>Dados de navegação e interação com o site</li>
                    </ul>
                    <h3>Uso das Informações</h3>
                    <p>Os dados coletados são utilizados para os seguintes fins:</p>
                    <ul>
                        <li>Melhorar a navegação, usabilidade e desempenho do site</li>
                        <li>Entrar em contato com você para fins de suporte ou comunicações importantes</li>
                        <li>Garantir a segurança da plataforma e prevenir fraudes</li>
                        <li>Cumprir obrigações legais, regulatórias ou judiciais, quando necessário</li>
                    </ul>
                    <h3>Compartilhamento de Dados</h3>
                    <p>
                        Não compartilhamos seus dados com terceiros, exceto nos seguintes casos:
                    </p>
                    <ul>
                        <li>Quando exigido por lei, decisão judicial ou solicitação de autoridades competentes</li>
                        <li>Para cumprimento de obrigações legais, fiscais ou regulatórias</li>
                        <li>
                            Quando necessário para a execução de serviços contratados, sempre com o devido cuidado com a segurança da 
                            informação
                        </li>
                    </ul>
                    <h3>Segurança</h3>
                    <p>
                        Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acessos não autorizados, 
                        perdas, destruição, alterações ou qualquer forma de tratamento inadequado.
                    </p>
                    <h3>Seus Direitos</h3>
                    <p>Em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
                    <ul>
                        <li>Confirmar a existência do tratamento de dados</li>
                        <li>Acessar, corrigir ou atualizar suas informações pessoais</li>
                        <li>Solicitar a exclusão de seus dados, quando legalmente possível</li>
                        <li>Revogar consentimentos a qualquer momento</li>
                    </ul>
                    <p>Para isso, entre em contato com nosso encarregado de dados (DPO): <span>privacidade@trackmate.com</span></p>
                    <p className='disclaimer'>
                        <i><strong>Este é um projeto demonstrativo.</strong> Não coletamos dados reais dos usuários, mas esta página simula como seria uma 
                        política de cookies para um sistema real.</i>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}