import './style.css';
import Item from '../Item/Item';

function ItemList({ items }) {
    // TO-DO estilizar componentes
    return (
        <>
            {
                items.map((product) => {
                    return (
                        <Item
                            key={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            stock={product.stock}
                            img={product.img}
                        />
                    )
                })
            }
        </>
    )
}


export default ItemList;