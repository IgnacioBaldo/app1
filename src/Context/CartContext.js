import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (currentItem) => {
    if (items.some(({ item }) => item.id === currentItem.item.id)) return;
    setItems([...items, currentItem]);
  };
   const removeItem = (ItemId) => { 
       setItems(items.filter((item) => item.item.id != ItemId)); 
  };
   const cleanerAll = () => {    
     setItems([]);  
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        cleanerAll,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};