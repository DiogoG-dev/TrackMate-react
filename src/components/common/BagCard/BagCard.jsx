import { useEffect, useState } from 'react';
import './BagCard.css';

export function BagCard() {
    const [items, setItems] = useState({});
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const allItems = {};
        let amountSum = 0;
        let priceSum = 0;

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = JSON.parse(localStorage.getItem(key));
            
            if (value && value.amount && value.price) {
                allItems[key] = value;
                amountSum += value.amount;
                priceSum += value.price;
            }
        }

        setItems(allItems);
        setTotalAmount(amountSum);
        setTotalPrice(priceSum);
    }, []);

    return (
        <div className="bag-card-container">
            <div className="bag-card-header">
                <div className="bag-card-header-content">
                    <h2>Sacola</h2>
                    <span>{`(${totalAmount} itens)`}</span>
                </div>
                <div className="close-card-bag-card">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                </div>
            </div>

            <div className="bag-content">
                {Object.entries(items).map(([key, item]) => (
                    <div key={key} className="bag-item">
                        <h3>TrackMate 0.4 XE</h3>
                        <span>R$ 85,00</span><br />
                        <span>Cor {item.color}</span><br />
                        <span>Qtd: {item.amount}</span><br />
                        <span>R$ {item.price.toFixed(2)}</span><br /><br />
                    </div>
                ))}
            </div>

            <div className="bag-card-footer">
                <div className="bag-card-footer-content">
                    <h3>Subtotal</h3>
                    <span>{`R$ ${totalPrice.toFixed(2)}`}</span>
                </div>
                <button className="checkout">Checkout</button>
            </div>
        </div>
    );
}
