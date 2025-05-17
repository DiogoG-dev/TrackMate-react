import { Link } from 'react-router-dom';
import './BuyButton.css';

export function BuyButton() {
    return (
        <Link to={'pageNotFound'} className="buy-button">Comprar agora</Link>
    )
}