import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => (
    <div className="app-header">
        <div className="left-menu">
          <nav className="app-logo">
            <Link className="logo" to="/">LogicLink</Link>
          </nav>
          <nav className="app-dashboard">
            <Link to="/dashboard">Dashboard</Link>
          </nav>
          <nav className="app-newAutomation">
            <Link to="/new-automation">New Automation</Link>
          </nav>
        </div>
        <div className="right-menu">
          <Link to="/logout">logout</Link>  
        </div>
    </div>
);

export default Header;