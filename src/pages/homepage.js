import React from "react";
import { Link } from "react-router-dom";
import { Div, Navbar } from "../components/components.js";

const linkStyle = {
  padding: " 0 0.5rem ",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "bold",
};
const HomePage = () => {
  return (
    <>
      <Navbar>
        <Link style={linkStyle} to="/">
          Home
        </Link>
        <Link style={linkStyle} to="/About">
          About
        </Link>
      </Navbar>
      <Div>
        <h1>This is the home page</h1>
        <div>
          <Link to="/register">Sign up</Link>
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Go to your dashboard</Link>
        </div>
      </Div>
    </>
  );
};

export default HomePage;
