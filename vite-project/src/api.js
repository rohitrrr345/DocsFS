// api.js
export const fetchItems = async () => {
    const response = await fetch('https://api.com/items');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  };
  