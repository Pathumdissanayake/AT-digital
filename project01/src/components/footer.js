import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import "../styles/footer.css";

export default function footer() {
  return (
    <div className="footer-body">
      <div className="footer-div">
        <div className="div-sec1">
          <Link to="#">
            <img id="logo-id" src={logo} alt="Logo" />
          </Link>

          <p className="logo-text">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>

        <div className="div-sec2">
          <div className="sub-1">
            <h4 className="t-heading">Our Technologies</h4>
            <p className="t-text">ReactJS</p>
            <p className="t-text">Gatsby</p>
            <p className="t-text">NextJS</p>
            <p className="t-text">NodeJS</p>
            <p className="t-text">GraphQL</p>
            <p className="t-text">Laravel</p>
          </div>

          <div className="sub-2">
            <h4 className="t-heading">Our Services</h4>
            <p className="t-text">Social media Marketing</p>
            <p className="t-text">Web & Mobile App Development</p>
            <p className="t-text">Data & Analytics</p>
            <p className="t-text">Google Marketing solutions</p>
            <p className="t-text">Search Engine Optimization</p>
          </div>
        </div>
      </div>

      <div className="bottom-div">
        <div className="line-div">
          <hr className="line" />
        </div>
        <p className="privacy">Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
  );
}
