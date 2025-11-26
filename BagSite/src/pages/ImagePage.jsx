import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SingleImage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container">
      <Navbar />

      <main className="single-image-page">

        {/* FULL-SIZE IMAGE */}
        <img 
          src={`/Pictures/${id}.jpg`} 
          alt={`Bag ${id}`}
        />

        {/* BUTTON BENEATH IMAGE */}
        <button onClick={() => navigate(-1)}>
          Back to Gallery
        </button>

      </main>

      <Footer />
    </div>
  );
}

