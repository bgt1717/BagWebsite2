import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ImagePage() {
  const { id } = useParams();

  return (
    <div className="container">
      <Navbar />
      <main className="single-image-page" style={{ textAlign: "center", padding: "2rem" }}>
        <Link to="/gallery">
        <button> ← Back to Gallery </button></Link>
        <div style={{ marginTop: "1rem" }}>
          <img
            src={`/Pictures/${id}.jpg`}
            alt={`Bag ${id}`}
            style={{ maxWidth: "50%", borderRadius: "10px" }}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
