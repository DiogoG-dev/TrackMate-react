import './DiscountOffer.css';

export function DiscountOffer() {
    return (
        <section className="discount-offer">
            <h2>Assine e ganhe 15% de desconto na primeira compra</h2>
            <label for='email'>Email *</label>
            <form action="">
                <input type="email" id='email' placeholder="Assine aqui" required />
                <button className='inside-button' type="submit">Assinar</button>
            </form>
            <button className='outside-button' type="submit">Assinar</button>
        </section>
    )
}