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

    // Lida com a Mudança da Cor de Fundo pelo Scroll
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    })

    return (
        <header className='main-header' id='main-header'>
            <nav className="nav-container">
                <Link to={'/'} className="logo"><div className="outer-circle"><div className="inner-circle"></div></div><span>TrackMate</span></Link>
                <div className="nav-contents">
                    <Link to={'/faq'} className="faq">FAQ</Link>
                    <Link to={'/login'} className="login"><i className="fa-solid fa-user"></i>Login</Link>
                    <Link to={'/bag'} className="bag"><i className="fa-solid fa-bag-shopping"></i></Link>
                    <BuyButton />
                    <div className="menu-hamburguer">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </nav>

            <div className="nav-responsive">
                <div className="login-content">
                    <Link to={'/pageNotFound'} className="login"><i className="fa-solid fa-user"></i>Login</Link>
                </div>
                <Link to={'/faq'} className="faq">FAQ</Link>
                <BuyButton />
            </div>
        </header>
    )
}