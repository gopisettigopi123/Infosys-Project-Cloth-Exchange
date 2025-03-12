import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
      alert('Registration Successful!');
      window.location.href = '/login';
    } catch (error) {
      alert(error.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <label>Username:</label>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
