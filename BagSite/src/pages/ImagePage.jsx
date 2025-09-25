import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ImagePage() {
  const { id } = useParams();

  return (
    <div className="container">
      <Navbar />
      <main className="single-image-page">
        <Link to="/gallery">
          <button>← Back to Gallery</button>
        </Link>
        <div style={{ marginTop: "1rem" }}>
          <img
            src={`/Pictures/${id}.jpg`}
            alt={`Bag ${id}`}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
