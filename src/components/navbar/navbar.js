import React, { Fragment, useState } from "react";
import logo from "../../assets/images/menu.svg";
import { ThemeContext, themes } from "../../contexts/theme-context";
import Drop_down from "./drop_down/drop_down";
import { NavLink } from "react-router-dom";
import Theme_toggle_button from "../theme_toggle_button/theme_toggle_button";

function Navbar() {
  // const [lightMode, setLightMode] = useState(true);

  return (
    <div className="nav">
      <div className="nav-left">
        <img src={logo} />
        <ul className="nav-links">
          <li><NavLink to='/'>Home</NavLink></li>
          <li>
            <Drop_down />
          </li>
          <li><NavLink to='pricing'>Pricing</NavLink></li>
          <li><NavLink to='company'>Company</NavLink></li>
          <li><NavLink to='aboutus'>About</NavLink></li>
        </ul>
      </div>
      <div className="nav-right btns">
        <button className="btn btn-login">Login</button>
        <button className="btn btn-free-trial">Free Trial</button>
        <Theme_toggle_button />
      </div>
    </div>
  );
}

export default Navbar;
