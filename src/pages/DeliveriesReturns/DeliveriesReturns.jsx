import './DeliveriesReturns.css';
import { Header } from '../../components/layouts/Header/Header';
import { Footer } from '../../components/layouts/Footer/Footer';

export function DeliveriesReturns() {
    return (
        <>
            <Header />
            <main className="deliveries-returns-container">
                <div className="deliveries-returns-content">
                    <h2>Entregas e Devoluções</h2>
                    <p>
                        O TrackMate é um produto físico e possui prazos específicos de entrega, conforme a política de envio informada no 
                        momento da compra.
                    </p>
                    <h3>Entregas:</h3>
                    <p>
                        Após a confirmação do pagamento, nossa equipe tem até 24 horas úteis para processar o pedido e encaminhá-lo à 
                        transportadora. O prazo de entrega pode variar de acordo com a região do destinatário, e será informado no momento 
                        da compra. Um código de rastreamento será enviado por e-mail assim que o pedido for postado.
                    </p>
                    <h3>Cancelamentos e Reembolsos:</h3>
                    <p>
                        Você pode solicitar o cancelamento da compra e reembolso integral em até 7 dias corridos após o recebimento do 
                        produto, conforme o Código de Defesa do Consumidor (Art. 49). O produto deverá ser devolvido em perfeitas condições, 
                        sem sinais de uso e, preferencialmente, em sua embalagem original. Após o recebimento e análise, o estorno será 
                        processado em até 7 dias úteis.
                    </p>
                    <h3>Devoluções por Defeito ou Problemas:</h3>
                    <p>
                        Se o seu TrackMate apresentar algum defeito de fabricação ou divergência, entre em contato com nosso suporte em até 
                        7 dias corridos após o recebimento para que possamos avaliar o caso e, se necessário, providenciar a troca ou 
                        reembolso.
                    </p>
                    <h3>Suporte ao Cliente:</h3>
                    <p>
                        Nossa equipe está disponível para esclarecer dúvidas, realizar trocas ou acompanhar o processo de devolução. Através do 
                        nosso email <span>suporte@trackmate.com</span>.
                    </p>
                    <p>📅 Atendimento de segunda a sexta, das 9h às 18h (exceto feriados).</p>
                    <p className='disclaimer'>
                        <i><strong>Este é um projeto educacional.</strong> Os tópicos abordados acima têm o objetivo de simular situações 
                        próximas à realidade comercial.</i>
                    </p>
                </div>
            </main>
            <Footer />
        </>
    )
}