import React from "react";
import "./Homesection.css";
import { useNavigate } from "react-router-dom";

const Homesection = () => {
  const a=useNavigate();
  const taketoproductspage=()=>{
    a("/products");
  }
  return(
    <>
    <div id="home" className="home-container">
        <div className="img-container">
            <img className="background-img" src="pharmacist-work.jpg" alt="" />
            <div className="green-overlay"></div>
        </div>
        <div className="overlay-content">
            <span className="oheading">WELCOME TO RKPHARMACY</span>
            <span className="odesc">Our only priority is to keep you healthy</span>
            <span className="osmalldesc">Dispensing health and wellness, our trusted pharmacy offers genuine medications, expert advice, and compassionate care, ensuring your well-being always remains our priority.</span>
            <button onClick={taketoproductspage} className="obutton">Discover more</button>
        </div>
    </div>
    </>
  )
};

export default Homesection;

