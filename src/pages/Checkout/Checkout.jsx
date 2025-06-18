import './Checkout.css';
import { Link } from 'react-router-dom';

export function Checkout() {
    return (
        <>
            <header className='header-checkout-container'>
                <Link to={'/'} className="logo"><div className="outer-circle"><div className="inner-circle"></div></div><span>TrackMate</span></Link>
            </header>
            <main className='checkout-container'>
                <div className="checkout-content">
                    <div className="checkout-flow-container">
                        <div className="payment-center-title">
                            <h2>Central de Pagamento</h2>
                        </div>
                        <div className="checkout-flow">
                            <div className='flow payment-method'>Formas de Pagamento</div>
                            <div className="flow payment-information">Informações de Pagamento</div>
                            <div className='flow payment-confirmation'>Confirmação</div>
                            <div className="flow tracking">Rastreio</div>
                        </div>
                    </div>
                    <div className="checkout-flow-contents">
                        <div className="payment-method-container">
                            <h3>Formas de Pagamento</h3>
                            <div className="payments ayment-pix">Pix</div>
                            <div className="payments payment-card">Cartão</div>
                            <div className="payments payment-ticket">Boleto</div>
                        </div>
                        <div className="payment-information-container">
                            <div className="pix-qrcode"></div>
                            <div className="card-informations"></div>
                            <div className="ticket-code"></div>
                        </div>
                        <div className="payment-confirmation-container"></div>
                        <div className="tracking-container"></div>
                    </div>
                </div>
            </main>
            <footer className='footer-checkout-container'></footer>
        </>
    )
}