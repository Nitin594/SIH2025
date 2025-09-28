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
            Connexta
          </a>
        </div>

        {/* Show navigation menu only for unauthenticated users */}
        {!isAuthenticated && (
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
        )}

        <div className="navbar-actions">
          {isAuthenticated ? (
            <div className="auth-user-section">
              {/* Profile section for authenticated users */}
              <div className="user-profile">
                <img
                  className="user-avatar"
                  src={user?.picture}
                  alt={user?.name}
                />
                <div className="user-details">
                  <span className="user-name">{user?.name}</span>
                  <span className="user-role">
                    {user?.role || user?.['custom:role'] || 'Alumni'}
                  </span>
                </div>
              </div>
              
              {/* Logout button */}
              <button
                className="btn btn-logout"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="btn btn-login"
              onClick={() => loginWithRedirect()}
            >
              Login / Sign-up
            </button>
          )}
        </div>

        {/* Hamburger menu - only show for unauthenticated users */}
        {!isAuthenticated && (
          <div className="navbar-burger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;