import './Header.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BuyButton } from '../../common/BuyButton/BuyButton.jsx';

export function Header() {
    // Lida com o comportamento do Menu e Navegação Mobile
    function toggleMenu() {
        const navResponsive = document.querySelector('.nav-responsive');
        const menuHamburguer = document.querySelector('.menu-hamburguer');

        menuHamburguer.classList.toggle('change');
        navResponsive.classList.toggle('show');
    }

    // Atribui ao Menu o evento de Clique
    useEffect(() => {
        const menuHamburguer = document.querySelector('.menu-hamburguer');
        if (menuHamburguer) {
            menuHamburguer.addEventListener('click', toggleMenu)
        }
    }, [])

    return (
        <header>
            <nav className="nav-container">
                <Link to={'/'} className="logo"><div className="outer-circle"><div className="inner-circle"></div></div><span>TrackMate</span></Link>
                <div className="nav-contents">
                    <Link to={'pageNotFound'} className="faq"><span>FAQ</span></Link>
                    <Link to={'pageNotFound'} className="login"><i className="fa-solid fa-user"></i><span>Login</span></Link>
                    <Link to={'pageNotFound'} className="bag"><i className="fa-solid fa-bag-shopping"></i></Link>
                    <Link to={'pageNotFound'} className="buy-button">Comprar agora</Link>
                    <div className="menu-hamburguer">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </nav>

            <div className="nav-responsive">
                <div className="login-content">
                    <Link to={'pageNotFound'} className="login"><i className="fa-solid fa-user"></i><span>Login</span></Link>
                </div>
                <Link to={'pageNotFound'} className="faq"><span>FAQ</span></Link>
                <BuyButton />
            </div>
        </header>
    )
}