
import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Card from 'react-bootstrap/Card';


function App() {
  return (
    <div className='App'>
      <Card />
    <BrowserRouter>
    <NavbarComp />
    <Routes>
    <Route path='/' element={<ItemListContainer />}  />
    <Route path='/category/:categoryId' element={<ItemListContainer />}  />
    <Route path='/item/:itemId' element={<ItemDetailContainer />}  />
    <Route path='*' element={<h1>404 NOT FOUND</h1>} />
    </Routes>
    </BrowserRouter>
    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada' , quantity)}/>
    </div>
  );
}


export default App;
