import './style.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({ greeting }) {
    return (
        <>
            {greeting}
            <ItemCount initialStock={0} stock={3}/>
        </>
    )
}

export default ItemListContainer;