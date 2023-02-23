import React from "react";
// import "../../sass/components/_footerSection.scss";
import appstore from "../../assets/images/app-store.svg";
import googleplay from "../../assets/images/google-play.svg";
import reactlogo from '../../assets/images/react-logo.svg'

const Footer_section = () => {
  return (
    <div className="footer-section">
      <div className="footer-section-top">
        <div className="list-container">
          <ul>
            <li className="list-title">Products</li>
            <li>Godly</li>
            <li>Rejiggle</li>
          </ul>
          <ul>
            <li className="list-title">Use cases</li>
            <li>SaaS</li>
            <li>Platforms</li>
            <li>Marketplaces</li>
            <li>E-commerce</li>
          </ul>
          <ul>
            <li className="list-title">Resources</li>
            <li>Support</li>
            <li>Contact</li>
            <li>Guides</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
          <ul>
            <li className="list-title">Developers</li>
            <li>Documentation</li>
            <li>API reference</li>
            <li>Status</li>
          </ul>
          <ul>
            <li className="list-title">Company</li>
            <li>About</li>
            <li>Customers</li>
            <li>Partners</li>
            <li>Jobs</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="download-btns">
          <a>
            <img src={appstore}></img>
          </a>
          <a>
            <img src={googleplay}></img>
          </a>
        </div>
      </div>

      <div className="footer-end">
        <div className="footer-logo-container">
          <img src={reactlogo} />
        </div>
        <h3>© 2023 Godly, All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer_section;
