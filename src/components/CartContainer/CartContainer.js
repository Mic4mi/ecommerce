import './style.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { EmptyCart } from '../EmptyCart/EmptyCart';
import { db } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore'

export const CartContainer = () => {
    const { cartListProducts, removeItem, clearCart, getTotalPrice } = useContext(CartContext);
    const [orderID, setOrderID] = useState('');
    const sendOrder = (event) => {
        event.preventDefault();
        const order = {
            buyer: {
                name: event.target[0].value,
                phone: event.target[1].value,
                email: event.target[2].value
            },
            items: cartListProducts,
            date: new Date(),
            total: getTotalPrice()
        };
        console.log("Orden enviada! ", order);
        // Crear referencia
        const queryRef = collection(db, "orders");
        // Store ref
        addDoc(queryRef, order)
            // .then(async function (response) {
            //     debugger;
            //     await setOrderID(response.id);
            //     console.log(`Su orden fue creada. Orden nro ${orderID} generada!!`);
            // })
            .then(({id})=>{
                setOrderID(id);
                console.log(`Su orden fue creada. Orden nro ${orderID} generada!!`);
            })
            .catch(error => console.log("Error: ", error))
    };

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
                            <form onSubmit={sendOrder}>
                                <label>Nombre:</label>
                                <input type="text"></input>
                                <label>Teléfono</label>
                                <input type="text"></input>
                                <label>Correo</label>
                                <input type="text"></input>
                                <button type="submit">Send</button>
                            </form>
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

