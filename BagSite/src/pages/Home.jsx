import React from "react"; 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaInstagram, FaEtsy } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container home-page">
      <Navbar />
      <header className="hero">
        <div className="overlay">
          <h2>Handmade bags in Austin Texas</h2>
          <p>We craft unique textured bags for everyday use and thoughtful gifts.</p>
          <p>Check out our Etsy to make a purchase and please follow us on Instagram!</p>

          <div className="hero-buttons">
            <Link to="/gallery">
              <button>Gallery</button>
            </Link>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/townmadecraftsatx/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-instagram"
            >
              <FaInstagram />
            </a>

            {/* Etsy */}
            <a
              href="https://townmadecraftsatx.etsy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-etsy"
            >
              <FaEtsy />
            </a>

          </div>
        </div>
      </header>
      <Footer />
    </div>
  );
}
