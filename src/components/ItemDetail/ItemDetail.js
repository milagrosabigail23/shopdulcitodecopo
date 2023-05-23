import ItemCount from '../ItemCount/ItemCount'

import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";

const ItemDetail = ({id ,name , img, category, description }) => {
    
          return (     
            <div className="container d-flex justify-content-center align-items-center h-100">    
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img} alt={name} />  
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
               <p>Descripción: {description}</p> 
               <p>Categoria: {category}</p> 
                </Card.Text>
                 <Link to={`/${id}`} className="btn btn-outline-danger" >Ver detalle</Link>
              </Card.Body>
            </Card>
             <div className='Itemcount-container'> </div>
             <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada' , quantity)}/>
              </div>
          );
        }
        export default ItemDetail
      
  