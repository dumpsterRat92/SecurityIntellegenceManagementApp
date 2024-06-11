import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Account() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from backend
    axios.get('/api/user')
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#212121',
    color: '#fff',
    minHeight: '100vh',
    width: '100%',
    boxSizing: 'border-box',
    margin: '0',
  };

  const sectionStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#333',
    borderRadius: '8px',
    boxSizing: 'border-box',
    textAlign: 'left',
  };

  const headingStyle = {
    marginBottom: '1rem',
    textAlign: 'center',
  };

  const tableStyle = {
    width: '100%',
    marginTop: '1rem',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    border: '1px solid #fff',
    padding: '0.5rem',
  };

  const tdStyle = {
    border: '1px solid #fff',
    padding: '0.5rem',
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    margin: '0.5rem 0',
    backgroundColor: '#d3d3d3',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#333',
  };

  if (!user) {
    return <div style={containerStyle}>Loading...</div>;
  }

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <h1 style={headingStyle}>Welcome, {user.name}!</h1>
        <h2 style={headingStyle}>Dashboard Overview</h2>
        <div>
          <h3>Recent Activity</h3>
          <ul id="recent-activity">
            {user.recentActivity && user.recentActivity.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Alerts</h3>
          <ul id="alerts">
            {user.alerts && user.alerts.map((alert, index) => (
              <li key={index}>{alert}</li>
            ))}
          </ul>
        </div>
        <h2 style={headingStyle}>Your Suspect List</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Last Seen</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody id="suspect-list">
            {user.suspects && user.suspects.map((suspect, index) => (
              <tr key={index}>
                <td style={tdStyle}>{suspect.name}</td>
                <td style={tdStyle}>{suspect.description}</td>
                <td style={tdStyle}>{suspect.lastSeen}</td>
                <td style={tdStyle}>{suspect.status}</td>
                <td style={tdStyle}>
                  <button style={buttonStyle}>View</button>
                  <button style={buttonStyle}>Edit</button>
                  <button style={buttonStyle}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button style={buttonStyle}>Add a New Suspect</button>
      </div>
      <div style={sectionStyle}>
        <h2 style={headingStyle}>Account Settings</h2>
        <div>
          <h3>Profile Information</h3>
          <p>View and edit personal details</p>
        </div>
        <div>
          <h3>Security Settings</h3>
          <p>Change password, update</p>
        </div>
        <div>
          <h3>Notification Preferences</h3>
          <p>Set preferences for email, SMS alerts</p>
        </div>
        <h2 style={headingStyle}>Support</h2>
        <div>
          <h3>Help Center</h3>
          <p>Link to FAQ, tutorials and support articles</p>
        </div>
        <div>
          <h3>Contact Support</h3>
          <p>Form or contact details for customer support</p>
        </div>
        <h2 style={headingStyle}>Logout</h2>
        <button style={buttonStyle}>Logout</button>
      </div>
    </div>
  );
}
