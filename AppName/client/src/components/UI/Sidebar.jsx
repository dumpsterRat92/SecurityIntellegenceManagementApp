export default function Sidebar() {


  const sidebarStyle = {
    width: '200px',
    backgroundColor: '#00f',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    color: '#fff'
  };

  const buttonStyle = {
    padding: '1rem',
    backgroundColor: '#d3d3d3',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'left'
  };

  return (
    <div style={sidebarStyle} className="side-panel">
      <button style={buttonStyle}>Sort By</button>
      <button style={buttonStyle}>Add a Profile</button>
      <button style={buttonStyle}>Delete a Profile</button>
      {/* Add more buttons as needed */}
    </div>
  );
}


