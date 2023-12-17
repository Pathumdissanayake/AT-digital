import React from "react";
import "../styles/heroSection.css";
import Bg from "../assets/bg.png";

export default function HeroSection() {
  return (
    <div className="hero-div">
      
        <img className="img" src={Bg} alt="background-image" />
      

      <div className="card">
        <p>We crush your competitors, goals, and sales records - without the B.S.</p>
        <button>Get free consultation</button>
      </div>
    </div>
  );
}
