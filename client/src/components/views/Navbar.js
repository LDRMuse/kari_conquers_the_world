import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar-transparent">
        <ul className="nav-bar">
          <li className="li-nav">
            <a href="/">Home</a>
          </li>
          <li className="li-nav">
            <a href="/about">About</a>
          </li>
          <li className="li-nav">
            <a href="/services-pricing">Services and Pricing</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
