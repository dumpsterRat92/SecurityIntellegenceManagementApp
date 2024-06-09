// export default function Support() {
//   return <div>Support stuff</div>;
// }
import React, { useState } from 'react';
import axios from 'axios';

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    issue: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/support', formData)
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
    padding: '6rem',
    backgroundColor: '#212121',
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
    maxWidth: '600px',
    boxSizing: 'border-box',
    marginBottom: '2rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    margin: '0.5rem 0',
    borderRadius: '4px',
    border: '1px solid #fff',
  };

  const textAreaStyle = {
    width: '100%',
    padding: '0.5rem',
    margin: '0.5rem 0',
    borderRadius: '4px',
    border: '1px solid #fff',
    minHeight: '100px',
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

  const contactInfoStyle = {
    width: '100%',
    maxWidth: '600px',
    textAlign: 'left',
    padding: '2rem',
    backgroundColor: '#333',
    borderRadius: '8px',
  };

  return (
    <div style={containerStyle}>
      <h1>Contact Support</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>Submit a Support Ticket</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
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
          type="text"
          name="issue"
          placeholder="Issue"
          value={formData.issue}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleInputChange}
          style={textAreaStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
      <div style={contactInfoStyle}>
        <h2>Contact Information</h2>
        <p>If you need further assistance, you can reach out to our support team:</p>
        <ul>
          <li>Email: support@sentrywatch.com</li>
          <li>Phone: 1-800-SENTRYWATCH</li>
          <li>Live Chat: Available on our website</li>
        </ul>
      </div>
    </div>
  );
}

