import React, { useEffect, useState } from 'react';
import { productsAPI } from './helpers/promises';
import { products } from './data/products';
import Item from './Item';


const ItemListContainer = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getProducts();
  },[]);

  const getProducts = async () => {
    try {
      const result = await productsAPI;
      setProducts(result);
    } catch (error) {
      console.log({error});
    } finally {
      setLoading(false);
      console.log("Terminacion de API");
    }
  };

  if(loading) {
    return <h1>LOADING...</h1>;
  }

  return (
    <div>
      <h2>Productos</h2>
      <h3>Producto Seleccionado</h3>
      <p>{selectedItem && selectedItem.name}</p>
      <p>{selectedItem && selectedItem.description}</p>
      <p>ID: {selectedItem && selectedItem.id}</p>
      <p>Cantidad: {selectedItem && selectedItem.stock}</p>
      <hr/>
      {products.map((product) =>(
        <Item key={products.id} {...product} setSelectedItem={setSelectedItem}/>
      
      ))}
    </div>
  );
  
};



export default ItemListContainer;
