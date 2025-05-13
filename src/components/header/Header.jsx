import { useEffect } from 'react';
import './Header.css'

export function Header() {
    function toggleMenu() {
        const navResponsive = document.querySelector('.nav-responsive');
        const menuHamburguer = document.querySelector('.menu-hamburguer');

        menuHamburguer.classList.toggle('change');

        navResponsive.style.display = menuHamburguer.classList.contains('change') ? 'flex' : 'none';
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
                <a href="./index.html" className="logo"><div className="outer-circle"><div className="inner-circle"></div></div><span>TrackMate</span></a>
                <div className="nav-contents">
                    <a className="faq"><span>FAQ</span></a>
                    <a className="login"><i className="fa-solid fa-user"></i><span>Login</span></a>
                    <a className="bag"><i className="fa-solid fa-bag-shopping"></i></a>
                    <a href="./index.html" className="buy-button">Comprar agora</a>
                    <div className="menu-hamburguer">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>
            </nav>

            <div className="nav-responsive">
                <div className="login-content">
                    <a className="login"><i className="fa-solid fa-user"></i><span>Login</span></a>
                </div>
                <a className="faq"><span>FAQ</span></a>
                <a href="./index.html" className="buy-button">Comprar agora</a>
            </div>
        </header>
    )
}