import './style.css';
import { useState } from "react";
import OutOfStockIndicator from '../OutOfStockIndicator/OutOfStockIndicator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

function ItemCount({ initialStock, stock }) {
    const [counter, setCounter] = useState(initialStock);
    const [outOfStockIndicatorVisibility, setOutOfStockIndicatorVisibility] = useState(false);
    const onAddOne = () => {
        counter < stock
            ? setCounter(counter + 1)
            : setOutOfStockIndicatorVisibility(true)
    };
    const onSubstractOne = () => {
        if (counter === 0) { return }
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
            <button className='item-count-addToCart-btn'>
                Añadir al carrito
            </button>
        </div>
    )
}

export default ItemCount