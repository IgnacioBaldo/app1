import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../Hooks/useProducts";


const ItemDetailContainer = () => {
  const { products } = useProducts();
  const { id } = useParams();

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
    }
  }, [products]);

  return (
    <div>
      <h4>Producto seleccionado</h4>
      <h3>{selectedItem && selectedItem.name}</h3>
      {selectedItem && selectedItem.image && (
        <img src={selectedItem.image} alt="selectedItemImage" />
      )}
      <h4>{selectedItem && selectedItem.description}</h4>
      <p>ID: {selectedItem && selectedItem.id}</p>
      <p>STOCK seleccionado: {selectedItem && selectedItem.stock}</p>
    </div>
  );
};

export default ItemDetailContainer;