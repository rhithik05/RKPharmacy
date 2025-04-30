import React from "react";
import "./Aboutsection.css";

const Aboutsection = () => {
  return (
    <>
      <div id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <span className="ahead">WHO WE ARE</span>
            <span className="adesc">
              With us, expect more than just a pharmacy.
            </span>
            <span className="adesc1">
              Committed to community health, our pharmacy provides comprehensive
              care, expert guidance, and trusted medications, ensuring your
              well-being and offering support with genuine service, reliable
              advice, and a focus on your health journey. Experience quality
              care and dedication.
            </span>
          </div>
          <div className="about-image">
            <img
              className="background-img1"
              src="young-woman-pharmacist-pharmacy.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="about-overlay">
          <div className="stat">
            <h2>14K+</h2>
            <p>Happy customers</p>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <h2>27K+</h2>
            <p>Product sold</p>
          </div>
          <div className="divider"></div>
          <div className="stat">
            <h2>15Y+</h2>
            <p>Experience</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutsection;
