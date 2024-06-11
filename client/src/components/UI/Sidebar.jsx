import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useLocation, matchPath } from "react-router-dom";
import { CREATE_DATABASE, CREATE_PROFILE } from "../../utils/mutations";
import Auth from "../../utils/auth";
const inputStyle = {
  width: "100%",
  padding: "0.5rem",
  margin: "0.5rem 0",
  borderRadius: "4px",
  border: "1px solid #fff",
};
const sidePanelStyle = {
  width: "200px",
  backgroundColor: "#212121",
  padding: "7.2rem 1rem 1rem 1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  color: "#fff",
  boxSizing: "border-box",
};

const buttonStyle = {
  padding: "1rem",
  backgroundColor: "#d3d3d3",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  textAlign: "left",
  color: "#333",
};

export default function Sidebar(database) {
  const [addProfile, setaddProfile] = useState(false);
  const location = useLocation();
  const user = Auth.getProfile().data;
  const [createDatabase, { error: createDatabaseError }] =
    useMutation(CREATE_DATABASE);
  const [createProfile, { error: createProfileError }] =
    useMutation(CREATE_PROFILE);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });
  const [formData2, setFormData2] = useState({
    firstName: "",
    lastName: "",
    age: "",
    race: "",
    gender: "",
    hairColor: "",
    eyeColor: "",
    height: "",
    hostilityIndex: "",
    identifiers: "",
    violations: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (addProfile) {
      setFormData2({ ...formData2, [name]: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      console.log(formData2);
      const { data } = await createProfile({
        variables: {
          firstName: formData2.firstName,
          lastName: formData2.lastName,
          age: formData2.age,
          race: formData2.race,
          gender: formData2.gender,
          hairColor: formData2.hairColor,
          eyeColor: formData2.eyeColor,
          height: formData2.height,
          hostilityIndex: formData2.hostilityIndex,
          identifiers: [formData2.identifiers],
          violations: [formData2.violations],
          databaseId: database.database.databaseByUser.id,
        },
      });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
    setFormData2({
      firstName: "",
      lastName: "",
      age: "",
      race: "",
      gender: "",
      hairColor: "",
      eyeColor: "",
      height: "",
      hostilityIndex: "",
      identifiers: "",
      violations: "",
    });
    setaddProfile(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createDatabase({
        variables: {
          name: formData.name,
          description: formData.description,
          userId: user._id,
        },
      });
      console.log(data);
    } catch (e) {
      console.error("Error creating database:", e);
    }

    setFormData({
      name: "",
      description: "",
    });
  };
  return (
    <div style={sidePanelStyle}>
      {location.pathname === "/database" &&
        (database.database ? (
          <>
            <button style={buttonStyle}>Sort By</button>
            <button style={buttonStyle} onClick={() => setaddProfile(true)}>
              Add a Profile
            </button>
            {addProfile && (
              <>
                <form onSubmit={handleSubmit2}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="suspect first name"
                    value={formData2.firstNamename}
                    onChange={handleInputChange}
                    style={inputStyle}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="suspect last name"
                    value={formData2.lastName}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                  <input
                    type="number"
                    name="age"
                    placeholder="suspect age"
                    value={formData2.age}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="race"
                    placeholder="suspect race"
                    value={formData2.race}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="gender"
                    placeholder="suspect gender"
                    value={formData2.gender}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="hairColor"
                    placeholder="suspect hair color"
                    value={formData2.hairColor}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="eyeColor"
                    placeholder="suspect eye color"
                    value={formData2.eyeColor}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="height"
                    placeholder="suspect height"
                    value={formData2.height}
                    onChange={handleInputChange}
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="identifiers"
                    placeholder="suspect identifying marks/traits"
                    value={formData2.identifiers}
                    onChange={handleInputChange}
                    style={inputStyle}
                    required
                  />
                  <input
                    type="text"
                    name="violations"
                    placeholder="suspect violations"
                    value={formData2.violations}
                    onChange={handleInputChange}
                    style={inputStyle}
                    required
                  />
                  <input
                    type="number"
                    name="hostilityIndex"
                    placeholder="suspect risk level"
                    value={formData2.hostilityIndex}
                    onChange={handleInputChange}
                    style={inputStyle}
                    required
                  />
                  <button type="submit" style={buttonStyle}>
                    {" "}
                    Add Suspect
                  </button>
                </form>
              </>
            )}
            <button style={buttonStyle}>Delete a Profile</button>
            {/* <p onClick={() => setIsLogin(!isLogin)} style={toggleStyle}>
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p> */}
          </>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Database name"
                value={formData.name}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
              <input
                type="text"
                name="description"
                placeholder="Database description"
                value={formData.description}
                onChange={handleInputChange}
                style={inputStyle}
                required
              />
              <button style={buttonStyle} type="submit">
                Create New Database
              </button>
            </form>
          </>
        ))}
      {/* {(location.pathname === "/database" && database) && (
        <>
          <button style={buttonStyle}>Sort By</button>
          <button style={buttonStyle}>Add a Profile</button>
          <button style={buttonStyle}>Delete a Profile</button>
        </>
      )}
      {(location.pathname === "/database" && !database) && (
        <>
          <button style={buttonStyle}>Create New Database</button>
        </>
      )} */}
      {matchPath("/profile/:id", location.pathname) && (
        <>
          <button style={buttonStyle}>Update Profile</button>
          <button style={buttonStyle}>Delete Profile</button>
        </>
      )}
    </div>
  );
}
