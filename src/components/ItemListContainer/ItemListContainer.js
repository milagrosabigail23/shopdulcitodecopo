import { useState , useEffect } from 'react'
import { getProducts } from '../../asyncMock'
//import { getProducts , getProductsByCategory } from '../../asyncMock' CORREGIR
import ItemList from '../ItemList/ItemList'
//import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState(null)


    useEffect (() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error=>{
                console.error(error)
        })
    }, [])


    return (
        <div>
            <h1> {greeting} </h1>
            <ItemList products = {products}/>
        </div> 
    )
}


export default ItemListContainer
