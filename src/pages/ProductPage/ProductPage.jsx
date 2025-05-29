import './ProductPage.css'
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';
import { useState } from 'react';
import { Question } from '../../components/common/Question/Question.jsx';
import termsData from '../../data/terms.json';

export function ProductPage() {
    const [color, setColor] = useState('Branco');
    const [amount, setAmount] = useState(1);

    return (
        <>
            <Header />
            <main className='main-container-product'>
                <div className="content-product">

                    <div className="product-apresentation">
                        <div className="product-apresentation-image">
                            <div className="main-image"><img className='bracelet-color' id='bracelet-color' src={`/TrackMate-react/imgs/folds/bracelete${color}.png`} alt="" /></div>
                            <div className="image-carousel">
                                <input type="radio" className="bracelet-colors" id="bracelet-white" name="bracelet-color" onChange={() => document.getElementById('bracelet-color').src = "/TrackMate-react/imgs/folds/braceleteBranco.png"} />
                                <label htmlFor="bracelet-white" className="bracelet-labels bracelet-label-white"></label>
                                <input type="radio" className='bracelet-colors' id='bracelet-black' name='bracelet-color' onClick={() => document.getElementById('bracelet-color').src = "/TrackMate-react/imgs/folds/braceletePreto.png"} />
                                <label htmlFor="bracelet-black" className='bracelet-labels bracelet-label-black'></label>
                                <input type="radio" className='bracelet-colors' id='bracelet-blue' name='bracelet-color' onClick={() => document.getElementById('bracelet-color').src = "/TrackMate-react/imgs/folds/braceleteAzul.png"} />
                                <label htmlFor="bracelet-blue" className='bracelet-labels bracelet-label-blue'></label>
                                <input type="radio" className='bracelet-colors' id='bracelet-purple' name='bracelet-color' onClick={() => document.getElementById('bracelet-color').src = "/TrackMate-react/imgs/folds/braceleteRoxo.png"} />
                                <label htmlFor="bracelet-purple" className='bracelet-labels bracelet-label-purple'></label>
                                <input type="radio" className='bracelet-colors' id='bracelet-turquoise' name='bracelet-color' onClick={() => document.getElementById('bracelet-color').src = "/TrackMate-react/imgs/folds/braceleteTurquesa.png"} />
                                <label htmlFor="bracelet-turquoise" className='bracelet-labels bracelet-label-turquoise'></label>
                            </div>
                        </div>
                        <div className="product-description">O TrackMate 0.4 XE tem pulseira de silicone ajustável, é leve e resistente. Evite calor e água excessivos. Limpe com pano seco, carregue apenas com o cabo magnético incluso e utilize o app TrackMate Health para configurar e acompanhar seus dados.</div>
                    </div>
                    
                    <div className="information-purchase-and-terms">

                        <div className="information">
                            <div className="name-sku-product">
                                <h2>TrackMate 0.4 XE</h2>
                                <h5>SKU: 0001</h5>
                            </div>
                            <h3 className="value">R$ 85,00</h3>
                            <div className="bracelet-colors">
                                <h5>Cor *:<span className='choosed-color'>{color}</span></h5>
                                <div className="choose-color">
                                    <div className="color-tooltip">
                                        <input type="radio" className="colors" id="white" name="color" onChange={() => setColor('Branco')} checked={color === 'Branco'}/>
                                        <label htmlFor="white" className="labels label-white"></label>
                                        <span className="tooltip">Branco</span>
                                    </div>
                                    <div className="color-tooltip">
                                        <input type="radio" className='colors' id='black' name='color' onClick={() => setColor('Preto')} />
                                        <label htmlFor="black" className='labels label-black'></label>
                                        <span className="tooltip">Preto</span>
                                    </div>
                                    <div className="color-tooltip">
                                        <input type="radio" className='colors' id='blue' name='color' onClick={() => setColor('Azul')} />
                                        <label htmlFor="blue" className='labels label-blue'></label>
                                        <span className="tooltip">Azul</span>
                                    </div>
                                    <div className="color-tooltip">
                                        <input type="radio" className='colors' id='purple' name='color' onClick={() => setColor('Roxo')} />
                                        <label htmlFor="purple" className='labels label-purple'></label>
                                        <span className="tooltip">Roxo</span>
                                    </div>
                                    <div className="color-tooltip">
                                        <input type="radio" className='colors' id='turquoise' name='color' onClick={() => setColor('Turquesa')} />
                                        <label htmlFor="turquoise" className='labels label-turquoise'></label>
                                        <span className="tooltip">Turquesa</span>
                                    </div>
                                </div>
                            </div>
                            <div className="amount-container">
                                <h5>Quantidade *:</h5>
                                <div className="choose-amount">
                                    <button className={`minus ${amount === 1 ? 'minus-gray' : ''}`} id="minus" onClick={() => setAmount(amount - 1)} disabled={amount === 1}><i className="fa-solid fa-minus"></i></button>
                                    <div className="amount">{amount}</div>
                                    <button className="plus" onClick={() => setAmount(amount + 1)}><i className="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </div>

                        <button className='add-to-bag'>Adicionar a sacola</button>

                        <div className="terms">
                            {termsData.map((item, index) => (
                                <Question 
                                key={index}
                                questionContentId={index} 
                                arrowId={index} 
                                responseId={index} 
                                question={item.title} 
                                response={item.information} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}