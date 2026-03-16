import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const authToken = sessionStorage.getItem("auth-token");

  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("phone");

    window.location.reload();
  };

  return (

    <nav className="navbar">

      <h2>StayHealthy</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        {!authToken ? (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <button onClick={handleLogout}>
            Logout
          </button>
        )}

      </div>

    </nav>

  );
}

export default Navbar;