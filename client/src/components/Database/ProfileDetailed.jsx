// Import necessary modules and components
import { useParams } from "react-router-dom";
import { QUERY_PROFILE } from "../../utils/queries";
import { useQuery } from "@apollo/client";

export default function ProfileDetailed() {
  // Retrieve the profile ID from the URL parameters
  const { profileId } = useParams();
  console.log(profileId); // Log the profile ID for debugging purposes

  // Execute GraphQL query to fetch profile data by ID
  const { loading, data } = useQuery(QUERY_PROFILE, {
    variables: { id: profileId },
  });

  // Display loading message while query is in progress
  if (loading) {
    return <p>Loading...</p>;
  }

  // Get profile data from the query result
  const profile = data?.profile;

  // Display a message if no profile is found
  if (!profile) {
    return <p>Profile not found</p>;
  }

  // Render profile details
  return (
    <div>
      <div className="id">
        <h2>First Name: {profile.firstName}</h2>
        <h2>Last Name: {profile.lastName}</h2>
        <p>Age: {profile.age}</p>
        <p>Race: {profile.race}</p>
        <p>Gender: {profile.gender}</p>
        <p>Hair Color: {profile.hairColor}</p>
        <p>Eye Color: {profile.eyeColor}</p>
        <p>Height: {profile.height}</p>
        <p>
          Risk Level:{" "}
          {["High", "Low", "Medium"][profile.hostilityIndex % 3]}
        </p>
        <div>
          Identifiers:{" "}
          {profile.identifiers.map((identifier, index) => (
            <p key={index}>{identifier}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
