// Import necessary components
import ProfileDetailed from "../components/Database/ProfileDetailed";
import Sidebar from "../components/UI/Sidebar";

export default function Profile() {
  // Define styles for the container and main content
  const containerStyle = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#fff",
  };

  const mainContentStyle = {
    flex: "1",
    padding: "6rem 2rem 2rem 2rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    boxSizing: "border-box",
  };

  // Render the Profile page with Sidebar and ProfileDetailed components
  return (
    <div style={containerStyle}>
      <Sidebar />
      <div style={mainContentStyle}>
        <ProfileDetailed />
      </div>
    </div>
  );
}
