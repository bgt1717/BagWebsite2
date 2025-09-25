import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const imageCount = 15; // number of images
  const images = Array.from({ length: imageCount }, (_, i) => i + 1);

  return (
    <div className="container">
      <Navbar />
      <main className="gallery">
        {images.map((id) => (
          <Link key={id} to={`/image/${id}`}>
            <img
              src={`/Pictures/${id}.jpg`}
              alt={`Bag ${id}`}
            />
          </Link>
        ))}
      </main>
      <Footer />
    </div>
  );
}
