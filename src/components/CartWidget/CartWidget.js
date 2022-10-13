import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartWidget() {
    const { getTotalProducts } = useContext(CartContext);
    return (
        <Link to="/cart" id="purchaseOrder">
            <button className="cart-btn cart-btn-hover">
                <FontAwesomeIcon icon={faCartShopping} />
                {
                    getTotalProducts() > 0
                        ? (<span className='counter'>{getTotalProducts()}</span>)
                        : null
                }
            </button>
        </Link>
    )
}

export default CartWidget;