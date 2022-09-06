import './style.css';
import { useState, useEffect } from "react"
import mockdata from '../../mockdata/mockdata';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    // TO-DO añadir handling de errores
    const { itemId } = useParams();
    const [item, setItem] = useState('');
    const getItemFromDatabase = (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const currentitem = mockdata.find(item => item.id === parseInt(id));
                resolve(currentitem);
            }, 2000);
        })
    };

    // TO-DO añadir handling de errores
    useEffect(() => {
        const getItem = async () => {
            const item = await getItemFromDatabase(itemId);
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
