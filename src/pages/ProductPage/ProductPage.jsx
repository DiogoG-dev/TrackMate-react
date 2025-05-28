import './ProductPage.css'
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';
import { useEffect, useState } from 'react';

export function ProductPage() {
    const [color, setColor] = useState('Branco');
    const [amount, setAmount] = useState(1)

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
                            <div className="bracelet-colors">
                                <h5>Cor *: {color}</h5>
                                <div className="choose-color">
                                    <input type="radio" className='colors' id='white' name='color' onChange={() => setColor('Branco')} checked={color === 'Branco'}/>
                                    <label htmlFor="white" className='labels label-white'></label>
                                    <input type="radio" className='colors' id='black' name='color'onClick={() => setColor('Preto')} />
                                    <label htmlFor="black" className='labels label-black'></label>
                                    <input type="radio" className='colors' id='blue' name='color' onClick={() => setColor('Azul')} />
                                    <label htmlFor="blue" className='labels label-blue'></label>
                                    <input type="radio" className='colors' id='purple' name='color' onClick={() => setColor('Roxo')} />
                                    <label htmlFor="purple" className='labels label-purple'></label>
                                    <input type="radio" className='colors' id='turquoise' name='color' onClick={() => setColor('Turquesa')} />
                                    <label htmlFor="turquoise" className='labels label-turquoise'></label>
                                </div>
                            </div>
                            <div className="amount-container">
                                <h5>Quantidade *</h5>
                                <div className="choose-amount">
                                    <button className={`minus ${amount === 1 ? 'minus-gray' : ''}`} id="minus" onClick={() => setAmount(amount - 1)} disabled={amount === 1}><i className="fa-solid fa-minus"></i></button>
                                    <div className="amount">{amount}</div>
                                    <button className="plus" onClick={() => setAmount(amount + 1)}><i className="fa-solid fa-plus"></i></button>
                                </div>
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