import './CookiePolicy.css';
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';

export function CookiePolicy() {
    return (
        <>
            <Header />
            <main className="cookie-policy-container">
                <div className="cookie-policy-content">
                    <h2>Política de Cookies</h2>
                    <p>
                        Este site utiliza cookies para melhorar a experiência do usuário. Cookies são pequenos arquivos de texto armazenados no seu 
                        dispositivo quando você visita um site.
                    </p>
                    <h3>Tipos de Cookies Utilizados</h3>
                    <ul>
                        <li><strong>Essenciais:</strong> Necessários para o funcionamento básico do site.</li>
                        <li><strong>Desempenho:</strong> Coletam dados sobre como os usuários interagem com o site.</li>
                        <li><strong>Funcionais:</strong> Permitem lembrar preferências e personalizar a experiência.</li>
                        <li><strong>Marketing:</strong> Utilizados para exibir anúncios relevantes, se aplicável.</li>
                    </ul>
                    <p>
                        Você pode configurar seu navegador para recusar todos os cookies ou para alertar quando um cookie estiver sendo enviado.
                    </p>
                    <p>
                        Ao continuar navegando em nosso site, você concorda com o uso de cookies conforme descrito nesta política.
                    </p>
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