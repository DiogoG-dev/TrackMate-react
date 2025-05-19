import { BuyButton } from '../../common/BuyButton/BuyButton';
import './ProductSpecifications.css';

export function ProductSpecifications() {
    return (
        <section className="product-specifications">
            <h2>Especificações do TrackMate 0.4 XE</h2>
            <div className="specifications-container">
                <div className="specification-content-up">
                    <div className="battery-specification card">
                        <h3><i className="fa-solid fa-battery-full icon-cards"></i>20 horas de bateria</h3>
                        <p>Treine o dia todo com energia — o TrackMate 0.4 XE acompanha seu ritmo sem precisar recarregar.</p>
                    </div>
                    <div className="bluetooth-specification card">
                        <h3><i className="fa-brands fa-bluetooth icon-cards"></i>Conectividade Bluetooth</h3>
                        <p>Sincronize com seu celular em segundos — conexão estável para uma experiência fluida.</p>
                    </div>
                </div>
                <div className="specification-content-down">
                    <div className="charging-specification card">
                        <h3><i className="fa-solid fa-rss icon-cards"></i>Carregamento sem fio</h3>
                        <p>Esqueça os cabos — basta encostar na base para recarregar com praticidade e estilo.</p>
                    </div>
                    <div className="water-resistance-specification card">
                        <h3><i className="fa-solid fa-droplet icon-cards"></i>Resistente à água</h3>
                        <p>Treine sob qualquer condição — o TrackMate 0.4 XE é à prova de suor, chuva e até mergulhos leves.</p>
                    </div>                
                </div>
            </div>
            <BuyButton />
        </section>
    )
}