import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/">
          
          ANISH KANSWAL
        </Link>
        <div className="right menu">
          <NavLink
            id="about-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/about"
          >

            About Me
          </NavLink>
          <NavLink
            id="projects-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/projects"
          >
           Projects
            </NavLink>
            <NavLink
              id="education-tab"
              className="ui item"
              activeStyle={{ fontWeight: "bold" }}
              to="/education"
            >
              Education
              
            </NavLink>
            <NavLink
              id="experience-tab"
              className="ui item"
              activeStyle={{ fontWeight: "bold" }}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    );
  };

export default Header;