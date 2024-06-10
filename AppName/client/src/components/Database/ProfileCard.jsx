import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_DATABASEBYUSER } from "../../utils/queries";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const cardStyle = {
  backgroundColor: "#d3d3d3",
  padding: "1rem",
  borderRadius: "4px",
  margin: "1rem",
  width: "200px",
  textAlign: "center",
  cursor: "pointer",
};

const imgStyle = {
  width: "100%",
  height: "150px",
  backgroundColor: "#808080",
};

export default function ProfileCard() {
  const { getProfile } = Auth;
  const user = getProfile();
  console.log(user.data._id);
  // "666643f1d7aba59e6bc4eedb"
  const { loading, error, data } = useQuery(QUERY_DATABASEBYUSER, {
    variables: {
      userId: user.data._id,
    },
  });
  const handleHover = (e) => {
    e.target.style.backgroundColor = "#ff0000";
    e.target.style.color = "#fff";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "";
    e.target.style.color = "";
  };

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {data ? (
        data.databaseByUser.profiles.map((profile) => (
          <div
            key={profile.id}
            style={cardStyle}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
          >
            <div style={imgStyle}></div>
            <h3>
              {profile.firstName} {profile.lastName}
            </h3>
            <p>
              Identifiers:
              {profile.identifiers.map((identifier) => "\n" + identifier + ",")}
            </p>
            <p>
              Risk Level:{" "}
              {["High", "Low", "Medium"][profile.hostilityIndex % 3]}
            </p>
          </div>
        ))
      ) : (
        <p>FUCKING NOTHING</p>
      )}
    </div>
  );
}
