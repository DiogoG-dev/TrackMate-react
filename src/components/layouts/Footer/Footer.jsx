import './Footer.css';
import { Link } from 'react-router-dom';

export function Footer() {
    return (
        <footer>
            <div className="links">
                <div className="social-media">
                    <ul className="list-media">
                        <li><a href="https://github.com/DiogoG-dev" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                        <li><a href="https://diogog-dev.github.io/Portifolio/" target="_blank" rel="noopener noreferrer">Portifólio</a></li>
                        <li><a href="https://www.linkedin.com/in/diogogabriel-developer/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="mailto:diogogabriel.tech@gmail.com">Gmail</a></li>
                    </ul>
                </div>
                <div className="legal-information">
                    <ul className="list-legal">
                        <li><Link to={'/CookiePolicy'}>Política de Cookies</Link></li>
                        <li><Link to={'/pageNotFound'}>Termos e Condições</Link></li>
                        <li><Link to={'/pageNotFound'}>Entregas e Devoluções</Link></li>
                        <li><Link to={'/pageNotFound'}>Política de Privacidade</Link></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="rights-flags">
                <p className="rights">© 2025 por Diogo Gabriel. Inspirado no <a href="https://pt.wix.com/website-template/view/html/2964" target="_blank" rel="noopener noreferrer">TrackMate</a> da Wix.com</p>
                <div className="flags">
                    <img src="/TrackMate-react/imgs/flags/visa.png" alt="visa" />
                    <img src="/TrackMate-react/imgs/flags/mastercard.png" alt="mastercard" />
                    <img src="/TrackMate-react/imgs/flags/unionpay.png" alt="chinaunionpay" />
                    <img src="/TrackMate-react/imgs/flags/jcb.png" alt="jcb" />
                    <img src="/TrackMate-react/imgs/flags/amex.png" alt="amex" />
                    <img src="/TrackMate-react/imgs/flags/discover.png" alt="discover" />
                    <img src="/TrackMate-react/imgs/flags/diners.png" alt="diners" />
                    <img src="/TrackMate-react/imgs/flags/paypal.png" alt="paypal" />
                </div>
            </div>
        </footer>
    );
}