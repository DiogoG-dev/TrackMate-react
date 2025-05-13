import './Header.css'

export function Header() {
    return (
        <header>
            <nav class="nav-container">
                <a href="./index.html" class="logo"><div class="outer-circle"><div class="inner-circle"></div></div><span>TrackMate</span></a>
                <div class="nav-contents">
                    <a class="faq"><span>FAQ</span></a>
                    <a class="login"><i class="fa-solid fa-user"></i><span>Login</span></a>
                    <a class="bag"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="./index.html" class="buy-button">Comprar agora</a>
                </div>
            </nav>
        </header>
    )
}