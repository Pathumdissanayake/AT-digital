import React from "react";
import Img1 from "../assets/middle-img1.jpg";
import Img2 from "../assets/middle-img2.jpg";
import "../styles/MiddleSection.css";

export default function MiddleSection() {
  return (
    <div className="middle-main">


      <div className="sec1">
        <div className="img1-sec">
          <img className="img-sec" src={Img1} alt="img1" />
        </div>
        <div className="text1-sec">
          <h4 className="text-heading">Web & Mobile App Development</h4>
          <p className="text">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>

          <button className="button-learnMore">Learn More</button>
        </div>
      </div>


      <div className="sec1">
        <div className="img1-sec">
          <img className="img-sec" src={Img2} alt="img2" />
        </div>
        <div className="text2-sec">
          <h4 className="text-heading">Web & Mobile App Development</h4>
          <p className="text">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>

          <button className="button-learnMore">Learn More</button>
        </div>
      </div>






    </div>
  );
}
