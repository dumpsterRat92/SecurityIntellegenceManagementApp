import backgroundImage from '../assets/wp2234726-aesthetic-spongebob-wallpapers.png'

export default function About() {
 const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    padding: '7rem', 
    backgroundColor: '#212121',
    // backgroundImage: `url(${backgroundImage})`,
    color: '#fff',
    textAlign: 'center',
    height: '1000vh', // Full viewport height
    width: '100%', // Full width
    boxSizing: 'border-box',
    margin: '0',
  };

  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '2rem 0',
    width: '100%',
  };

  const textContainerStyle = {
    flex: '1 1 300px',
    margin: '1rem'
  };

  const imageContainerStyle = {
    flex: '1 1 300px',
    margin: '1rem',
    backgroundColor: '#d3d3d3',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#333',
    fontSize: '1.5rem'
  };

  const buttonStyle = {
    padding: '1rem 2rem',
    backgroundColor: '#d3d3d3',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#333',
    marginTop: '1rem'
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <div style={textContainerStyle}>
          <h2>Welcome to SIMA: SentryWatch</h2>
          <p>
            Your Trusted Database for Identifying and Reporting Suspicious Individuals at SIMA: SentryWatch, we understand the critical importance of security in maintaining safe and secure environments. Our platform is dedicated to providing security professionals, guards, and community members with a comprehensive, user-friendly database to track and report suspicious individuals.
          </p>
        </div>
        <div style={imageContainerStyle}>
          <span>PLACEHOLDER</span>
        </div>
      </div>
      <div style={sectionStyle}>
        <div style={imageContainerStyle}>
          <span>PLACEHOLDER</span>
        </div>
        <div style={textContainerStyle}>
          <h2>Join SIMA: SentryWatch today</h2>
          <p>
            Become part of a proactive community dedicated to enhancing security and safety. By signing up, you gain access to our extensive database, real-time updates, and detailed profiles of suspicious individuals. Empower yourself with the tools to make informed decisions and contribute to a safer environment for everyone. Your vigilance can make a difference—join SIMA: SentryWatch today!
          </p>
          <button style={buttonStyle}>Sign-up here</button>
        </div>
      </div>
    </div>
  );
}
