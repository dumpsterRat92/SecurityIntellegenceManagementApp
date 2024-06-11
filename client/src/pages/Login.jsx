// Import necessary modules and components
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN, CREATE_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import backgroundImage from '../assets/b8079ebd75f8099cc56cc1ad074cb75b.jpg';

export default function Login() {
  // State to toggle between login and sign-up forms
  const [isLogin, setIsLogin] = useState(true);
  // State to store form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Define GraphQL mutations for login and sign-up
  const [loginFunc, { error: loginError, data: loginData }] = useMutation(LOGIN);
  const [signup, { error: signupError, data: signupData }] = useMutation(CREATE_USER);

  // Handle input change and update form data state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission for login or sign-up
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      if (isLogin) {
        // Perform login
        const { data } = await loginFunc({
          variables: {
            email: formData.email,
            password: formData.password,
          },
        });
        console.log(data);
        Auth.login(data.login.token);
      } else {
        // Perform sign-up
        const { data } = await signup({
          variables: { ...formData },
        });
        console.log(data);
        Auth.login(data.createUser.token);
      }
    } catch (e) {
      console.error(e);
    }

    // Reset form data after submission
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  // Define styles for the component
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: "#000",
    backgroundImage: `url(${backgroundImage})`,
    color: "#fff",
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
    margin: "0",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "2rem",
    borderRadius: "8px",
    width: "100%",
    maxWidth: "400px",
    boxSizing: "border-box",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    margin: "0.5rem 0",
    borderRadius: "4px",
    border: "1px solid #fff",
  };

  const buttonStyle = {
    width: "100%",
    padding: "0.5rem",
    margin: "1rem 0",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#1e90ff",
    color: "#fff",
    cursor: "pointer",
  };

  const toggleStyle = {
    color: "#1e90ff",
    cursor: "pointer",
    textDecoration: "underline",
  };

  // Render the login/sign-up form
  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            style={inputStyle}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
        <p onClick={() => setIsLogin(!isLogin)} style={toggleStyle}>
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </form>
    </div>
  );
}
