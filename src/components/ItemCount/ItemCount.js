import './style.css';
import { useState } from "react";
import OutOfStockIndicator from '../OutOfStockIndicator/OutOfStockIndicator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function ItemCount({ initialStock, stock, onAdd }) {
    const initialStockStoraged = initialStock;
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
    const onResetCounter = () => {
        setCounter(initialStockStoraged);
    };
    const onAddItems = () => {
        onResetCounter();
        console.log(`Actualmente estás comprando ${counter} ${counter > 1 ? 'items' : 'item'}`);
    };
    const onAddItemsToCart = () => {
        onAdd(onAddItems);
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
            <button className='item-count-addToCart-btn' onClick={onAddItemsToCart}>
                Añadir al carrito
            </button>
        </div>
    )
}

export default ItemCount;