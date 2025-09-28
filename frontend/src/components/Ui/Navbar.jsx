import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { user, isLoading, loginWithRedirect, isAuthenticated, logout } =
    useAuth0();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="/" className="navbar-logo">
            AlumniPlatform
          </a>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/events" className="nav-link">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a href="/achievements" className="nav-link">
                Achievements
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-actions">
          {isAuthenticated ? (
            <button
              className="btn btn-login"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          ) : (
            <button
              className="btn btn-login"
              onClick={() => loginWithRedirect()}
            >
              Login / Sign-up
            </button>
          )}
        </div>
        {/* <div>
          {isAuthenticated && (
            <div className="navbar">
              <div className="user-info">
                <img
                  className="user-avatar"
                  src={user.picture}
                  alt={user.name}
                />
                <div className="user-details">
                  <h2 className="user-name">{user.name}</h2>
                  <p className="user-email">{user.email}</p>
                </div>
              </div>
            </div>
          )}
        </div> */}

        <div className="navbar-burger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
