import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import { getCartTotal, formatPrice, mapCartToOrder } from '../../utilities';
import Form from '../Form/Form';
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../../services';
import Swal from 'sweetalert2';
import styles from './Checkout.module.css';

const Checkout = () => {
    const { cart, clear } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null);

    const [formState, setFormState] = useState({ name: "", phone: "", email: "" });

    const { name, phone, email } = formState;

    const onChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const isFormValid = name && phone && email.includes("@");

    const onSubmit = (event) => {
        event.preventDefault();
        if (name && phone) {
            if (email.includes('@')) {
                Checkout();
                Swal.fire({
                    icon: 'success',
                    title: 'Orden realizada correctamente',
                    showConfirmButton: false,
                    timer: 2000
                });
                clear();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Ingresa un correo válido',
                    showConfirmButton: true,
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Completa todos los campos',
                showConfirmButton: false,
                timer: 2000
            });
        }
    };

    const Checkout = () => {
        const order = {
            buyer: {
                ...formState
            },
            items: mapCartToOrder(cart),
            total: getCartTotal(cart),
            date: serverTimestamp(),
        };
        createOrder(order)
            .then((docRef) => {
                setOrderId(docRef.id);
            })
            .catch((error) => {
            })
    }


    return (
        <div className={styles.bkg}>
            <h1 className={styles.title}>Checkout</h1>
            {orderId && <div className={styles.orderContainer}><p>Su id de compra es: {orderId}</p></div>}

            {!orderId && (
                <div className={styles.container}>
                    <div className={styles.cardContainer}>
                        <h2 className={styles.subTitle}>Detalles de la compra:</h2>
                        <ul>
                            {cart.map((item, index) => (
                                <li key={index} className={styles.list}>
                                    <p>Producto: {item.id.name}</p>
                                    <p>Cantidad: {item.quantity}</p>
                                    <p>Precio por unidad: ${formatPrice(item.id.price)}</p>
                                    <p className={styles.subTotal}>Subtotal: ${formatPrice(item.id.price * item.quantity)}</p>
                                    <hr />
                                </li>
                            ))}
                        </ul>
                        <p className={styles.total}>Total: ${getCartTotal(cart)}</p>
                    </div>
                    <div className={styles.cardContainerInfo}>
                        <h2 className={styles.subTitle}>Ingresa los datos de contacto</h2>
                        <form onSubmit={onSubmit} className={styles.form}>
                            <Form label="Nombre" name="name" onChange={onChange} />
                            <Form label="Teléfono" name="phone" onChange={onChange} />
                            <Form label="Email" name="email" onChange={onChange} />
                            <div className={styles.btnCont}>
                                <button type="submit" className={styles.formBtn}>Finalizar compra</button>

                            </div>
                        </form>
                    </div>

                </div>)}

        </div>

    )
}

export default Checkout