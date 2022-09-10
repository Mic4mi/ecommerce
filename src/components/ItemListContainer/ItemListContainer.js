import './style.css';
import { useState, useEffect } from "react"
import mockdata from '../../utils/mockdata/mockdata';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import { commons } from '../../utils/helper/commons';
import { Loader } from '../Loader/Loader';

function ItemListContainer({ greeting }) {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    // TO-DO añadir handling de errores
    useEffect(() => {
        commons.getDataFromDataBase(mockdata)
            .then((result) => {
                if (categoryId) {
                    const currentItems = result.filter(
                        item => item.category === categoryId
                    );
                    setItems(currentItems);
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