// Import necessary modules and components
import Auth from "../utils/auth";
import ProfileCard from "../components/Database/ProfileCard";
import Sidebar from "../components/UI/Sidebar";
import { useQuery } from "@apollo/client";
import { QUERY_DATABASEBYUSER } from "../utils/queries";

// Define container style
const containerStyle = {
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "#fff",
};

export default function Database() {
  const { loggedIn } = Auth;

  // Check if user is logged in
  if (!loggedIn()) {
    return <p>Please Log In</p>;
  }

  const { getProfile } = Auth;
  const user = getProfile(); // Get user profile from authentication
  console.log(user.data._id); // Log user ID for debugging purposes

  // Execute GraphQL query to fetch database by user ID
  const { loading, error, data } = useQuery(QUERY_DATABASEBYUSER, {
    variables: {
      userId: user.data._id,
    },
  });
  console.log(data); // Log the data for debugging purposes

  // If data is fetched, display the sidebar and profile card
  if (data) {
    return (
      <div style={containerStyle}>
        <Sidebar database={data} />
        <ProfileCard />
      </div>
    );
  } else {
    // If no data is fetched, display the sidebar with empty database
    return <Sidebar database={data} />;
  }
}
