import React from "react";
import { Link } from 'react-scroll';

export const Navbar = () => {

  return (
    <>
      <nav className="navbar-transparent">
        <ul className="nav-bar">
          <li className="li-nav">
          <Link to="#">Home</Link>
          </li>
          <li className="li-nav">
          <Link to="about" smooth={true} duration={1000}>About</Link>
          </li>
          <li className="li-nav">
          <Link to="services" smooth={true} duration={1000}>Services</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
