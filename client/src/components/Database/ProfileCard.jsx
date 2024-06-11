// Import necessary modules and components
import { useQuery } from "@apollo/client";
import { QUERY_DATABASEBYUSER } from "../../utils/queries";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

// Define card style
const cardStyle = {
  backgroundColor: "#d3d3d3",
  padding: "1rem",
  borderRadius: "4px",
  margin: "1rem",
  width: "200px",
  textAlign: "center",
  cursor: "pointer",
};

// Define image style
const imgStyle = {
  width: "100%",
  height: "150px",
  backgroundColor: "#808080",
};

// Define main content style
const mainContentStyle = {
  flex: "1",
  padding: "6rem 2rem 2rem 2rem",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  backgroundColor: "#212121",
  boxSizing: "border-box",
};

export default function ProfileCard() {
  const { getProfile } = Auth;
  const user = getProfile(); // Get user profile from authentication
  console.log(user.data._id); // Log user ID for debugging purposes

  // Execute GraphQL query to fetch databases by user ID
  const { loading, error, data } = useQuery(QUERY_DATABASEBYUSER, {
    variables: {
      userId: user.data._id,
    },
  });

  // Handle mouse hover effect
  const handleHover = (e) => {
    e.target.style.backgroundColor = "#ff0000";
    e.target.style.color = "#fff";
  };

  // Handle mouse out effect
  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "";
    e.target.style.color = "";
  };

  // Display loading message while query is in progress
  if (loading) {
    return <p>loading...</p>;
  }

  // Display error message if query fails
  if (error) {
    return <p>{error.message}</p>; // Change to display error message correctly
  }

  return (
    <div style={mainContentStyle}>
      {data ? (
        // Map over profiles and create cards for each profile
        data.databaseByUser.profiles.map((profile) => (
          <div
            key={profile.id}
            style={cardStyle}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
          >
            <Link to={`/profile/${profile.id}`}>
              <div style={imgStyle}></div>
              <h3>
                {profile.firstName} {profile.lastName}
              </h3>
              <p>
                Identifiers:
                {profile.identifiers.map(
                  (identifier) => "\n" + identifier + ","
                )}
              </p>
              <p>
                Risk Level:{" "}
                {["High", "Low", "Medium"][profile.hostilityIndex % 3]}
              </p>
            </Link>
          </div>
        ))
      ) : (
        <p>No profiles found</p> // Change to a more user-friendly message
      )}
    </div>
  );
}
