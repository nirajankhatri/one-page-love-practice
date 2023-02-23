import React from "react";
// import "../../sass/components/_demoSection.scss";

const Demo_section = (props) => {
  return (
    <div className="demo_section">
      <h1 className="demo-subhead">SubHeading</h1>
      <h1 className="demo-mainhead">
        Design landing pages in minutes, not days
      </h1>
      <p className="demo-desc">
        Starter allows you to design endless version of high-quality landing
        pages in only a few minutes. Say goodbye to wasting hours recreating the
        same components.
      </p>
      {props.demobuttons ? (
        <div className="demo-btns">
          <button className="btn-get-start">Get started</button>
          <button className="btn-demo">Demo</button>
        </div>
      ) : null}
    </div>
  );
};

export default Demo_section;
