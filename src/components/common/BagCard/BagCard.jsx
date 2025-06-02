import './BagCard.css';
import { useEffect, useState } from 'react';
import { Header } from '../../layouts/Header/Header.jsx';
import { Footer } from '../../layouts/Footer/Footer.jsx';

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
        <>
            <Header />
            <div className="bag-container">
                <div className="bag-content">
                    <div className="bag-items">
                        <h2>Minha Sacola</h2>
                        <div className="items">
                            <img src="/TrackMate-react/imgs/bracelets/braceleteAzul.png" alt="" className="img-item" />
                            <div className="info-item">
                                <h3>TrackMate 0.4 XE</h3>
                                <span className='unit-value'>R$ 85,00</span>
                                <span className="color">Cor: Azul</span>
                            </div>
                            <div className="amount">2</div>
                            <div className="total-value-item">R$ 170,00</div>
                            <div className="trash">Lixo</div>
                        </div>
                        <div className='promotional-code'>
                            <label className="label-promotional-code">Insira o código promocional</label>
                            <div className="input-button-promotional-code">
                                <input type="text" className="input-promocional-code" />
                                <button className="enter-promocional-code">OK</button>
                            </div>
                        </div>
                        <div className="observations">
                            <label className="label-observations">Adicione uma observação</label>
                            <textarea type="text" className="input-observations" />
                        </div>
                    </div>
                    <div className="order-summary">
                        <h2>Resumo do Pedido</h2>
                        <div className="subtotal">
                            <h3>Subtotal</h3>
                            <span className="subtotal-value">R$ 85,00</span>
                        </div>
                        <h3 className='estimated-delivery'>Estimar Entrega</h3>
                        <div className='total-container'>
                            <h2>Total</h2>
                            <span className="total-value">R$ 85,00</span>
                        </div>
                        <button className='pay-button'>Pagar Agora</button>
                        <span className='secure-checkout'>Checkout Seguro</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
