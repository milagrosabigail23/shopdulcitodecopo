import { useState  } from 'react';
import CartWidget from '../CartWidget/CartWidget';

    const ItemCount = ({stock , initial , onAdd}) => {
        const [agregarUno , setAgregarUno] = useState(initial);
        
        const increment = () => {
            if (agregarUno < stock){
                setAgregarUno (agregarUno+1)
            }
        }
        const decrement = () =>{
            if (agregarUno > 1){
                setAgregarUno (agregarUno-1)
            }
        }
        
        return(
            
            <div className = 'Counter'>
                <h2>Agregaste al carrito {agregarUno}</h2>
            <div className = 'Controls'>
                <button className = "Button" onClick ={decrement}>-</button>
                <h4 className = 'Number'>{agregarUno}</h4>
                <button className = "Button" onClick ={increment}>+</button>
                <button className="Button" onClick={() => setAgregarUno(0)}>Reiniciar contador</button>
                <button className = "Button" onClick = {()=> onAdd (agregarUno)} disabled = {!stock}> Agregar al carrito </button>
            </div>
            </div>
            
        )
    }
    
    
    export default ItemCount;
