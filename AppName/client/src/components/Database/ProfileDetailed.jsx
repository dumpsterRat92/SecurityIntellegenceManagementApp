import { useParams } from "react-router-dom";
import { QUERY_PROFILE } from "../../utils/queries";
import { useQuery } from "@apollo/client";

export default function ProfileDetailed() {
  const { profileId } = useParams();
  console.log(profileId);
  const { loading, data } = useQuery(QUERY_PROFILE, {
    variables: { id: profileId },
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  const profile = data?.profile;
  if (!profile) {
    return <p>Profile not found</p>;
  }
  return (
    <div>
      <div className="id">
        <h2>First Name: {data.profile.firstName}</h2>
        <h2>Last Name: {data.profile.lastName}</h2>
        <p>Age: {data.profile.age}</p>
        <p>Race: {data.profile.race}</p>
        <p>Gender: {data.profile.gender}</p>
        <p>Hair Color: {data.profile.hairColor}</p>
        <p>Eye Color: {data.profile.eyeColor}</p>
        <p>Height: {data.profile.height}</p>
        <p>
          Risk Level:{" "}
          {["High", "Low", "Medium"][data.profile.hostilityIndex % 3]}
        </p>
        <div>
          Identifiers:{" "}
          {data.profile.identifiers.map((identifier, index) => (
            <p key={index}>{identifier}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
