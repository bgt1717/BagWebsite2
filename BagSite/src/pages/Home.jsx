import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <header className="hero">
        <h2>Welcome to My Website</h2>
        <p>Explore our gallery, learn about us, and check events!</p>
        <button>Get Started</button>
      </header>
      <Footer />
    </div>
  );
}
