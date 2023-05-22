
import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';



const Item = ({id , name , img ,price , stock}) => {

    return (
        <div className="container d-flex justify-content-center align-items-center h-100">  
        <div className="row">
            <div className="col-md-4">
            <Card border="info" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} alt={name} /> 
            <Card.Title>{name}</Card.Title>
                 <Card.Text>
                  <p>Precio: $ {price}</p>
                  <p>Stock: {stock}</p>
                 <Link to={`/item/${id}`} className="btn btn-outline-secondary rounded-0">Ver detalle</Link>
               </Card.Text> 
            </Card>
            </div>
            </div>
            </div>
            )}


    
export default Item

