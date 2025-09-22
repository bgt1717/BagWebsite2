import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Import images
import img1 from "../Pictures/1.jpg";
import img2 from "../Pictures/2.jpg";
import img3 from "../Pictures/3.jpg";
import img4 from "../Pictures/4.jpg";
import img5 from "../Pictures/5.jpg";
import img6 from "../Pictures/6.jpg";

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

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

