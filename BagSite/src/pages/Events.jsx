import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Events() {
  return (
    <div className="container">
      <Navbar />
      <main className="events-section">
        <h2>Scheduled Events</h2>
        <ul>
          <li>Barton Creek Mall Farmer's Market - Sept 25</li>
          <li>Event 2 - Oct 5</li>
          <li>Event 3 - Oct 20</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
