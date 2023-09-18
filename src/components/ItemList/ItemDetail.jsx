import PropTypes from 'prop-types';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import Swal from 'sweetalert2';
import { formatPrice } from '../../utilities';
import { useState } from 'react';
import styles from './ItemDetail.module.css';

const ItemDetail = ({ item, isLoading, addItem }) => {
    if (isLoading) {
        return <LoadingAnimation />
    }

    if (!item) {
        return null;
    }

    const [quantity, setQuantity] = useState(1);

    const quantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
    }

    const handleClick = () => {
        addItem(item, quantity);
        if (quantity == 1) {
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado correctamente'
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Productos agregados correctamente'
            })
        }

    }



    return (
        <div className={styles.container}>
            <div className={styles.contImgInfo}>
                <div className={styles.title}>
                    <h1 className={styles.name}>{item.name}</h1>
                    <p>{item.category}</p></div>
                <div className={styles.infoImg}>
                    <img src={`../../${item.img}`} className={styles.img} alt="" />
                    <div className={styles.containerInfo}>
                        <p>-Tripulacion: {item.tripulacion}</p>
                        <p>-Capacidad: {item.capacidad}</p>
                        <p>-Motor: {item.motor}</p>
                        <p>-Potencia: {item.potencia}</p>
                        <p>-Consumo: {item.consumo}</p>
                        <p>-Combustible total: {item.comb}</p>
                        <p>-Autonomia: {item.autonomia}</p>
                        <p>-Helice de: {item.helice}</p>
                        <div className={styles.priceCategory}>
                            <p>Precio: ${formatPrice(item.price)}</p>

                        </div>
                        <div className={styles.addContainer}>
                            <div>
                                <label htmlFor="quantitySelect">Cantidad: </label>
                                <select value={quantity} id="quantitySelect" onChange={quantityChange} className={styles.select}>
                                    {Array.from({ length: 10 }, (_, index) => (
                                        <option key={index} value={index + 1}>
                                            {index + 1}
                                        </option>
                                    ))}
                                </select></div>
                            <button onClick={handleClick} className={styles.btn}>Agregar al carrito</button>

                        </div>

                    </div>
                </div>
                <div className='container mt-5'><p className={styles.description}>{item.description}</p></div>
            </div>


        </div>
    )
}

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
}

export default ItemDetail