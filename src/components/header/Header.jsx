import { useEffect } from 'react';
import './Header.css'
import { useNavigation } from '../../contexts/NavigationContext';

export function Header() {
    // Navegação
    const { navigateTo } = useNavigation()

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
                <div onClick={() => navigateTo('home')} className="logo"><div className="outer-circle"><div className="inner-circle"></div></div><span>TrackMate</span></div>
                <div className="nav-contents">
                    <div onClick={() => navigateTo('pageNotFound')} className="faq"><span>FAQ</span></div>
                    <div onClick={() => navigateTo('pageNotFound')} className="login"><i className="fa-solid fa-user"></i><span>Login</span></div>
                    <div onClick={() => navigateTo('pageNotFound')} className="bag"><i className="fa-solid fa-bag-shopping"></i></div>
                    <div onClick={() => navigateTo('pageNotFound')} className="buy-button">Comprar agora</div>
                    <div className="menu-hamburguer">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </nav>

            <div className="nav-responsive">
                <div className="login-content">
                    <div onClick={() => navigateTo('pageNotFound')} className="login"><i className="fa-solid fa-user"></i><span>Login</span></div>
                </div>
                <div onClick={() => navigateTo('pageNotFound')} className="faq"><span>FAQ</span></div>
                <div onClick={() => navigateTo('pageNotFound')} className="buy-button">Comprar agora</div>
            </div>
        </header>
    )
}