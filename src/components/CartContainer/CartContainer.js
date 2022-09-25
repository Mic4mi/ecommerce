import './style.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { EmptyCart } from '../EmptyCart/EmptyCart';
import { db } from '../../utils/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { Toaster, toast } from 'react-hot-toast';

export const CartContainer = () => {
    const { cartListProducts, removeItem, clearCart, getTotalPrice } = useContext(CartContext);
    const [orderID, setOrderID] = useState('');
    const getProfileData = (event) => {
        let isValid = false;
        event.target['name'].value && event.target['phone'].value && event.target['email'].value
            ? isValid = true : isValid = false;
        return isValid;
    };
    const sendOrder = (event) => {
        event.preventDefault();
        const isValid = getProfileData(event);
        if (!isValid) {
            toast.error(`Los datos para realizar la compra no son correctos.`, { duration: 3000, });
            return;
        }
        const order = {
            buyer: {
                name: event.target['name'].value,
                phone: event.target['phone'].value,
                email: event.target['email'].value
            },
            items: cartListProducts,
            date: new Date(),
            total: getTotalPrice()
        };

        const queryRef = collection(db, "orders");
        addDoc(queryRef, order)
            .then((response) => {
                setOrderID(response.id);
                console.log(`Su orden fue creada. Orden nro ${response.id} generada!!`);
                toast.success(`La orden ${response.id} ha sido generada`, { duration: 3000, });
                // guardar los items agregador y el cartContainer en la memoria del navegador hasta actualizar la db
                // Actualizar el stock de los productos en firebase
                // Limpiar los campos de los formularios
                // limpiar el carrito
            })
            .catch((error) => {
                toast.error(`Ocurrió un error procesando su solicitud`, { duration: 3000, });
                console.log("Error: ", error)
            })
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
                                <input type="text" name="name"></input>
                                <label>Teléfono</label>
                                <input type="text" name="phone"></input>
                                <label>Correo</label>
                                <input type="text" name="email"></input>
                                <button className='purchase-end-btn purchase-btn' type="submit">Pagar</button>
                            </form>
                            <button className='purchase-end-btn purchase-btn' onClick={clearCart}>Vaciar carrito</button>
                            <Toaster position='bottom-center' toastOptions={{ className: 'toaster' }} />
                        </div>
                    </div>
                    )
                    : (<EmptyCart />)
            }
        </div>
    )
}

