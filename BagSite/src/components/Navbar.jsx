import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home as HomeIcon, Image, Info, Calendar } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <h1>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            ATX Bags
          </Link>
        </h1>

        <ul>
          <li>
            <Link to="/">
              <HomeIcon size={18} /> Home
            </Link>
          </li>
          <li>
            <Link to="/gallery">
              <Image size={18} /> Gallery
            </Link>
          </li>
          <li>
            <Link to="/about">
              <Info size={18} /> About Us
            </Link>
          </li>
          <li>
            <Link to="/events">
              <Calendar size={18} /> Events
            </Link>
          </li>
          <li>
            <a
              href="https://www.instagram.com/yane_crafts/?igsh=ZmRkeHcyZXBmOXZ5#"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#E1306C", fontSize: "1.6rem" }}
            >
              <FaInstagram />
            </a>
          </li>
        </ul>

        {/* Hamburger button */}
        <button className="hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </nav>

      {/* Overlay Menu */}
      <div className={`nav-overlay ${menuOpen ? "open" : ""}`}>
        <div className="menu-items">
          <Link to="/" onClick={toggleMenu}>
            <HomeIcon size={24} />
            <span>Home</span>
          </Link>
          <Link to="/gallery" onClick={toggleMenu}>
            <Image size={24} />
            <span>Gallery</span>
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            <Info size={24} />
            <span>About</span>
          </Link>
          <Link to="/events" onClick={toggleMenu}>
            <Calendar size={24} />
            <span>Events</span>
          </Link>
          <a
            href="https://www.instagram.com/yane_crafts/?igsh=ZmRkeHcyZXBmOXZ5#"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            <FaInstagram size={24} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </>
  );
}
