import './style.css';
import { useState } from "react";
import OutOfStockIndicator from '../OutOfStockIndicator/OutOfStockIndicator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Toaster, toast } from 'react-hot-toast';

function ItemCount({ initialStock, stock, onAdd }) {
    const [counter, setCounter] = useState(initialStock);
    const [outOfStockIndicatorVisibility, setOutOfStockIndicatorVisibility] = useState(false);
    const onAddOne = () => {
        counter < stock
            ? setCounter(counter + 1)
            : setOutOfStockIndicatorVisibility(true)
    };
    const onSubstractOne = () => {
        if (counter === 1) { return }
        if (counter <= stock) { setOutOfStockIndicatorVisibility(false) }
        setCounter(counter - 1);
    };

    return (
        <div className='item-count-container'>
            <div className='counter-box'>
                <button onClick={onAddOne} className='item-count-btn item-count-btn-hover'>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <p id='item-quantity'>{counter}</p>
                <button onClick={onSubstractOne} className='item-count-btn item-count-btn-hover'>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
            </div>
            {outOfStockIndicatorVisibility ? <OutOfStockIndicator /> : null}
            <button className='item-count-addToCart-btn' onClick={() => {
                onAdd(counter);
                toast.success('Item successfully added to cart!', { duration: 3000, });
            }}>
                Add to cart
            </button>
            <Toaster position='bottom-center' toastOptions={{ className: 'toaster' }} />
        </div>
    )
}

export default ItemCount;