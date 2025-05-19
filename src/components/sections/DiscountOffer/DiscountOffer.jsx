import './DiscountOffer.css';

export function DiscountOffer() {
    return (
        <section className="discount-offer">
            <h2>Assine e ganhe 15% de desconto na primeira compra</h2>
            <form action="">
                <label htmlFor='email'>Email *</label>
                <input type="email" id='email' placeholder="Assine aqui" required />
                <button type="submit">Assinar</button>
            </form>
        </section>
    )
}