import backgroundImage from '../assets/ddc5r18-8c10d7aa-9796-432a-bf4a-9dbb6386f5ab.png';
export default function Database() {
  const containerStyle = {
    display: 'flex',
    minHeight: '100vh',
    backgroundColor: '#fff',
    backgroundImage: `url(${backgroundImage})`,
  };

  const sidePanelStyle = {
    width: '200px',
    backgroundColor: '#212121',
    padding: '7.2rem 1rem 1rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    color: '#fff',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '1rem',
    backgroundColor: '#d3d3d3',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    textAlign: 'left',
    color: '#333',
  };

  const mainContentStyle = {
    flex: '1',
    padding: '6rem 2rem 2rem 2rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around', 
    backgroundColor: '#212121',
    boxSizing: 'border-box',
  };

  const cardStyle = {
    backgroundColor: '#d3d3d3',
    padding: '1rem',
    borderRadius: '4px',
    margin: '1rem',
    width: 'calc(25% - 2rem)', 
    boxSizing: 'border-box',
    textAlign: 'center',
    cursor: 'pointer',
  };

  const imgStyle = {
    width: '100%',
    height: '150px',
    backgroundColor: '#808080',
    marginBottom: '1rem',
  };

  return (
    <div style={containerStyle}>
      <div style={sidePanelStyle}>
        <button style={buttonStyle}>Sort By</button>
        <button style={buttonStyle}>Add a Profile</button>
        <button style={buttonStyle}>Delete a Profile</button>
      </div>
      <div style={mainContentStyle}>
        {/* Example cards, replace with actual data */}
        {[...Array(8)].map((_, index) => (
          <div key={index} style={cardStyle}>
            <div style={imgStyle}></div>
            <h3>Suspect Name {index + 1}</h3>
            <p>Brief Description</p>
            <p>Risk Level: {['High', 'Medium', 'Low'][index % 3]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
