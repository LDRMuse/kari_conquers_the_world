import React from "react";
import "./App.scss";
import { Header, About, Menu, Navbar, Footer } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <Router>
        <Navbar />
        <Header />
        <About />
        <Menu />
        <Footer />
      </Router>
    </>
  );
}

export default App;
