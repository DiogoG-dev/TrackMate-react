import './Checkout.css';
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';

export function Checkout() {
    return (
        <>
            <Header />
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
            <Footer />
        </>
    )
}