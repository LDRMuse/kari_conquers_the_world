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

{
  /* <>
    <nav>
        <h1 className='socialMedia'>
        <a className="fa fa-facebook-f" href="https://www.facebook.com/MonroePermanentCosmetics"><span></span></a>
        <a className="fa fa-youtube" href="https://www.youtube.com/channel/UCTsMr7uqTXumcfPbhIHhA7Q"><span></span></a>
        <a className="fa fa-instagram" href="https://www.instagram.com/monroepermanentcosmetics/?hl=kn"><span></span></a>
        </h1>
    </nav>
    </> */
}
