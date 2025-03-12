import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddItem from './pages/AddItem';
import './styles.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to the Clothing App</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </Router>
  );
}

export default App;
