import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';

function App() {
  const [selectedItemId, setSelectedItemId] = useState(null);

  // Simulated list of items
  const items = [
    { _id: 1, name: 'Item 1', details: 'More details for item 1' },
    { _id: 2, name: 'Item 2', details: 'More details for item 2' },
    // Add more items
  ];

  const handleItemSelect = (itemId) => {
    console.log(itemId);
    setSelectedItemId(itemId);
  };

  return (
    <div>
      <h1>My App</h1>
      <ItemList items={items} onItemSelect={handleItemSelect} />
      {selectedItemId && <ItemDetails itemId={selectedItemId} items={items} />}
    </div>
  );
}

export default App;
