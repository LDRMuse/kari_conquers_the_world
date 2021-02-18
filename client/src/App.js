import React from "react";
import "./App.scss";
import { Header, About, Menu, Navbar, Footer } from "./components";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Menu} />
        <Footer />
        </Switch>
      </Router>
    </>
  );
}

export default App;
