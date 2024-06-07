export default function Nav({ links }) {
 
  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#d3d3d3'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const logoImageStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: '#808080',
    borderRadius: '50%'
  };

  const searchBarStyle = {
    flexGrow: 1,
    margin: '0 1rem',
    display: 'flex',
    justifyContent: 'center'
  };

  const searchBarInputStyle = {
    width: '100%',
    maxWidth: '600px',
    padding: '0.5rem',
    borderRadius: '4px',
    border: '1px solid #ccc'
  };

  const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0
  };

  const liStyle = {
    margin: '0 1rem'
  };

  const loginStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1rem'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#808080',
    color: 'white',
    cursor: 'pointer'
  };

  const containerFluidStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px'
  };

  return (
    <nav style={navStyle}>
      <div style={containerFluidStyle}>
        <div style={logoStyle}>
          <div style={logoImageStyle}></div>
          <span style={{ marginLeft: '1rem' }}>SIMA: SentryWatch</span>
        </div>
        <div style={searchBarStyle}>
          <input type="text" placeholder="Search" style={searchBarInputStyle} />
        </div>
        <ul style={ulStyle}>
          {links.map((link, index) => (
            <li key={index} style={liStyle}>
              {link}
            </li>
          ))}
        </ul>
        <div style={loginStyle}>
          <button style={buttonStyle}>Log In</button>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#808080', borderRadius: '50%', marginLeft: '1rem' }}></div>
        </div>
      </div>
    </nav>
  );
};

