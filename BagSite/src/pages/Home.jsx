import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <header className="hero">
        <div className="overlay">
          <h2>Handmade bags in Austin Texas</h2>
          <p>Explore our gallery, learn about us, and check out our events!</p>
          <Link to="/gallery">
            <button>Gallery</button>
          </Link>
        </div>
      </header>
      <Footer />
    </div>
  );
}
