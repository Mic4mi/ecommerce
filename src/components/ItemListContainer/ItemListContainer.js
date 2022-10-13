import './style.css';
import { useState, useEffect } from "react"
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import { commons } from '../../utils/helper/commons';
import { Loader } from '../Loader/Loader';
import { Toaster, toast } from 'react-hot-toast';

function ItemListContainer() {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
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
            .catch(() => {
                toast.error(`An error occurred while obtaining the product listing.`, { duration: 3000, });
            })
    }, [categoryId]);

    return (
        <div className='ListContainer'>
            {
                items.length > 0
                    ? (<ItemList items={items} />)
                    : (<Loader />)
            }
            <Toaster position='bottom-center' toastOptions={{ className: 'toaster' }} />
        </div>
    )
}

export default ItemListContainer;