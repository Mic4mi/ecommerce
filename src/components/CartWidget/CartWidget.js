import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return (
        <button className="cart-btn cart-btn-hover">
            <FontAwesomeIcon icon={faCartShopping} />
        </button>
    )
}

export default CartWidget;