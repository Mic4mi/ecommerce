import './style.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({ greeting }) {
    return (
        <>
            {greeting}
            <ItemCount />
        </>
    )
}

export default ItemListContainer;