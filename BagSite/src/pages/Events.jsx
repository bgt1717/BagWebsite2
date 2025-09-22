import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Events() {
  return (
    <div className="container">
      <Navbar />
      <main className="section">
        <h2>Scheduled Events</h2>
        <ul>
          <li>React Workshop - Sept 25</li>
          <li>Gallery Launch - Oct 5</li>
          <li>Community Meetup - Oct 20</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
