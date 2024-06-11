import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_PROFILE } from "../../utils/mutations";

export default function addProfile() {
  const [createProfile, { error: createProfileError }] =
    useMutation(CREATE_PROFILE);
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
  return (
    <form onSubmit={handleSubmit2}>
      <input
        type="text"
        name="firstName"
        placeholder="suspect first name"
        value={formData2.firstName}
        onChange={handleInputChange2}
        style={inputStyle}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="suspect last name"
        value={formData2.lastName}
        onChange={handleInputChange2}
        style={inputStyle}
      />
      <input
        type="number"
        name="age"
        placeholder="suspect age"
        value={formData2.age}
        onChange={handleInputChange2}
        style={inputStyle}
      />
      <input
        type="text"
        name="race"
        placeholder="suspect race"
        value={formData2.race}
        onChange={handleInputChange2}
        style={inputStyle}
      />
      <input
        type="text"
        name="gender"
        placeholder="suspect gender"
        value={formData2.gender}
        onChange={handleInputChange2}
        style={inputStyle}
      />
      <input
        type="text"
        name="hairColor"
        placeholder="suspect hair color"
        value={formData2.hairColor}
        onChange={handleInputChange2}
        style={inputStyle}
      />
      <input
        type="text"
        name="eyeColor"
        placeholder="suspect eye color"
        value={formData2.eyeColor}
        onChange={handleInputChange2}
        style={inputStyle}
      />
      <input
        type="text"
        name="height"
        placeholder="suspect height"
        value={formData2.height}
        onChange={handleInputChange2}
        style={inputStyle}
      />
      <input
        type="text"
        name="identifiers"
        placeholder="suspect identifying marks/traits"
        value={formData2.identifiers}
        onChange={handleInputChange2}
        style={inputStyle}
        required
      />
      <input
        type="text"
        name="violations"
        placeholder="suspect violations"
        value={formData2.violations}
        onChange={handleInputChange2}
        style={inputStyle}
        required
      />
      <input
        type="number"
        name="hostilityIndex"
        placeholder="suspect risk level"
        value={formData2.hostilityIndex}
        onChange={handleInputChange2}
        style={inputStyle}
        required
      />
      <button type="submit" style={buttonStyle}>
        {" "}
        Add Suspect
      </button>
    </form>
  );
}
