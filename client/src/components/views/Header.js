import React from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <>
      <Navbar />
      <div className="header">
        <header>
          <h1 className="h1Header">
            <em>Monroe Permanent Cosmetics</em>
          </h1>
        </header>
      </div>
    </>
  );
};
