import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const imageCount = 6; // number of images
  const images = Array.from({ length: imageCount }, (_, i) => i + 1); // [1,2,3,...6]

  return (
    <div className="container">
      <Navbar />
      <main className="gallery" style={{ padding: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
        {images.map((id) => (
          <Link key={id} to={`/image/${id}`}>
            <img
              src={`/Pictures/${id}.jpg`}
              alt={`Bag ${id}`}
              style={{ width: "100%", borderRadius: "8px", cursor: "pointer", transition: "transform 0.3s ease" }}
            />
          </Link>
        ))}
      </main>
      <Footer />
    </div>
  );
}
