import './BuyButton.css';
import { Link } from 'react-router-dom';

export function BuyButton() {
    return (
        <Link to={'/productPage'} className="buy-button">Comprar agora</Link>
    )
}