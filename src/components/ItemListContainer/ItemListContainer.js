import './style.css';
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer({ greeting }) {
    return (
        <>
            {greeting}
            <ItemCount initialStock={1} stock={3} onAdd={(AddItemCB) => {
                AddItemCB();
            }} />
        </>
    )
}

export default ItemListContainer;