import './Bag.css';
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';
import { Item } from '../../components/common/Item/Item.jsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Bag() {
    const [showPromoCode, setShowPromoCode] = useState(false);
    const [showObservation, setShowObservation] = useState(false);
    const [haveItems, setHaveItems] = useState(0);
    const [totalValue, setTotalValue] = useState(0);

    useEffect(() => {
        if (localStorage.length > 0) {
            setHaveItems(true);
        } else {
            setHaveItems(false);
        }
    }, [])

    useEffect(() => {
        let total = 0;

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const item = JSON.parse(localStorage.getItem(key));
            total += item.price;
        }

        setTotalValue(total)
    }, [])

    return (
        <>
            <Header />
            <div className="bag-container">
                <div className="bag-content" style={{display: haveItems ? 'flex' : 'none'}}>
                    <div className="bag-items">
                        <h2 className='my-bag'>Minha Sacola</h2>
                        <div className="items">
                            <Item />
                        </div>
                        <div className='promotional-code'>
                            <label className="label-promotional-code" onClick={() => setShowPromoCode(!showPromoCode)}>Insira o código promocional</label>
                            { showPromoCode && <div className="input-button-promotional-code">
                                <input type="text" className="input-promocional-code" />
                                <button className="enter-promocional-code">OK</button>
                            </div>}
                        </div>
                        <div className="observations">
                            <label className="label-observations" onClick={() => setShowObservation(!showObservation)}>Adicione uma observação</label>
                            { showObservation && <textarea type="text" className="input-observations" placeholder='Por exemplo: Não entregar na terça'/> }
                        </div>
                    </div>
                    <div className="order-summary">
                        <h2 className='title'>Resumo do Pedido</h2>
                        <div className="subtotal">
                            <h3>Subtotal</h3>
                            <span className="subtotal-value">R$ {totalValue.toFixed(2)}</span>
                        </div>
                        <h3 className='estimated-delivery'>Estimar Entrega</h3>
                        <div className='total-container'>
                            <h2>Total</h2>
                            <span className="total-value">R$ {totalValue.toFixed(2)}</span>
                        </div>
                        <button className='pay-button'>Pagar Agora</button>
                        <span className='secure-checkout'><i className="fa-solid fa-lock"></i>Checkout Seguro</span>
                    </div>
                </div>
                <div className="empty-bag-container" style={{display: haveItems ? 'none' : 'flex'}}>
                    <h2 className='my-bag'>Minha Sacola</h2>
                    <div className="empty-bag-content">
                        <h3 className='empty-bag-title'>A sacola está vazia</h3>
                        <Link to='/' className='continue-browsing'>Continuar navegando</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
