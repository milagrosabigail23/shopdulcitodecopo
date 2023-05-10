
import './App.css';
//import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {
  return (
    <div className='App'>
      <NavbarComp />
      <ItemListContainer />
      <ItemDetailContainer/>
      <ItemDetail />
    </div>


    
  ); 
}

export default App;
