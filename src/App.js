import React from "react";
import { Link } from "react-router-dom";
import { ZoomInDiv } from "./animations/Animations";
import Routes from "./components/routes/Routes";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <ZoomInDiv>David H Isakson II</ZoomInDiv>
      <header>
        <nav className="navigation">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/Portfolio">
            Portfolio
          </Link>
          <Link className="link" to="/Services">
            Services
          </Link>
          <Link className="link" to="/About">
            About
          </Link>
          <Link className="link" to="/Contact">
            Contact
          </Link>
        </nav>
      </header>
      <div className="Display-Area">
        <Routes />
      </div>

      <div className="bottom">
        <footer>
          Copyright © 2020 &nbsp; <strong>David H Isakson II</strong>
        </footer>
      </div>
    </div>
  );
}

export default App;
