
import { useState } from "react";
import "./ItemCount.css"
import Button from 'react-bootstrap/Button';




const ItemCount = ({stock , initial , onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

   return(
            
            <div className = 'Counter'>
                <div className = 'Controls'>
                <button className = 'Button' variant="outline-dark" size="sm" onClick ={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
              
                <button className = "Button" variant="success" onClick ={increment}>+</button>
            </div>
            <div className="d-grid gap-2">
            <Button variant="outline-danger" size="lg" onClick={() => setQuantity(0)}>Reiniciar contador
             
            </Button>
            <Button variant="outline-success" size="lg" onClick = {()=> onAdd (quantity)} disabled = {!stock}> Agregar al carrito
          
            </Button>
            </div>
                       </div>
       
    )
}
    



export default ItemCount;
