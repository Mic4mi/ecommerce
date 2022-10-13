import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function OutOfStockIndicator() {
    return (
        <div className='out-of-stock-indicator-container'>
            <p className='stock-indicator'>
                <FontAwesomeIcon icon={faXmark} className="out-of-stock-cross" />
                Out of stock
                <FontAwesomeIcon icon={faXmark} className="out-of-stock-cross" />
            </p>
        </div>
    )
}

export default OutOfStockIndicator;