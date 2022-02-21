import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";


export const LoadingContext = () => {
  const {isLoading, setisLoading} = useState(true);

  useEffect (() => {
    setTimeout (() => {
      setisLoading(false);
    }, 3000);
  }, []);
  
}

const Cart = () => {
  const { items } = useContext(CartContext);
  
 

  return (
    <div>
      {isLoading ? ( <h1>Loading...</h1> ) : (


      <ul>
        {items.map(({ item }) => (
          <li>
            {item.name} - {item.category}- {item.price} 
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}; 

export default Cart;