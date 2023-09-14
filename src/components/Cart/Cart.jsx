import { useContext, useEffect, } from 'react';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { formatPrice, getCartTotal } from '../../utilities';
import styles from './Cart.module.css';

const Cart = () => {
    const { cart, clear, addItem, removeItem, removeOneItem } = useContext(CartContext)

    const isCartEmpty = cart.length === 0


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
                                    <button className={styles.btnMenos} onClick={() => removeOneItem(item.id, 1)}>-</button>
                                    <button className={styles.btnRemove} onClick={() => removeItem(item.id)}>Quitar</button>
                                    <button className={styles.btnAdd} onClick={() => addItem(item.id, 1)}>+</button>
                                </li>
                            ))}
                        </ul>
                        <div className={styles.totalCont}><p>Total: <span className={styles.total}>${getCartTotal(cart)}</span></p></div>
                        <div className={styles.btnsContainer}>
                            <Link to="/"><button className={styles.btn}>Seguir comprando</button></Link>
                            <Link to="/checkout"><button className={styles.btn}>Finalizar compra</button></Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart