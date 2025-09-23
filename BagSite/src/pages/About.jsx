import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container">
      <Navbar />
      <main className="about-section">
        <h2>About Us</h2>
        <p>
          We craft unique, textured bags that are as functional as they are beautiful. 
          From totes and makeup bags to diaper bags, each piece is perfect for everyday life—or as a thoughtful gift. 
          Stylish, practical, and made with love. Check us out on instagram or check events to see us in person!
        </p>
        <Link to="/Events">
            <button>Events</button>
        </Link>
        

        {/* Image 7 below the paragraph */}
        <div className="about-image" style={{ marginTop: "2rem", textAlign: "center" }}>
          <img
            src="/Pictures/7.jpg"
            alt="Bag 7"
            style={{ maxWidth: "400px", width: "100%", borderRadius: "10px" }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
