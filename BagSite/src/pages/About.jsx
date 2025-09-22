import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="container">
      <Navbar />
      <main className="section">
        <h2>About Us</h2>
        <p>We are passionate about building simple, interactive React websites!</p>
      </main>
      <Footer />
    </div>
  );
}
