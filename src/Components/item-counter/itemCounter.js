import React, {useEffect, useState} from 'react';

const ItemCounter = ({stock, setStockSelected}) => {
  const [counter, setItemCounter] = useState(0);


  useEffect (() => {
    setStockSelected(counter)
  }, [counter])

  const minusItemCounter = () => {
    if (counter <= 0) return;
    setItemCounter(counter - 1);
  };
  const plusItemCounter = () => {
    if (counter >= stock) return;
    setItemCounter(counter + 1);
  };
  return(
  <>
    <div>
        <hr></hr>
      <button onClick={minusItemCounter}>-</button>
      <spam>{counter}</spam>
      <button onClick={plusItemCounter}>+</button>
    </div>
  </>
  )
};

export default ItemCounter;
