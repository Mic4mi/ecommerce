import './style.css';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { EmptyCart } from '../EmptyCart/EmptyCart';
import { PurchaseResume } from '../PurchaseResume/PurchaseResume';
import { db } from '../../utils/firebase';
import { collection, addDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
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

    const cleanCartListProducts = () => {
        // limpiar el carrito
        clearCart();
        // Limpiar los campos de los formularios
        document.getElementById('purchase-btn').disabled = false;
    };

    const sendOrder = (event) => {
        event.preventDefault();
        const isValid = getProfileData(event);
        if (!isValid) {
            toast.error(`The data entered to make the purchase are not correct.`, { duration: 3000, });
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

        const updateProducts = (items) => {
            items.forEach(item => {
                const queryRef = doc(db, "items", item.id);
                let currentStock = item.stock - item.quantity;
                // Actualizar
                updateDoc(queryRef, {
                    stock: currentStock,
                    quantity: 0
                })
            });
        };

        // Evitar multiple click en btn de comprar

        document.getElementById('purchase-btn').disabled = true;

        // Añadir orden
        const queryRef = collection(db, "orders");
        addDoc(queryRef, order)
            .then(async (response) => {
                setOrderID(response.id)
                toast.success(`The order ${response.id} has been successfully generated`, { duration: 3000 });
                // Actualizar el stock de los productos en firebase
                const docRef = doc(db, "orders", response.id);
                const docSnap = await getDoc(docRef);
                updateProducts(docSnap.data().items)
                document.getElementById('purchase-form').reset();
            })
            .catch((error) => {
                toast.error(`An error occurred processing your request.`, { duration: 3000 });
            })
    };

    return (
        <div className='cart-container'>
            <div className='info-container'>
                {
                    cartListProducts.length
                        ? (
                            <>
                                {
                                    !orderID
                                        ? (
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
                                                <h4>Total compra: ${getTotalPrice()}</h4>
                                                <button className='purchase-end-btn purchase-btn' onClick={clearCart}>Vaciar carrito</button>
                                            </div>
                                        )
                                        : (<PurchaseResume items={cartListProducts} total={getTotalPrice()} onReset={cleanCartListProducts} />)
                                }
                                <div className='display-total'>
                                    <div className='form-container'>
                                        <form id="purchase-form" onSubmit={sendOrder}>
                                            <fieldset disabled={!cartListProducts.length ? true : false}>
                                                <label>Nombre:</label>
                                                <input type="text" name="name"></input>
                                                <label>Teléfono</label>
                                                <input type="text" name="phone"></input>
                                                <label>Correo</label>
                                                <input type="text" name="email"></input>
                                                <button id="purchase-btn" className='purchase-end-btn purchase-btn' type="submit" >Pagar</button>
                                            </fieldset>
                                        </form>
                                    </div>
                                    <Toaster position='bottom-center' toastOptions={{ className: 'toaster' }} />
                                </div>
                            </>
                        )
                        : (<EmptyCart />)
                }
            </div>
        </div>
    )
}

