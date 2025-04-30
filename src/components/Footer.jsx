import React from "react";
import "./Footer.css";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MailIcon from "@mui/icons-material/Mail";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="company-info">
          <div className="logo-section">
            <LocalHospitalIcon className="logo" />
            <p className="logotext">
              <span className="logotext1">RK</span>PHARMACY
            </p>
          </div>
          <span className="company-text">
            RKPharmacy, Your trusted online source for medications, offering
            convenient access, transparent information, and reliable delivery
            for your health needs.
          </span>
        </div>

        <div className="footer-links">
          <div className="links-section">
            <span className="section-title">Company</span>
            <a className="link-item" href="#about">About Us</a>
            <Link to="/privacypolicy" className="link-item">Privacy policy</Link>
            <Link to="/termsandconditions" className="link-item">Terms and Conditions</Link>
          </div>
        </div>
        <div className="footer-links">
          <div className="links-section">
            <span className="section-title">Support</span>
            <a className="link-item" href="#contact">Contact Us</a>
            <a className="link-item" href="#faq">FAQ</a>
          </div>
        </div>
        <div className="footer-links">
          <div className="links-section">
            <span className="section-title">Get in Touch</span>
            <span className="link-item">MIT Rd, Radha Nagar, Chromepet,</span>
            <span className="link-item">Chennai, Tamil Nadu 600044</span>
            <div style={{ marginBottom: 20 }}>
              <MailIcon sx={{ fontSize: 20, color: "rgb(20, 179, 180)" }} />{" "}
              <span className="link-item">support@rkpharmacy.com</span>
            </div>
            <div>
              <AddIcCallIcon
                sx={{ fontSize: 20, color: "rgb(20, 179, 180)" }}
              />{" "}
              <span className="link-item">+91 1234567890</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyrights">
        <span>copyrights &#169; 2025 RKPharmacy, All rights reserved. Powered by React</span>
      </div>
    </footer>
  );
};

export default Footer;
