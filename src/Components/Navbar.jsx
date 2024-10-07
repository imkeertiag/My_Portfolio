import React , { useState } from 'react';
import "./Navbar.css"
import logo from "../assets/Logo.svg"
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  // this function is to make the navbar responsive by using hamburger menu button -> now when the button is clicked the isOpen will handleToggle
  // to open and close the navbar menu
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="navbar">
      <div className="logo"><img src={logo} alt="Logo" /></div>
      <button className="navbar-toggler" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`menu ${isOpen ? 'show' : ''}`}>
        
        <ul>
          {/* used Navlink so that the page dosent refresh every time when i go to the new page in the website (an important feature to use react) */}
          <li><NavLink to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
          >Home</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/education">Education</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/recommendations">Recommendations</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </div>
    </>
  );
};

