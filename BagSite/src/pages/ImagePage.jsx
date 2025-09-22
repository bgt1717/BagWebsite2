import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../Pictures/1.jpg";
import img2 from "../Pictures/2.jpg";
import img3 from "../Pictures/3.jpg";
import img4 from "../Pictures/4.jpg";
import img5 from "../Pictures/5.jpg";
import img6 from "../Pictures/6.jpg";


export default function ImagePage() {
  const { id } = useParams();
  const images = [img1, img2, img3, img4, img5, img6];
  const imageSrc = images[id - 1]; // id is 1-based

  return (
    <div className="container">
      <Navbar />
      <main className="single-image-page" style={{ textAlign: "center", padding: "2rem" }}>
        <Link to="/gallery">← Back to Gallery</Link>
        <div style={{ marginTop: "1rem" }}>
          <img src={imageSrc} alt={`Gallery ${id}`} style={{ maxWidth: "90%", borderRadius: "10px" }} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
