import React from 'react';
import PropTypes from 'prop-types';
import ItemCounter from './item-counter/itemCounter';

const ItemListContainer = (props) => {
  return <div>
      <hr></hr>
      <h2> ItemListContainer</h2>
      <ItemCounter stock={10}/>
      
      
  </div>;
};

ItemListContainer.propTypes = {};

export default ItemListContainer;
