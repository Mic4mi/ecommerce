import './style.css';
import Item from '../Item/Item';

function ItemList({ items }) {
    // TO-DO estilizar componentes
    return (
        <>
            {
                items.map((item) => {
                    return (
                        <Item
                            key={item.id}
                            item={item}
                        />
                    )
                })
            }
        </>
    )
}


export default ItemList;