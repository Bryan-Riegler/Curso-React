import PropTypes from 'prop-types';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import Swal from 'sweetalert2';
import styles from './ItemDetail.module.css';

const ItemDetail = ({ item, isLoading }) => {
    if (isLoading) {
        return <LoadingAnimation />
    }

    if (!item) {
        return null;
    }

    const handleClick = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Esta funcion no está disponible',
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.contImgInfo}>
                <div className={styles.title}>
                    <h1 className={styles.name}>{item.name}</h1>
                    <p>{item.category}</p></div>
                <div className={styles.infoImg}>
                    <img src={item.img} className={styles.img} alt="" />
                    <div className={styles.containerInfo}>
                        <p>Tripulacion: {item.tripulacion}</p>
                        <p>Capacidad: {item.capacidad}</p>
                        <p>Motor: {item.motor}</p>
                        <p>Potencia: {item.potencia}</p>
                        <p>Consumo: {item.consumo}</p>
                        <p>Combustible total: {item.comb}</p>
                        <p>Autonomia: {item.autonomia}</p>
                        <p>Helice de: {item.helice}</p>
                        <div className={styles.priceCategory}>
                            <p>Precio: ${item.price}</p>

                        </div>
                        <button onClick={handleClick} className={styles.btn}>Agregar al carrito</button>
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