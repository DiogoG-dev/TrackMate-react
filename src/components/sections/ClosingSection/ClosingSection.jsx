import './ClosingSection.css';
import { BuyButton } from '../../common/BuyButton/BuyButton.jsx';

export function ClosingSection() {
    return (
        <section className="closing-section">
            <div className="closing-content">
                <i><div className="outer-circle"><div className="inner-circle"></div></div></i>
                <h2>O DISPOSITIVO QUE MUDA VIDAS</h2>
                <h3>Tenha hoje o seu TrackMate 0.4 XE</h3>
                <BuyButton />
                <img className='black-blue-bracelet' src="/TrackMate-react/imgs/bracelets/blackBlueBracelets.avif" alt="" />
            </div>
        </section>
    )
}