import './style.css';
import { useState, useEffect } from "react"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import { commons } from '../../utils/helper/commons';
import { Loader } from '../Loader/Loader';

function ItemListContainer({ greeting }) {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    // TO-DO añadir handling de errores
    useEffect(() => {
        commons.getData()
            .then((result) => {
                if (categoryId) {
                    commons.getDataByCategory(categoryId)
                        .then((result) => {
                            setItems(result);
                        })
                } else {
                    setItems(result);
                }
            })
    }, [categoryId]);

    return (
        <div className='ListContainer'>
            {/* {greeting} */}
            {
                items.length > 0
                    ? (<ItemList items={items} />)
                    : (<Loader />)
            }
        </div>
    )
}

export default ItemListContainer;