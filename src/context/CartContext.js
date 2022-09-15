import React from 'react'
import { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    const [cartListProducts, setCartListProducts] = useState([]);

    const addItem = (item, quantity) => {
        const searchedProduct = isInCart(item.id);
        const purchaseItems = [...cartListProducts];
        if (!searchedProduct.exist) {
            purchaseItems.push({
                ...item,
                quantity
            })
            setCartListProducts(purchaseItems);
            return;
        }
        if (searchedProduct.exist) {
            const itemPosition = purchaseItems.findIndex(item => item.id === searchedProduct.item.id);
            purchaseItems[itemPosition].quantity += quantity;
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
        return { exist: productExist, item: existingProduct };
    };

    return (
        <CartContext.Provider value={{ cartListProducts, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
