import React from "react";
import { Link } from "react-router-dom";
import { Home as HomeIcon, Image, Info, Calendar } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo/Title links back to Home */}
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
      </ul>
    </nav>
  );
}

