import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//export default ItemDetailContainer;
import ItemDetail from './components/ItemDetail/ItemDetail';
import Item from './components/Item/Item';
export default ItemDetail;




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  
  
    
  
  
  );