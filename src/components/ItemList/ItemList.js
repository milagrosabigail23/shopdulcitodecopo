
import Item from '../Item/Item'


const ItemList = ({products}) => {
    return(
        <div className = 'ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} stock={prod.stock} img={prod.img}
            price={prod.price}
            name={prod.name} />) } 
        </div>
    )
}


export default ItemList