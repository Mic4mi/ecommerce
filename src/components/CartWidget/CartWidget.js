import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function CartWidget() {
    return (
        <Link to="/purchase" id="purchaseOrder">
            <button className="cart-btn cart-btn-hover">
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </Link>
    )
}

export default CartWidget;