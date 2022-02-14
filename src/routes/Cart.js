import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";


const Cart = () => {
  const { items } = useContext(CartContext);

  return (
    <div>
      <ul>
        {items.map(({ item }) => (
          <li>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;