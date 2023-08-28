import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../../services'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();


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
        <ItemDetail item={item} isLoading={isLoading} />
    )
}

export default ItemDetailContainer