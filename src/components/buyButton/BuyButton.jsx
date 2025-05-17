import './BuyButton.css';
import { Link } from 'react-router-dom';

export function BuyButton() {
    return (
        <Link to={'pageNotFound'} className="buy-button">Comprar agora</Link>
    )
}