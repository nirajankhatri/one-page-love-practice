import React from "react";
// import "../../../sass/components/_tool.scss";
import slacklogo from "../../../assets/images/logo_slack.png";

const Tool = () => {
  return (
    <div className="tool">
      <div className="logo-container">
        <img className="tool-logo" src={slacklogo} />
      </div>
      <div>
        <h1 className="tool-title">Slack</h1>
        <p className="tootl-description">
          Boost your desgn and work faster by connecting directly to Linear.
        </p>
        <button className="tool-button">View integration</button>
      </div>
    </div>
  );
};

export default Tool;
