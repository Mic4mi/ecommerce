import './style.css';
import { useState, useEffect } from "react"
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { commons } from '../../utils/helper/commons';
import { Loader } from '../Loader/Loader';

export const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    // TO-DO añadir handling de errores
    useEffect(() => {
        commons.getItem(itemId)
            .then((result) => {
                setItem(result);
            })
    }, [itemId]);

    return (
        <div className='item-detail-container'>
            {
                !item
                    ? (<Loader />)
                    : (
                        <ItemDetail item={item} />
                    )
            }
        </div>
    )
}

