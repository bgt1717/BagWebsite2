import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Events() {
  return (
    <div className="container">
      <Navbar />
      <main className="events-section">
        <h2>Scheduled Events</h2>
        <ul>
          <li>React Workshop - Sept 25</li>
          <li>Gallery Launch - Oct 5</li>
          <li>Community Meetup - Oct 20</li>
        </ul>

        {/* Social icons */}
        <div className="social-link" style={{ marginTop: "2rem", textAlign: "center", display: "flex", justifyContent: "center", gap: "1.5rem" }}>
          <a href="https://www.instagram.com/your_instagram_handle" target="_blank" rel="noopener noreferrer" style={{ color: "#E1306C", fontSize: "2rem" }}>
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/your_facebook_handle" target="_blank" rel="noopener noreferrer" style={{ color: "#4267B2", fontSize: "2rem" }}>
            <FaFacebook />
          </a>
          <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer" style={{ color: "#1DA1F2", fontSize: "2rem" }}>
            <FaTwitter />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
