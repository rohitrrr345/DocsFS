// In App.js
const handleDelete = (id) => {
  setItems((prevItems) => prevItems.filter((item) => item.id !== id));
};

return (
  <div>
    <h1>Item List</h1>
    {items.map((item) => (
      <Item key={item.id} item={item} onDelete={handleDelete} />
    ))}
  </div>
);
