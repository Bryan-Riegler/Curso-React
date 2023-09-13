import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../services'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const { addItem } = useContext(CartContext)

    useEffect(() => {
        getProduct(id).then((response) => {
            setItem(response)
        }).catch((error) => {
            console.log(error)
            setItem(null);
        })
            .finally(() => {
                setIsLoading(false)
            })
    }, [id])


    return (
        <ItemDetail item={item} isLoading={isLoading} addItem={addItem} />
    )
}

export default ItemDetailContainer