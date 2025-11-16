import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function ImagePage() {
  const { id } = useParams();

  return (
    <div className="container">
      <Navbar />
      <main className="single-image-page">
        <div className="back-message">
          <Link to="/gallery">
            <button>← Back to Gallery</button>
          </Link>

          {/* <p className="purchase-text">
            Message us on{" "}
            <a
              href="https://www.instagram.com/townmadecraftsatx/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="imgPage-link"
            >
              Instagram <FaInstagram className="social-icon instagram" />
            </a>{" "}
            with bag number <strong>{id}</strong> to purchase.
          </p> */}
        </div>

        <figure className="single-image-figure">
          <img src={`/Pictures/${id}.jpg`} alt={`Bag ${id}`} />
          {/* <figcaption className="bag-caption">Bag {id}</figcaption> */}
        </figure>
      </main>
      <Footer />
    </div>
  );
}
