import './HeroSection.css';
import { BuyButton } from '../../common/BuyButton/BuyButton.jsx';

export function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="product-presentation">
                    <span className="hero-text">Tenha uma rotina diária</span>
                    <h1 className="hero-main-title">TrackMate 0.4 XE</h1>
                    <h2 className="hero-secondary-title">O smartwatch que motiva você em cada passo</h2>
                    <BuyButton />
                </div>
                <img src='/TrackMate-react/imgs/bracelets/newFirstFold.avif' className="product-image"></img>
            </div>
        </section>
    )
}