import React from "react"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <header className="hero">
        <div className="overlay">
          <h2>Handmade bags in Austin Texas</h2>
          <p>Explore our gallery, learn about us, and check out our events!</p>
          <div className="hero-buttons">
            <Link to="/gallery">
              <button>Gallery</button>
            </Link>
            <a
              href="https://www.instagram.com/yane_crafts/?igsh=ZmRkeHcyZXBmOXZ5#"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}
