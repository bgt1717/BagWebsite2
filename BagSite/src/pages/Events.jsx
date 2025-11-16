import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaInstagram } from "react-icons/fa";

export default function Events() {
  return (
    <div className="container events-page">
      <Navbar />
      <main className="events-section">
        <div className="overlay">
          <h2>Scheduled Events</h2>
          <ul>
            <li>No events are currently planned. Stay tuned!</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
