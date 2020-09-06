import React from "react";
import "./portfolio.scss";
import "./portfolioMobile.scss"
import api from "../assets/api-icon-3.png";
import logo from "../assets/logo512.png";
import signlingo from "../assets/signlingo.png";
import gameoflife from '../assets/gameoflife.gif';
import { layoutGenerator } from "react-break";

const Portfolio = () => {
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
        <div className="Mportfolio_container">
          <section className="Mrow1">
            <div id="Mapi">
              <a href="https://www.npmjs.com/package/dukeapi">
              <img src={api} alt="dukeapi"></img></a>
              <h1>
                <a href="https://www.npmjs.com/package/dukeapi">dukeapi</a>
              </h1>
              <p className="Mdescription">
                A node package to generate boilerplate code for a RESTful API with
                JWT Authenication that will work right out of the box. It is
                intended to serve as the base code for a node backend using Express
                and Knex.
          </p>
            </div>
            <div id="Mcustom_app">
              <a href="https://www.npmjs.com/package/cra-template-duke">
              <img src={logo} alt="Custom App"></img></a>
              <h1>
                <a href="https://www.npmjs.com/package/cra-template-duke">
                  React Template
            </a>
              </h1>
              <p className="Mdescription">
                A custom React App Template to develop that is a bit more stylish than
                the default template. This project is still a work in progress but can
                be readily used through Node Package Manager.
          </p>
            </div>
            <div id="Msignlingo">
            <a Href="https://github.com/Lambda-School-Labs/signlingo-be">
              <img src={signlingo} alt="Sign Lingo"></img></a>
              <h1>
                <a Href="https://github.com/Lambda-School-Labs/signlingo-be">
                  Signlingo Backend
            </a>
              </h1>
              <p className="Mdescription">
                Signlingo is a mobile first designed web application to teach ASL
                (American Sign Language). It is loosely models off of Duolingo but
                focusing on ASL.
          </p>
            </div>
          </section>
          <section className="Mrow2">

            <div id="a2">
              <a Href="https://www.npmjs.com/package/cra-template-electronapp">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg" alt=""></img></a>
              <h1>
                <a Href="https://www.npmjs.com/package/cra-template-electronapp">
                  Electronjs React Template
                </a>
              </h1>
              <p className="Mdescription">
                Electron js is a framework for building desktop applications using Javascript, HTML and CSS. Some popular applications built with Electron are: VS Code, Slack, What’s App, Twitch, Mircorsoft Teams, and InVision. This personally built React Template incorporates Electron js and is configured to build applications for Window, Mac and Linux.
              </p>
            </div>
            <div id="b2">
              <a Href="https://www.gameoflife.davidhisakson.com/">
              <img src={gameoflife} alt="Conway's Game of Life"></img></a>
              <h1>
                <a Href="https://www.gameoflife.davidhisakson.com/">
                  Game of Life
            </a>
              </h1>
              <p className="Mdescription">
                An implementation of John Horton Conway’s Game of Life, the Game of Life
                is a demonstrations of a Cellular Automaton. Cellular automaton is a discrete
                model studied in automata theory, which is the study of abstract machines and
                automata, as well as the computational problems that can be solved by them.
          </p>
            </div>
            <div id="c2">
              <a Href="https://github.com/ikeman32/fb-clone">
              <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=120&h=120" alt=""></img></a>
              <h1>
                <a Href="https://github.com/ikeman32/fb-clone">
                  Facebook Clone
            </a>
              </h1>
              <p className="Mdescription">
                A Facebook Clone built on React and Firebase Firestore, it is still a work in progress and is partially functional. When complete it will be an open source template for setting up a social media website. Presently only the backend is on firebase, once more functionality is built in a fully functional demo will be deployed.
              </p>
            </div>
          </section>
          <section className="Mrowx">
            <div id="">
              <img src="" alt=""></img>
              <h1>
                <a Href="www.davidhisakson.com">
                  project name
            </a>
              </h1>
              <p className="Mdescription">

              </p>
            </div>
            <div id="">
              <img src="" alt=""></img>
              <h1>
                <a Href="www.davidhisakson.com">
                  project name
            </a>
              </h1>
              <p className="Mdescription">

              </p>
            </div>
            <div id="">
              <img src="" alt=""></img>
              <h1>
                <a Href="www.davidhisakson.com">
                  project name
            </a>
              </h1>
              <p className="Mdescription">

              </p>
            </div>
          </section>
        </div>
      </OnMobile>
      <OnDesktop>
        <div className="portfolio_container">
          <section className="row1">
            <div id="api">
              <a href="https://www.npmjs.com/package/dukeapi">
              <img src={api} alt="dukeapi"></img></a>
              <h1>
                <a href="https://www.npmjs.com/package/dukeapi">dukeapi</a>
              </h1>
              <p className="description">
                A node package to generate boilerplate code for a RESTful API with
                JWT Authenication that will work right out of the box. It is
                intended to serve as the base code for a node backend using Express
                and Knex.
          </p>
            </div>
            <div id="custom_app">
              <a href="https://www.npmjs.com/package/cra-template-duke">
              <img src={logo} alt="Custom App"></img></a>
              <h1>
                <a href="https://www.npmjs.com/package/cra-template-duke">
                  React Template
            </a>
              </h1>
              <p className="description">
                A custom React App Template to develop that is a bit more stylish than
                the default template. This project is still a work in progress but can
                be readily used through Node Package Manager.
          </p>
            </div>
            <div id="signlingo">
            <a Href="https://github.com/Lambda-School-Labs/signlingo-be">
              <img src={signlingo} alt="Sign Lingo"></img></a>
              <h1>
                <a Href="https://github.com/Lambda-School-Labs/signlingo-be">
                  Signlingo Backend
            </a>
              </h1>
              <p className="description">
                Signlingo is a mobile first designed web application to teach ASL
                (American Sign Language). It is loosely models off of Duolingo but
                focusing on ASL.
          </p>
            </div>
          </section>
          <section className="row2">

            <div id="a">
              <a Href="https://www.npmjs.com/package/cra-template-electronapp">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg" alt=""></img></a>
              <h1>
                <a Href="https://www.npmjs.com/package/cra-template-electronapp">
                  Electronjs React Template
                </a>
              </h1>
              <p className="description">
                Electron js is a framework for building desktop applications using Javascript, HTML and CSS. Some popular applications built with Electron are: VS Code, Slack, What’s App, Twitch, Mircorsoft Teams, and InVision. This personally built React Template incorporates Electron js and is configured to build applications for Window, Mac and Linux.
              </p>
            </div>
            <div id="b">
              <a Href="https://www.gameoflife.davidhisakson.com/">
              <img src={gameoflife} alt="Conway's Game of Life"></img></a>
              <h1>
                <a Href="https://www.gameoflife.davidhisakson.com/">
                  Game of Life
            </a>
              </h1>
              <p className="description">
                An implementation of John Horton Conway’s Game of Life, the Game of Life
                is a demonstrations of a Cellular Automaton. Cellular automaton is a discrete
                model studied in automata theory, which is the study of abstract machines and
                automata, as well as the computational problems that can be solved by them.
          </p>
            </div>
            <div id="c">
            <a Href="https://github.com/ikeman32/fb-clone">
              <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt=""></img></a>
              <h1>
                <a Href="https://github.com/ikeman32/fb-clone">
                  Facebook Clone
            </a>
              </h1>
              <p className="description">
                Electron js is a framework for building desktop applications using Javascript, HTML and CSS. Some popular applications built with Electron are: VS Code, Slack, What’s App, Twitch, Mircorsoft Teams, and InVision. This personally built React Template incorporates Electron js and is configured to build applications for Window, Mac and Linux.
              </p>
            </div>
          </section>
          <section className="rowx">
            <div id="">
              <img src="" alt=""></img>
              <h1>
                <a Href="www.davidhisakson.com">
                  project name
            </a>
              </h1>
              <p className="description">

              </p>
            </div>
            <div id="">
              <img src="" alt=""></img>
              <h1>
                <a Href="www.davidhisakson.com">
                  project name
            </a>
              </h1>
              <p className="description">

              </p>
            </div>
            <div id="">
              <img src="" alt=""></img>
              <h1>
                <a Href="www.davidhisakson.com">
                  project name
            </a>
              </h1>
              <p className="description">

              </p>
            </div>
          </section>
        </div>
      </OnDesktop>

    </div>
  );
};

export default Portfolio;
