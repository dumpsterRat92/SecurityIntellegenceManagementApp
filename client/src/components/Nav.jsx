import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  const bootstrap = "nav-link text-dark";

  return (
    <Navbar
      links={[
        <Link key={1} className={bootstrap} to="/">
          Home
        </Link>,
        <Link key={2} className={bootstrap} to="/database">
          Database
        </Link>,
        <Link key={3} className={bootstrap} to="/faq">
          FAQ
        </Link>,
        <Link key={4} className={bootstrap} to="/support">
          Support
        </Link>,
        <Link key={5} className={bootstrap} to="/account">
          Account
        </Link>,
      ]}
    />
  );
}
