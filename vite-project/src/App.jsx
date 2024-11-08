import React, { useEffect, useState } from 'react';
import Item from './components/Item';
import './styles/global.css';
import { useItems } from './Components/Context/ItemsContext';

function App() {
  const { items, setItems } = useItems();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/items')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [setItems]);

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    
    // Send delete request to the backend
    fetch(`https://api.example.com/items/${id}`, { method: 'DELETE' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete item');
        }
        console.log('Item deleted');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Item List</h1>
      {items.map((item) => (
        <Item key={item.id} item={item} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default App;
