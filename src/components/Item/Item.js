import './style.css';
import ItemCount from '../ItemCount/ItemCount';

// TO-DO estilizar componentes
function Item({ id, name, description, price, stock, img }) {
    return (
        <div className='ItemContainer'>
            <div className='DescriptionContainer'>
                <img src={img} alt={name} />
                <div className='TextContent'>
                    <h5 id="productName" className='text-desc-product'>{name}</h5>
                    <h6 id="productDescription" className='text-desc-product'>{description}</h6>
                    <h5 id="productPrice" className='text-desc-product'>${price}</h5>
                </div>
            </div>
            <ItemCount initialStock={1} stock={3} onAdd={(AddItemCB) => {
                AddItemCB();
            }} />
        </div>
    )
}

export default Item