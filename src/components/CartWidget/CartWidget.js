import carrito from './assets/carrito.svg';
import "./CartWidget.css"
//import "../ItemCount/ItemCount"

const CartWidget = () => {
    return (
        <div className='cart-widget'>
            <img classMame="carrito" src={carrito} alt="carrito-wdiget"/>
          
        </div>
    );
};

export default CartWidget;