import React from "react";
// import "../../../sass/components/_pricingCard.scss";

const Pricing_card = () => {
  return (
    <div className="pricing-card">
      <div className="pricing-card-top">
        <h3 className="pricing-card-top-package">Hobby</h3>
        <div className="pricing-card-top-price">
          <h1>$179</h1>
          <p>per month</p>
        </div>
        <button>Start 30 day free trial</button>
      </div>
      <div className="pricing-card-bottom">
        <ul>
          <div className="highlight-list">
            <li>2000+ users</li>
            <li>Thousand of components</li>
            <li>Mobile layouts</li>
          </div>
          <li>Free lifetiome updates</li>
          <li>24/7 support</li>
        </ul>
      </div>
    </div>
  );
};

export default Pricing_card;
