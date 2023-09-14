import { useState } from 'react'
import CartContext from './CartContext'

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (id, quantity) => {
        const itemInCart = cart.find((item) => item.id === id);
        if (itemInCart) {
            const newCart = cart.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity,
                    };
                }
                return item;
            });
            setCart(newCart);
        } else {
            setCart([...cart, { id, quantity }]);
        }
    };

    const removeOneItem = (id, quantity) => {
        const itemInCart = cart.find((item) => item.id === id);
        if (itemInCart) {
            const newCart = cart.map((item) => {
                if (item.id === id && item.quantity !== 1) {
                    return {
                        ...item,
                        quantity: item.quantity - quantity,
                    };
                }
                return item;
            });
            setCart(newCart);
        } else {
            setCart([...cart, { id, quantity }]);
        }
    };

    const removeItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    };

    const clear = () => {
        setCart([]);
    };

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return <CartContext.Provider value={{ cart, addItem, removeItem, clear, removeOneItem, totalQuantity }}> {children}</CartContext.Provider>
};

export default CartProvider;