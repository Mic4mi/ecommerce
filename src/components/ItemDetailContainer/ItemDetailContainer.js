import './style.css';
import { useState, useEffect } from "react"
import mockdata from '../../utils/mockdata/mockdata';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { commons } from '../../utils/helper/commons';

export const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    // TO-DO añadir handling de errores
    useEffect(() => {
        const getItem = async () => {
            const item = await commons.getDataFromDataBase(null,
                () => {
                    return mockdata.find(item => item.id === parseInt(itemId));
                });
            setItem(item);
        }
        getItem();
    }, [itemId]);

    return (
        <div className='item-detail-container'>
            {
                item
                    ? (
                        <ItemDetail
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            stock={item.stock}
                            img={item.img} />
                    )
                    : (<div>Cargando...</div>)
            }
        </div>
    )
}
