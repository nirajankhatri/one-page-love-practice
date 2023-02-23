import React from "react";
import NightFLoat from "../../assets/images/NightFLoat.png";
// import "../../sass/components/_heroSection.scss";
import appstore from "../../assets/images/app-store.svg";
import googleplay from "../../assets/images/google-play.svg";

function Hero_section() {
  return (
    <div className="hero-container">
      <div className="hero-description">
        <p className="desc-p1">A new version of Starter is here</p>
        <h1>The fastest UI kit and design system for Figma</h1>
        <p className="desc-p2">
          Are you still starting projects from scratch? Join thousands of
          designers and agencies who kickstart design projects using Stater.
        </p>
        <div className="btns">
          <a className="hero-btn btn-app-store"><img src={appstore} /></a>
          <a className="hero-btn btn-google-play"><img src={googleplay} /></a>
        </div>
      </div>
      <div className="hero-image-container">
        <img className="hero-image" src={NightFLoat} width="50%" />
      </div>
    </div>
  );
}

export default Hero_section;
