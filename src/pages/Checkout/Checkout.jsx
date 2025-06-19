import './Checkout.css';
import { Link } from 'react-router-dom';

export function Checkout() {
    return (
        <>
            <header className='header-checkout-container'>
                <Link to={'/'} className="logo"><div className="outer-circle"><div className="inner-circle"></div></div><span>TrackMatePay</span></Link>
            </header>
            <main className='checkout-container'>
                <div className="payment-methods">
                    <h2>Formas de Pagamento</h2>
                    <div className='methods'>
                        <div className="card-container">Cartão de Crédito</div>
                        <div className="ticket-bank-container">Boleto Bancário</div>
                        <div className="pix-container">Pix</div>
                    </div>
                </div>
                <div className="form-container"></div>
                <div className="order-summary">
                        <h2 className='title'>Resumo do Pedido</h2>
                        <div className="product-container">
                            <h4>Itens</h4>
                            <div className="itens">
                                <span>2x TrackMate Azul</span>
                                <span>1x TrackMate Preto</span>
                                <span>3x TrackMate Turquesa</span>
                            </div>
                        </div>
                        <div className="chosen-method">
                            <h4>Forma de Pagamento</h4>
                            <span>Cartão de Crédito - 2x de R$ 75,00</span>
                        </div>
                        <div className='total-container'>
                            <h2>Total</h2>
                            <span className="total-value">R$ 150,00</span>
                        </div>
                        <Link to="/pageNotFound" className='pay-button'>Finalizar Compra</Link>
                    </div>
            </main>
            <footer className='footer-checkout-container'>
                <span>TrackMatePay Tecnologia LTDA.</span>
                <span>Checkout 100% seguro.</span>
            </footer>
        </>
    )
}