import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (

    <nav className="navbar">

      <h2>StayHealthy</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/signup">Sign Up</Link>

        <Link to="/login">Login</Link>

      </div>

    </nav>

  );
}

export default Navbar;