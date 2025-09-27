import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home as HomeIcon, Image, Info, Calendar } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { path: "/", label: "Home", icon: <HomeIcon size={18} /> },
    { path: "/gallery", label: "Gallery", icon: <Image size={18} /> },
    /*({ path: "/about", label: "About Us", icon: <Info size={18} /> }, }*/
    { path: "/events", label: "Events", icon: <Calendar size={18} /> },
  ];

  return (
    <>
      <nav className="navbar">
        <h1>
          <NavLink to="/" className="logo">
            ATX Bags
          </NavLink>
        </h1>

        {/* Desktop Menu */}
        <ul className="desktop-menu">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                {link.icon} {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <a
              href="https://www.instagram.com/yane_crafts/?igsh=ZmRkeHcyZXBmOXZ5#"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-link"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Overlay Menu */}
      <div
        className={`nav-overlay ${menuOpen ? "open" : ""}`}
        onClick={(e) => e.target === e.currentTarget && setMenuOpen(false)}
      >
        <div className="menu-items">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={toggleMenu}
              className={({ isActive }) =>
                `overlay-link ${isActive ? "active-link" : ""}`
              }
            >
              {React.cloneElement(link.icon, { size: 24 })}
              <span>{link.label}</span>
            </NavLink>
          ))}
          <a
            href="https://www.instagram.com/yane_crafts/?igsh=ZmRkeHcyZXBmOXZ5#"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="overlay-link instagram-link"
          >
            <FaInstagram size={24} />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/share/16DT7cdLDy/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="overlay-link instagram-link"
          >
            <FaFacebook size={24} />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </>
  );
}
