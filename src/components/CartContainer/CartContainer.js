import './style.css';
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { EmptyCart } from '../EmptyCart/EmptyCart';

export const CartContainer = () => {
    const { cartListProducts, removeItem, clearCart, getTotalPrice } = useContext(CartContext);
    return (
        <div className='cart-container'>
            {
                cartListProducts.length
                    ? (<div className='info-container'>
                        <div className='purchase-list'>
                            <h4>Resumen:</h4>
                            {cartListProducts.map((item) => (
                                <div key={item.id} className='item-to-purchase'>
                                    <div>
                                        <p>{item.name} x{item.quantity}</p>
                                        <p>${item.quantityPrice}</p>
                                        <hr></hr>
                                    </div>
                                    <button className='list-btn delete-one-item-btn' onClick={() => { removeItem(item.id) }}>
                                        <FontAwesomeIcon icon={faTrashCan} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className='display-total'>
                            <h4>Total compra: ${getTotalPrice()}</h4>
                            <button className='purchase-end-btn purchase-btn' onClick={clearCart}>Vaciar carrito</button>
                            <button className='purchase-end-btn purchase-btn'>Pagar</button>
                        </div>
                    </div>
                    )
                    : (<EmptyCart />)
            }
        </div>
    )
}

