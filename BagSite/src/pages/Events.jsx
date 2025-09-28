import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaInstagram } from "react-icons/fa";

export default function Events() {
  return (
    <div className="container">
      <Navbar />
      <main className="events-section">
        <div className="overlay">
          <h2>Scheduled Events</h2>
          <ul>
            <li>Event 1 - Month XX</li>
            <li>Event 2 - Month XX</li>
            <li>Event 3 - Month XX</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
