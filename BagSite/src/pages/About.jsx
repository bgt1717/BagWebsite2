import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container">
      <Navbar />
      <main className="about-section">
      <div className="overlay">
  <h2>About Us</h2>
  <p>
    We craft unique, textured bags that are as functional as they are beautiful. 
    From totes and makeup bags to diaper bags, each piece is perfect for everyday life—or as a thoughtful gift. 
    Stylish, practical, and made with love. Check us out on Instagram or check events to see us in person!
  </p>

  <Link to="/events">
    <button>Events</button>
  </Link>

  <div className="about-image" style={{ marginTop: "2rem", textAlign: "center" }}>
    <img src="/Pictures/7.jpg" alt="Bag 7" style={{ maxWidth: "400px", width: "100%", borderRadius: "10px" }} />
  </div>
</div>
      </main>
      <Footer />
    </div>
  );
}
