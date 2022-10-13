import './style.css';
import { useState, useEffect } from "react"
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { commons } from '../../utils/helper/commons';
import { Loader } from '../Loader/Loader';
import { Toaster, toast } from 'react-hot-toast';


export const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        commons.getItem(itemId)
            .then((result) => {
                setItem(result);
            })
            .catch(() => {
                toast.error(`An error occurred while obtaining the item data.`, { duration: 3000, });
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
            <Toaster position='bottom-center' toastOptions={{ className: 'toaster' }} />
        </div>
    )
}

