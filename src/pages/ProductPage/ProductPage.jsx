import './ProductPage.css'
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';

export function ProductPage() {
    return (
        <>
            <Header />
            <main className='main-container-product'>
                <div className="content-product">

                    <div className="product-apresentation">
                        <div className="product-apresentation-image">
                            <div className="main-image"></div>
                            <div className="image-carousel">1</div>
                        </div>
                        <div className="product-description">2</div>
                    </div>
                    
                    <div className="information-purchase-and-terms">

                        <div className="information">
                            <div className="name-sku-product">
                                <h2>TrackMate 0.4 XE</h2>
                                <h5>SKU: 0001</h5>
                            </div>
                            <h3 className="value">R$ 85,00</h3>
                            <div className="colors">
                                <h5>Cor *</h5>
                            </div>
                            <div className="amount">
                                <h5>Quantidade *</h5>
                            </div>
                        </div>

                        <button className='add-to-bag'>Adicionar a sacola</button>

                        <div className="terms">
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    )
}