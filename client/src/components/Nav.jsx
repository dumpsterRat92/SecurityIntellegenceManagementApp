// Import necessary modules and components
import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  // Define Bootstrap classes for the navigation links
  const bootstrap = "nav-link text-dark";

  return (
    <Navbar
      // Define the links to be displayed in the Navbar
      links={[
        // Home link
        <Link key={1} className={bootstrap} to="/">
          Home
        </Link>,
        // Database link
        <Link key={2} className={bootstrap} to="/database">
          Database
        </Link>,
        // FAQ link
        <Link key={3} className={bootstrap} to="/faq">
          FAQ
        </Link>,
        // Support link
        <Link key={4} className={bootstrap} to="/support">
          Support
        </Link>,
        // Account link
        <Link key={5} className={bootstrap} to="/account">
          Account
        </Link>,
      ]}
    />
  );
}
