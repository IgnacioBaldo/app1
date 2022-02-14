import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Routes  from '../src/routes/Routes';
import { CartProvider } from "./Context/CartContext";


function App() {
  return (
    <div className="App">
      <CartProvider >
        <Routes />     
      </CartProvider >
    </div>
  );
}

export default App;
