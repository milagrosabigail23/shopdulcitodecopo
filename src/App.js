
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
    <NavbarComp/>
    <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
    
  ); 
}

export default App;
