import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const images = [
    "https://source.unsplash.com/random/400x300?nature",
    "https://source.unsplash.com/random/400x300?city",
    "https://source.unsplash.com/random/400x300?tech",
  ];

  return (
    <div className="container">
      <Navbar />
      <main className="gallery">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`Gallery ${idx + 1}`} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
