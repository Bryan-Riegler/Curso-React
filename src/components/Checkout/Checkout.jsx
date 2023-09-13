import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';
import { getCartTotal, formatPrice, mapCartToOrder } from '../../utilities';
import Form from '../Form/Form';
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../../services';

const Checkout = () => {
    const { cart } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null);

    const [formState, setFormState] = useState({ name: "", phone: "", email: "" });

    const { name, phone, email } = formState;

    const onChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const isFormValid = name && phone && email;

    const onSubmit = (event) => {
        event.preventDefault();
        if (isFormValid) {
            Checkout()
            console.log("enviado")
        }
    }

    const Checkout = () => {
        const order = {
            buyer: {
                ...formState
            },
            items: mapCartToOrder(cart),
            total: getCartTotal(cart),
            date: serverTimestamp(),
        };
        console.log(order);
        createOrder(order)
            .then((docRef) => {
                console.log("orden creada", docRef)
                setOrderId(docRef.id);
            })
            .catch((error) => {
                console.log(error)
            })
    }


    return (
        <div>
            <h1>Checkout</h1>
            {orderId && <p>Su id de compra es: {orderId}</p>}

            {!orderId && (<> <div>
                <h2>Ingresa los datos de contacto</h2>
                <form onSubmit={onSubmit}>
                    <Form label="Nombre" name="name" onChange={onChange} />
                    <Form label="Teléfono" name="phone" onChange={onChange} />
                    <Form label="Email" name="email" onChange={onChange} />
                    <button type="submit">Finalizar compra</button>
                </form>
            </div>

                <div>
                    <h2>Detalles de la compra</h2>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                <p>{item.id.name}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Precio por unidad: ${formatPrice(item.id.price)}</p>
                                <p>Subtotal: ${formatPrice(item.id.price * item.quantity)}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <p>Total: ${getCartTotal(cart)}</p>
            </>)}

        </div>

    )
}

export default Checkout