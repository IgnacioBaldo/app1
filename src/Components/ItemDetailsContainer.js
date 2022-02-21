import React, {useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../Hooks/useProducts";
import { CartContext } from "../Context/CartContext";
import ItemCounter from "./item-counter/itemCounter";


const ItemDetailContainer = () => {
  const { products } = useProducts();
  const { id } = useParams();
  const { addItem } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);
  const { cleanerAll } = useContext(CartContext);

  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [userName, setUserName] = useState("")

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id === id);
      setSelectedItem(selectedProduct);
    }
  }, [products]);

  const handleAddToCart = () => {
    addItem({
      item: selectedItem,
      quantity,
    });
  };

  const handleRemoveToCart = () => {
    removeItem({
      item: selectedItem,
      quantity,
    });
  };
  const handleCleanerToCart = () => {
    cleanerAll({
      item: selectedItem,
      quantity,
    });
  };

  

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
      <ItemCounter
        stock={selectedItem?.stock || 10}
        setSotckSelected={setQuantity}
        />
        <button onClick={handleAddToCart}>Add to Cart </button>
        <button onClick={handleRemoveToCart}>Remove </button>
        <button onClick={handleCleanerToCart}>Cleaner </button>
     

    </div>
  );
};

export default ItemDetailContainer;