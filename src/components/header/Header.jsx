import { useEffect } from 'react';
import './Header.css'

export function Header() {
    function toggleMenu() {
        const navResponsive = document.querySelector('.nav-responsive');
        const menuHamburguer = document.querySelector('.menu-hamburguer');

        menuHamburguer.classList.toggle('change');
        navResponsive.classList.toggle('show');
    }

    useEffect(() => {
        const menuHamburguer = document.querySelector('.menu-hamburguer');
        if (menuHamburguer) {
            menuHamburguer.addEventListener('click', toggleMenu)
        }
    }, [])
    return (
        <header>
            <nav className="nav-container">
                <div className="logo"><div className="outer-circle"><div className="inner-circle"></div></div><span>TrackMate</span></div>
                <div className="nav-contents">
                    <div className="faq"><span>FAQ</span></div>
                    <div className="login"><i className="fa-solid fa-user"></i><span>Login</span></div>
                    <div className="bag"><i className="fa-solid fa-bag-shopping"></i></div>
                    <div href="./index.html" className="buy-button">Comprar agora</div>
                    <div className="menu-hamburguer">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </nav>

            <div className="nav-responsive">
                <div className="login-content">
                    <div className="login"><i className="fa-solid fa-user"></i><span>Login</span></div>
                </div>
                <div className="faq"><span>FAQ</span></div>
                <div href="./index.html" className="buy-button">Comprar agora</div>
            </div>
        </header>
    )
}