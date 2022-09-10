import './style.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
// import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';

// TO-DO estilizar componentes
function Item({ item }) {
    //key, name, description, price, stock, img
    // TO-DO Linkear la imagen al id
    return (
        <div className='ItemContainer'>
            <div className='DescriptionContainer'>
                <Link to={`/item/${item.id}`}>
                    <img src={item.img} alt={item.name} />
                </Link>
                <div className='TextContent'>
                    <h5 id="productName" className='text-desc-product'>{item.name}</h5>
                    <h6 id="productDescription" className='text-desc-product'>{item.description}</h6>
                    <h5 id="productPrice" className='text-desc-product'>${item.price}</h5>
                </div>
            </div>
            <ItemCount initialStock={1} stock={item.stock} onAdd={() => {
                console.log("Item added!");
            }} />
        </div>
    )
}

export default Item