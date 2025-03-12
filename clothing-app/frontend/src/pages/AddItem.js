import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/items/add', 
        { name, description, price, imageUrl },
        { headers: { Authorization: `Bearer ${token}` } }
       
      );
      console.log(response)
      alert('Item added successfully');
      window.location.href = '/dashboard';
    } catch (error) {
      alert('Failed to add item');
    }
  };

  return (
    <form onSubmit={handleAddItem}>
      <h2>Add New Item</h2>
      <label>Item Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <label>Price:</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <label>Image URL:</label>
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItem;
