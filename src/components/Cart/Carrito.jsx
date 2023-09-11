import { useContext, useEffect, } from 'react';
import CartContext from '../../context/CartContext';
import styles from './Carrito.module.css';

const Carrito = () => {
    const { cart, clear, addItem, removeItem, removeOneItem } = useContext(CartContext)

    const isCartEmpty = cart.length === 0

    const total = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.id?.price * item?.quantity;
        });
        return total.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
    }
    function formatPrice(price) {
        return price.toLocaleString('en-US');
    }


    useEffect(() => {

    }, [cart])


    return (
        <div className={styles.contenedor}>
            <div className='container text-center'>
                <h1 className={styles.title}>Carrito</h1>
                {isCartEmpty ? (
                    <p className={styles.eptCart}>El carrito está vacío.</p>
                ) : (
                    <div>
                        <div className={styles.clerCartCont}>
                            <button className={styles.clearCart} onClick={clear}>Vaciar Carrito</button>
                        </div>
                        <div className={styles.cartCat}>
                            <p>Producto</p>
                            <p>Precio</p>
                            <p>Cantidad</p>
                        </div>
                        <ul className={styles.listCont}>
                            {cart.map((item, index) => (
                                <li key={index} className={styles.list}>
                                    <p> {item.id.name}</p>
                                    <p className={styles.price}>${formatPrice(item.id.price)}</p>
                                    <p className={styles.qty}> {item.quantity}</p>
                                    <button className={styles.btnAdd} onClick={() => addItem(item.id, 1)}>+</button>
                                    <button className={styles.btnRemove} onClick={() => removeItem(item.id)}>Quitar</button>
                                    <button className={styles.btnMenos} onClick={() => removeOneItem(item.id, 1)}>-</button>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.totalCont}><p>Total: <span className={styles.total}>{total()}</span></p></div>
                        <div>
                            <button>Seguir comprando</button>
                            <button>Finalizar compra</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Carrito