import React from "react";
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar-transparent">
        <ul className="nav-bar">
          <li className="li-nav">
            <Link to="/">Home</Link>
          </li>
          <li className="li-nav">
          <Link to="/about">About</Link>
          </li>
          <li className="li-nav">
          <Link to="/services">Services and Pricing</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
