import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const authToken = sessionStorage.getItem("auth-token");
  const userName = sessionStorage.getItem("name");

  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };

  return (
    <nav className="navbar">

      <h2>StayHealthy</h2>

      {/* 👇 IMPORTANTE: usar "menu" (no nav-links) */}
      <div className="menu">

        <Link to="/">Home</Link>

        {!authToken ? (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <div className="dropdown">

            {/* 👇 Nombre del usuario */}
            <span onClick={() => setShowDropdown(!showDropdown)}>
              {userName || "User"} ▼
            </span>

            {/* 👇 Dropdown */}
            {showDropdown && (
              <div className="dropdown-menu">

                <Link to="/profile" onClick={() => setShowDropdown(false)}>
                  Profile
                </Link>

                <Link to="/reports" onClick={() => setShowDropdown(false)}>
                  Reports
                </Link>

                <button onClick={handleLogout}>
                  Logout
                </button>

              </div>
            )}

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;