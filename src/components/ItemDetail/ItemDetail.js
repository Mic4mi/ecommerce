import './style.css';
import ItemCount from '../ItemCount/ItemCount';
import { PostalCodeCalculator } from '../PostalCodeCalculator/PostalCodeCalculator';
import { PaymentMethods } from '../PaymentMethods/PaymentMethods';
import { SocialMediaSharing } from '../SocialMediaSharing/SocialMediaSharing';
import { CartContext } from '../../context/CartContext';
import { useState, useContext } from 'react';

export const ItemDetail = ({ item }) => {
    const { name, description, price, stock, img } = item;
    const { addItem } = useContext(CartContext);
    const [itemsToBuy, setItemsToBuy] = useState(0);
    const onAddItem = (counter) => {
        setItemsToBuy(counter);
        addItem(item, counter);
    };
    return (
        <div className='item-detail'>
            <div className='column-description-detail'>
                <h1 id="product-name">{name}</h1>
                <div className='img'>
                    <img id="img" src={img} alt={name} />
                    <p>{description}</p>
                    <SocialMediaSharing />
                </div>
            </div>
            <div className='column-description-detail description-price'>
                <hr />
                <PaymentMethods price={price} />
                <hr />
                <div className="description-to-buy-item">
                    <ItemCount initialStock={1} stock={stock} onAdd={onAddItem} />
                    <div className='stock-info'>
                        <p>Unidades disponibles: {stock}</p>
                        <p>Items agregados: {itemsToBuy}</p>
                    </div>
                </div>
                <hr />
                <div className="description-to-buy-item">
                    <PostalCodeCalculator />
                    <p>Total Envío</p>
                </div>
            </div>
        </div>
    )
}