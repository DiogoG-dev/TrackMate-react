import './Item.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Item() {
    const [items, setItems] = useState({});

    useEffect(() => {
        const allItems = {};

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = JSON.parse(localStorage.getItem(key));
            allItems[key] = value;
        }

        setItems(allItems);
    }, []);

    function setItem(color, action) {
        const itemSeted = JSON.parse(localStorage.getItem(`${color}`));

        if (action === 'less' && itemSeted) {
            itemSeted.amount -= 1;
            itemSeted.price = itemSeted.amount * 85;
            localStorage.setItem(`${color}`, JSON.stringify(itemSeted));
            window.location.reload();
        } 
        else if (action === 'plus' && itemSeted) {
            itemSeted.amount += 1;
            itemSeted.price = itemSeted.amount * 85;
            localStorage.setItem(`${color}`, JSON.stringify(itemSeted));
            window.location.reload();
        } 
        else if (action === 'delete') {
            localStorage.removeItem(`${color}`);
            window.location.reload();
        }
    }

    return (
        <>
            {Object.entries(items).map(([key, item]) => (
                <div key={key} className="item">
                    <Link to="/productPage"><img src={`/TrackMate-react/imgs/bracelets/bracelete${item.color}.png`} alt="" className="img-item" /></Link>
                    <div className="info-item">
                        <h3><Link to="/productPage">TrackMate 0.4 XE</Link></h3>
                        <span className='unit-value'>R$ 85,00</span>
                        <span className="color">Cor: {item.color}</span>
                    </div>
                    <div className="choose-amount">
                            <button className={`minus ${item.amount === 1 ? 'minus-gray' : ''}`} id="minus" onClick={() => setItem(item.color, 'less')} disabled={item.amount === 1}><i className="fa-solid fa-minus"></i></button>
                            <div className="amount">{item.amount}</div>
                            <button className="plus" onClick={() => setItem(item.color, 'plus')}><i className="fa-solid fa-plus"></i></button>
                        </div>
                    <div className="total-value-item">R$ {item.price.toFixed(2)}</div>
                    <div className="trash" onClick={() => setItem(item.color, 'delete')}><i class="fas fa-trash"></i></div>
                </div>
            ))}
        </>
    )
}