import './ProductPage.css'
import './ProductApresentation.css'
import './InformationPurchaseAndTerms.css'
import { Header } from '../../components/layouts/Header/Header.jsx';
import { Footer } from '../../components/layouts/Footer/Footer.jsx';
import { useState, useRef } from 'react';
import { Question } from '../../components/common/Question/Question.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import termsData from '../../data/terms.json';

export function ProductPage() {
    const [color, setColor] = useState('Branco');
    const [amount, setAmount] = useState(1);
    const swiperRef = useRef(null);

    const handleGoToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    return (
        <>
            <Header />
            <main className='main-container-product'>
                <div className="content-product">

                    <div className="product-apresentation">
                        <div className="product-apresentation-image">
                            <div className="main-image"><img className='bracelet-color' id='bracelet-color' src={`/TrackMate-react/imgs/bracelets/bracelete${color}.png`} alt="" /></div>
                            <div className="image-carousel">
                                <input type="radio" className="bracelet-colors" id="bracelet-white" name="bracelet-color" onChange={() => document.getElementById('bracelet-color').src = "/TrackMate-react/imgs/bracelets/braceleteBranco.png"} />
                                <label htmlFor="bracelet-white" className="bracelet-labels bracelet-label-white"></label>
                                <input type="radio" className='bracelet-colors' id='bracelet-black' name='bracelet-color' onClick={() => document.getElementById('bracelet-color').src = "/TrackMate-react/imgs/bracelets/braceletePreto.png"} />
                                <label htmlFor="bracelet-black" className='bracelet-labels bracelet-label-black'></label>
                                <input type="radio" className='bracelet-colors' id='bracelet-blue' name='bracelet-color' onClick={() => document.getElementById('bracelet-color').src = "/TrackMate-react/imgs/bracelets/braceleteAzul.png"} />
                                <label htmlFor="bracelet-blue" className='bracelet-labels bracelet-label-blue'></label>
                                <input type="radio" className='bracelet-colors' id='bracelet-purple' name='bracelet-color' onClick={() => document.getElementById('bracelet-color').src = "/TrackMate-react/imgs/bracelets/braceleteRoxo.png"} />
                                <label htmlFor="bracelet-purple" className='bracelet-labels bracelet-label-purple'></label>
                                <input type="radio" className='bracelet-colors' id='bracelet-turquoise' name='bracelet-color' onClick={() => document.getElementById('bracelet-color').src = "/TrackMate-react/imgs/bracelets/braceleteTurquesa.png"} />
                                <label htmlFor="bracelet-turquoise" className='bracelet-labels bracelet-label-turquoise'></label>
                            </div>

                            <Swiper pagination={{ clickable: true }} modules={[Pagination]} className="swiper-product-apresentation" ref={swiperRef} >
                                <SwiperSlide><img className='bracelet-color' src={`/TrackMate-react/imgs/bracelets/braceleteBranco.png`} alt="" /></SwiperSlide>
                                <SwiperSlide><img className='bracelet-color' src={`/TrackMate-react/imgs/bracelets/braceletePreto.png`} alt="" /></SwiperSlide>
                                <SwiperSlide><img className='bracelet-color' src={`/TrackMate-react/imgs/bracelets/braceleteAzul.png`} alt="" /></SwiperSlide>
                                <SwiperSlide><img className='bracelet-color' src={`/TrackMate-react/imgs/bracelets/braceleteRoxo.png`} alt="" /></SwiperSlide>
                                <SwiperSlide><img className='bracelet-color' src={`/TrackMate-react/imgs/bracelets/braceleteTurquesa.png`} alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="product-description-desktop">O TrackMate 0.4 XE tem pulseira de silicone ajustável, é leve e resistente. Evite calor e água excessivos. Limpe com pano seco, carregue apenas com o cabo magnético incluso e utilize o app TrackMate Health para configurar e acompanhar seus dados.</div>
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
                                        <input type="radio" className="colors" id="white" name="color"
                                            onChange={() => {
                                            setColor('Branco');
                                            handleGoToSlide(0);
                                            }}
                                            checked={color === 'Branco'}
                                        />

                                        <label htmlFor="white" className="labels label-white"></label>
                                        <span className="tooltip">Branco</span>
                                    </div>

                                    <div className="color-tooltip">
                                        <input type="radio" className="colors" id="black" name="color"
                                            onChange={() => {
                                            setColor('Preto');
                                            handleGoToSlide(1);
                                            }}
                                            checked={color === 'Preto'}
                                        />
                                        <label htmlFor="black" className="labels label-black"></label>
                                        <span className="tooltip">Preto</span>
                                    </div>

                                    <div className="color-tooltip">
                                        <input type="radio" className="colors" id="blue" name="color"
                                            onChange={() => {
                                            setColor('Azul');
                                            handleGoToSlide(2);
                                            }}
                                            checked={color === 'Azul'}
                                        />
                                        <label htmlFor="blue" className="labels label-blue"></label>
                                        <span className="tooltip">Azul</span>
                                    </div>

                                    <div className="color-tooltip">
                                        <input type="radio" className="colors" id="purple" name="color"
                                            onChange={() => {
                                            setColor('Roxo');
                                            handleGoToSlide(3);
                                            }}
                                            checked={color === 'Roxo'}
                                        />
                                        <label htmlFor="purple" className="labels label-purple"></label>
                                        <span className="tooltip">Roxo</span>
                                    </div>

                                    <div className="color-tooltip">
                                        <input type="radio" className="colors" id="turquoise" name="color"
                                            onChange={() => {
                                            setColor('Turquesa');
                                            handleGoToSlide(4);
                                            }}
                                            checked={color === 'Turquesa'}
                                        />
                                        <label htmlFor="turquoise" className="labels label-turquoise"></label>
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
                        <div className="product-description-mobile">O TrackMate 0.4 XE tem pulseira de silicone ajustável, é leve e resistente. Evite calor e água excessivos. Limpe com pano seco, carregue apenas com o cabo magnético incluso e utilize o app TrackMate Health para configurar e acompanhar seus dados.</div>
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