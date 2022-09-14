import React from 'react'
import { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cartListProducts, setCartListProducts] = useState([]);

    const addItem = (item, quantity) => {
        const productExist = isInCart(item.id);
        if (!productExist.exist) {
            const purchaseItems = [...cartListProducts];
            purchaseItems.push({
                ...item,
                quantity
            })
            setCartListProducts(purchaseItems);
            return;
        }
        if (productExist.exist) {
            productExist.item.quantity = productExist.item.quantity + quantity;
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
        const existingProduct = cartListProducts.find(item => item.id === itemId);
        let productExist = false;
        existingProduct ? productExist = true : productExist = false;
        return { exist: productExist, item: existingProduct };
    };

    return (
        <CartContext.Provider value={{ cartListProducts, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
