import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { formatPrice } from '../../utilities'
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'
import styles from './ItemList.module.css'


const ItemList = ({ items, isLoading }) => {
    if (isLoading) {
        return <LoadingAnimation />
    }

    return (
        <div className={styles.itemListContainer}>
            <div>
                <ul className={styles.productListStyle}>
                    {items.map((item) => (
                        <li key={item.id} className={styles.productItem}>
                            <Link to={`/item/${item.id}`}>
                                <img src={`../../public/${item.img}`} alt="" className={styles.img} />
                                <h3 className={styles.name}>{item.name}</h3>
                                <div className={styles.descCard}>
                                    <p className={styles.price}>${formatPrice(item.price)}</p>
                                    <div className={styles.categoryContainer}><p>{item.category}</p></div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

ItemList.propTypes = {
    items: propTypes.array.isRequired,
    isLoading: propTypes.bool,
}

export default ItemList