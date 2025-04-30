import "./Mainpage.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Homesection from "./Homesection";
import React from "react";
import Aboutsection from "./Aboutsection";
import Products from "./Products";
import Banner from "./Banner";
import Choice from "./Choice";
import Sponsors from "./Sponsors";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";


const Mainpage = () => {
  return (
    <>
      <Navbar />
      <Homesection />
      <Aboutsection />
      <Products />
      <Banner />
      <Choice />
      <Sponsors />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default Mainpage;
