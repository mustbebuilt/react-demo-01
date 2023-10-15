import React, { useState } from 'react';

function ItemList({ items, onItemSelect }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item._id}>{item.name}
          <button onClick={() => onItemSelect(item._id)}>Show Details</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
