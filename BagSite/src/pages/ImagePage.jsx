import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SingleImage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const imageId = Number(id);
  const totalImages = 15; // adjust if needed

  const goPrev = () => {
    if (imageId > 1) navigate(`/image/${imageId - 1}`);
  };

  const goNext = () => {
    if (imageId < totalImages) navigate(`/image/${imageId + 1}`);
  };

  return (
    <div className="container">
      <Navbar />

      <div className="single-image-wrapper">

        {/* LEFT ARROW */}
        <button 
          className="nav-arrow left-arrow" 
          onClick={goPrev}
          disabled={imageId === 1}
        >
          ◀
        </button>

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

        {/* RIGHT ARROW */}
        <button 
          className="nav-arrow right-arrow" 
          onClick={goNext}
          disabled={imageId === totalImages}
        >
          ▶
        </button>

      </div>

      <Footer />
    </div>
  );
}
