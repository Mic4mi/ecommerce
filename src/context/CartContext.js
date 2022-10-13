import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cartListProducts, setCartListProducts] = useLocalStorage("shopping-cart", []);

    const addItem = (item, quantity) => {
        const { existInCart, product } = isInCart(item.id);
        const purchaseItems = [...cartListProducts];
        if (!existInCart) {
            let newItem = { ...item, quantity }
            newItem.quantityPrice = newItem.quantity * newItem.price;
            purchaseItems.push(newItem);
            setCartListProducts(purchaseItems);
            return;
        }
        if (existInCart) {
            const itemPosition = purchaseItems.findIndex(item => item.id === product.id);
            purchaseItems[itemPosition].quantity += quantity;
            purchaseItems[itemPosition].quantityPrice = purchaseItems[itemPosition].quantity * purchaseItems[itemPosition].price;
            setCartListProducts(purchaseItems);
            return;
        }
    };

    const removeItem = (itemId) => {
        const purgedList = cartListProducts.filter(item => item.id !== itemId);
        setCartListProducts(purgedList);
    };

    const clearCart = () => {
        setCartListProducts([]);
    };

    const isInCart = (itemId) => {
        const productExist = cartListProducts.some(item => item.id === itemId);
        const existingProduct = cartListProducts.find(item => item.id === itemId);
        return { existInCart: productExist, product: existingProduct };
    };

    const getTotalProducts = () => {
        return cartListProducts.reduce((total, item) => total + item.quantity, 0)
    }

    const getTotalPrice = () => {
        const total = cartListProducts.reduce((total, item) => total + item.quantityPrice, 0);
        return total.toFixed(2);
    }

    return (
        <CartContext.Provider value={{ cartListProducts, addItem, removeItem, clearCart, getTotalPrice, getTotalProducts }}>
            {children}
        </CartContext.Provider>
    )
}
