export default function ProfileCard() {

    const cardStyle = {
      backgroundColor: '#d3d3d3',
      padding: '1rem',
      borderRadius: '4px',
      margin: '1rem',
      width: '200px',
      textAlign: 'center',
      cursor: 'pointer'
    };
  
    const imgStyle = {
      width: '100%',
      height: '150px',
      backgroundColor: '#808080'
    };
  
    const handleHover = (e) => {
      e.target.style.backgroundColor = '#ff0000';
      e.target.style.color = '#fff';
    };
  
    const handleMouseOut = (e) => {
      e.target.style.backgroundColor = '';
      e.target.style.color = '';
    };
  
    return (
      <div
        style={cardStyle}
        onMouseOver={handleHover}
        onMouseOut={handleMouseOut}
      >
        <div style={imgStyle}></div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Risk Level: {riskLevel}</p>
      </div>
    );
  }