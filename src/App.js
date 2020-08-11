import React from "react";
import { Link } from "react-router-dom";
import { ZoomInDiv, ZoomInDivM } from "./animations/Animations";
import { layoutGenerator } from "react-break";
import Routes from "./components/routes/Routes";
import "./App.scss";
import "./AppMobile.scss";

function App() {
  //configure responsiveness
  const layout = layoutGenerator({
    mobile: 0,
    phablet: 550,
    tablet: 768,
    desktop: 992,
  });

  const OnMobile = layout.is("mobile");
  const OnAtLeastTablet = layout.isAtLeast("tablet");
  const OnAtMostPhablet = layout.isAtMost("phablet");
  const OnDesktop = layout.is("desktop");

  return (
    <div className="outside">
      <OnAtLeastTablet></OnAtLeastTablet>
      <OnAtMostPhablet></OnAtMostPhablet>
      <OnMobile>
        <div className="Mcontainer">
          <ZoomInDivM>David H Isakson II</ZoomInDivM>
          <header>
            <nav className="Mnavigation">
              <Link className="Mlink" to="/">
                Home
              </Link>
              <Link className="Mlink" to="/Projects">
                Projects
              </Link>
              <Link className="Mlink" to="/Videos">
                Videos
              </Link>
              <Link className="Mlink" to="/About">
                About
              </Link>
              <a className="Mlink" href="https://blog.davidhisakson.com/">
                Blog
              </a>
            </nav>
          </header>
          <div className="MDisplay_Area">
            <Routes />
          </div>
          <div className="Mbottom">
            <footer>
              Copyright © 2020 &nbsp; <strong>David H Isakson II</strong>
            </footer>
          </div>
        </div>
      </OnMobile>
      <OnDesktop>
        <div className="container">
          <ZoomInDiv>David H Isakson II</ZoomInDiv>
          <header>
            <nav className="navigation">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/Projects">
                Projects
              </Link>
              <Link className="link" to="/Videos">
                Videos
              </Link>
              <Link className="link" to="/About">
                About
              </Link>
              <a className="link" href="https://blog.davidhisakson.com/">
                Blog
              </a>
            </nav>
          </header>
          <div className="Display_Area">
            <Routes />
          </div>
          <div className="bottom">
            <footer>
              Copyright © 2020 &nbsp; <strong>David H Isakson II</strong>
            </footer>
          </div>
        </div>
      </OnDesktop>
    </div>
  );
}

export default App;
