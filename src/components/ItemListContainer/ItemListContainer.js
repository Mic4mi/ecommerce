import './style.css';
import { useState, useEffect } from "react"
import mockdata from '../../mockdata/mockdata';
import ItemList from '../ItemList/ItemList';

function ItemListContainer({ greeting }) {
    // TO-DO añadir handling de errores
    const [items, setItems] = useState([]);
    const getData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mockdata);
            }, 2000);
        })
    };

    // TO-DO añadir handling de errores
    useEffect(() => {
        getData()
            .then((result) => {
                setItems(result);
            })
    }, []);

    return (
        // // TO-DO estilizar componentes
        <div className='ListContainer'>
            {/* {greeting} */}
            {
                items.length > 0
                    ? (<ItemList items={items} />)
                    : (<div>Cargando...</div>)
            }
        </div>
    )
}

export default ItemListContainer;