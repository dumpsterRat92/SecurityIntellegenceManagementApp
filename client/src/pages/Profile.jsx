import ProfileDetailed from "../components/Database/ProfileDetailed";
import Sidebar from "../components/UI/Sidebar";
export default function Profile() {
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
  return (
    <div style={containerStyle}>
      <Sidebar />
      <div style={mainContentStyle}>
        <ProfileDetailed />
      </div>
    </div>
  );
}
