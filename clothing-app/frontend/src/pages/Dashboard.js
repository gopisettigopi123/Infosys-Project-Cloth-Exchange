import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items');
        setItems(response.data);
      } catch (error) {
        alert('Failed to fetch items');
      }
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/add-item">Add New Item</Link>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            {item.imageUrl && <img src={item.imageUrl} alt={item.name} style={{ width: '100px' }} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
