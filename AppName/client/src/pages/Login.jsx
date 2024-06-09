import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isLogin ? '/api/login' : '/api/signup';
    axios.post(url, formData)
      .then(response => {
        console.log(response.data);
        // Handle successful response
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error response
      });
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    width: '100%',
    boxSizing: 'border-box',
    margin: '0',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: '2rem',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '400px',
    boxSizing: 'border-box',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    margin: '0.5rem 0',
    borderRadius: '4px',
    border: '1px solid #fff',
  };

  const buttonStyle = {
    width: '100%',
    padding: '0.5rem',
    margin: '1rem 0',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#1e90ff',
    color: '#fff',
    cursor: 'pointer',
  };

  const toggleStyle = {
    color: '#1e90ff',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
        <p onClick={() => setIsLogin(!isLogin)} style={toggleStyle}>
          {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
        </p>
      </form>
    </div>
  );
}