import React from 'react';

function ItemDetails({ itemId, items }) {

  const selectedItem = items.find(i => i._id === itemId);

  if (!selectedItem) {
    return <div>Item not found.</div>;
  }

  return (
    <div>
      <h2>Item Details</h2>
      <p>{selectedItem.details}</p>
    </div>
  );
}

export default ItemDetails;
