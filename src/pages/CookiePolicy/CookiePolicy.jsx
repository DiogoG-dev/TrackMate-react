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
                        Este site utiliza cookies para melhorar sua experiência de navegação. Cookies são pequenos arquivos de texto 
                        armazenados no seu dispositivo sempre que você acessa um site, e ajudam a garantir o funcionamento adequado da 
                        plataforma, além de coletar informações relevantes para melhorias e personalizações.
                    </p>
                    <h3>Tipos de Cookies Utilizados</h3>
                    <ul>
                        <li>
                            <strong>Essenciais:</strong> Necessários para o funcionamento básico do site. Sem eles, recursos fundamentais 
                            podem não funcionar corretamente.
                            </li>
                        <li>
                            <strong>Desempenho:</strong> Coletam informações sobre como os visitantes interagem com o site (páginas 
                            acessadas, tempo de navegação etc.), permitindo melhorias constantes na usabilidade.
                            </li>
                        <li>
                            <strong>Funcionais:</strong> Permitem que o site lembre suas preferências e escolhas anteriores, como idioma ou 
                            localização, oferecendo uma experiência mais personalizada.
                            </li>
                        <li>
                            <strong>Marketing:</strong> Utilizados para apresentar anúncios relevantes ao usuário, com base em seus 
                            interesses e comportamento de navegação (se aplicável).
                        </li>
                    </ul>
                    <h3>Gerenciamento de Cookies</h3>
                    <p>
                        Você pode configurar seu navegador para recusar todos os cookies ou para alertar sempre que um cookie estiver sendo 
                        enviado. No entanto, a desativação de alguns tipos de cookies pode afetar a funcionalidade e a experiência de uso 
                        do site.
                    </p>
                    <h3>Consentimento</h3>
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