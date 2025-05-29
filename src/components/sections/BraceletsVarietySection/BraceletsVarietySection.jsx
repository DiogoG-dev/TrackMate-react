import './BraceletsVarietySection.css';
import { BuyButton } from '../../common/BuyButton/BuyButton.jsx'

export function BraceletsVarietySection() {
    return (
        <section className="bracelets-variety-section">
            <div className="bracelets-variety-content">
                <i className="fa-solid fa-eye"></i>
                <h3>Combine sua pulseira com seu estilo</h3>
                <p>
                    O <b>TrackMate 0.4 XE</b> conta com uma variedade de braceletes que se adaptam ao seu visual — do esportivo ao casual — para 
                    você treinar com estilo todos os dias.
                </p>
            </div>
            <div className="bg-bracelets-img">
                <img className="bracelets-img" src="/TrackMate-react/imgs/bracelets/braceletsVariety.avif" alt="" />
            </div>
            <BuyButton />
        </section>
    )
}