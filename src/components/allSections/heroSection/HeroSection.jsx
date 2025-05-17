import './HeroSection.css'
import { BuyButton } from '../../buyButton/BuyButton'

export function HeroSection() {
    return (
        <section class="hero-section">
            <div class="hero-content">
                <div class="product-presentation">
                    <span class="hero-text">Tenha uma rotina diária</span>
                    <h1 class="hero-main-title">TrackMade 0.4 XE</h1>
                    <h2 class="hero-secondary-title">O smartwatch que motiva você em cada passo</h2>
                    <BuyButton />
                </div>
                <div class="product-image"></div>
            </div>
        </section>
    )
}