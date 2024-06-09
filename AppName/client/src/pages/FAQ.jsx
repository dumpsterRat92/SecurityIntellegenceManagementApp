export default function FAQ() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5rem',
    backgroundColor: '#333',
    color: '#FFF',
    // minHeight: '100vh',
    width: '100%',
    boxSizing: 'border-box',
    margin: '0',
  };

  const sectionStyle = {
    width: '100%',
    maxWidth: '1200px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#212121',
    borderRadius: '8px',
    boxSizing: 'border-box',
    textAlign: 'left',
  };

  const headingStyle = {
    marginBottom: '1rem',
    textAlign: 'center',
  };

  const questionStyle = {
    marginBottom: '1rem',
  };

  const subHeadingStyle = {
    marginTop: '1.5rem',
    marginBottom: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Frequently Asked Questions (FAQs)</h1>
      <div style={sectionStyle}>
        <h2 style={subHeadingStyle}>General Questions</h2>
        <div style={questionStyle}>
          <strong>What is SIMA: SentryWatch?</strong>
          <p>SIMA: SentryWatch is a comprehensive database designed to help security professionals and community members track and report suspicious individuals. It provides detailed profiles, real-time updates, and tools for effective monitoring and reporting.</p>
        </div>
      </div>
      <div style={sectionStyle}>
        <h2 style={subHeadingStyle}>Account Management</h2>
        <div style={questionStyle}>
          <strong>How do I create an account?</strong>
          <p>To create an account, click on the "Sign Up" button on the home page, fill in your details, and submit the form. You will receive a confirmation email to verify your account.</p>
        </div>
        <div style={questionStyle}>
          <strong>How can I reset my password?</strong>
          <p>If you've forgotten your password, click on the "Forgot Password?" link on the login page. Enter your email address, and we will send you instructions to reset your password.</p>
        </div>
        <div style={questionStyle}>
          <strong>How do I update my profile information?</strong>
          <p>Log in to your account, go to the "Account Settings" section, and update your profile information. Don’t forget to save your changes.</p>
        </div>
      </div>
      <div style={sectionStyle}>
        <h2 style={subHeadingStyle}>Suspect Management</h2>
        <div style={questionStyle}>
          <strong>How do I add a new suspect?</strong>
          <p>To add a new suspect, click on the "Add New Suspect" button on your account main page. Fill in the necessary details and submit the form.</p>
        </div>
        <div style={questionStyle}>
          <strong>How can I edit a suspect's details?</strong>
          <p>Navigate to your suspect list, click on the "Edit" button next to the suspect’s name, update the necessary details, and save your changes.</p>
        </div>
        <div style={questionStyle}>
          <strong>How do I request the deletion of a suspect?</strong>
          <p>Click on the "Request Deletion" button next to the suspect’s profile in your suspect list. Provide a reason for the deletion request, and our team will review it.</p>
        </div>
      </div>
      <div style={sectionStyle}>
        <h2 style={subHeadingStyle}>Security & Privacy</h2>
        <div style={questionStyle}>
          <strong>How do I ensure my account is secure?</strong>
          <p>Use a strong, unique password for your account. Enable two-factor authentication (if available) and regularly update your password. Be cautious of phishing attempts and do not share your login details with others.</p>
        </div>
        <div style={questionStyle}>
          <strong>What is SIMA: SentryWatch's privacy policy?</strong>
          <p>SIMA: SentryWatch is committed to protecting your privacy. You can read our detailed privacy policy here to understand how we handle your data.</p>
        </div>
      </div>
      <div style={sectionStyle}>
        <h2 style={subHeadingStyle}>Using SIMA: SentryWatch</h2>
        <div style={questionStyle}>
          <strong>How do I search for a suspect?</strong>
          <p>Use the search bar on your account main page to enter the suspect’s name, description, or any other identifying details. The results will display matching profiles.</p>
        </div>
        <div style={questionStyle}>
          <strong>How do I receive alerts for new updates?</strong>
          <p>You can set your notification preferences in the "Account Settings" section to receive email or SMS alerts for new updates relevant to your area.</p>
        </div>
      </div>
      <div style={sectionStyle}>
        <h2 style={subHeadingStyle}>Technical Issues</h2>
        <div style={questionStyle}>
          <strong>Why am I not receiving email notifications?</strong>
          <p>Ensure that the email notifications are enabled in your account settings. Check your spam/junk folder and add our email address to your contacts. If the issue persists, contact support.</p>
        </div>
        <div style={questionStyle}>
          <strong>What should I do if I encounter a technical issue?</strong>
          <p>First, try refreshing the page or clearing your browser cache. If the problem continues, submit a support ticket with details of the issue, and our technical team will assist you.</p>
        </div>
      </div>
      <div style={sectionStyle}>
        <h2 style={subHeadingStyle}>Can't find what you're looking for?</h2>
        <p>If you need further assistance, reach out to our support team via email at support@SIMASentryWatch.com or call 1-800-SIMASENTRYWATCH. You can also start a live chat or submit a support ticket through our support page.</p>
      </div>
    </div>
  );
}
