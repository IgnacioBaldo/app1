import logo from './logo.svg';
import './App.css';
import jsFundamental from './js-fundamental';
import Navbar2 from './Components/navBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ItemListContainer from './Components/ItemListContainer';





function App() {
  return (
    <div className="App">
      <Navbar2 />
      
    <ItemListContainer />
    

      <hr></hr>

     <h1>Hola CoderHouse!</h1>
    </div>
  );
}

export default App;
