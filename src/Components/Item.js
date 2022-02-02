import { useState } from "react";
import ItemCounter from "./item-counter/itemCounter";



const Item = ({id, name, description, stock, setSelectedItem}) =>{
    const [stockSelected, setStockSelected] = useState (0);

    const selectedItem = () =>
        setSelectedItem ({id, name, description, stock: stockSelected});

    return (
        <>
        <div>
            <h2>Producto: {name}</h2>
            <h4>Descripcion: {description}</h4>
            <ItemCounter stock={stock} setStockSelected={setStockSelected} />
            <button onClick={selectedItem}>Seleccionar Producto</button>

        </div>

        </>
    );
};

export default Item;