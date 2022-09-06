import './style.css';
import ItemCount from '../ItemCount/ItemCount';
import { PostalCodeCalculator } from '../PostalCodeCalculator/PostalCodeCalculator';
import { PaymentMethods } from '../PaymentMethods/PaymentMethods';
import { SocialMediaSharing } from '../../SocialMediaSharing/SocialMediaSharing';

export const ItemDetail = ({ name, description, price, stock, img }) => {
    return (
        <div className='item-detail'>
            <div className='column-description-detail'>
                <h1 id="product-name">{name}</h1>
                <div className='img'>
                    <img id="img" src={img} alt={name} />
                </div>
                <SocialMediaSharing />
            </div>
            <div className='column-description-detail description-price'>
                <PaymentMethods price={price} />
                <hr />
                <div className="description-add-item">
                    <p>{description}</p>
                    <ItemCount initialStock={1} stock={stock} onAdd={(AddItemCB) => {
                        AddItemCB();
                    }} />
                </div>
                <hr />
                <PostalCodeCalculator />
            </div>
        </div>
    )
}
