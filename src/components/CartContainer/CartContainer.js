import './style.css';
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export const CartContainer = () => {
    const { cartListProducts, removeItem, clearCart } = useContext(CartContext);
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
                                        <p>${item.price}</p>
                                        <hr></hr>
                                    </div>
                                    <button className='list-btn erase-btn' onClick={() => { removeItem(item.id) }}>
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className='display-total'>
                            <h4>Total compra: </h4>
                            <button className='erase-btn' onClick={clearCart}>Vaciar carrito</button>
                            <button className='erase-btn' onClick={clearCart}>Pagar</button>
                        </div>
                    </div>
                    )
                    : (<p>No hay nada en el carrito aun...</p>)
            }
        </div>
    )
}

