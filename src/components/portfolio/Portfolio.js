import React from "react";
import "./portfolio.scss";
import "./portfolioMobile.scss"
import api from "../assets/api-icon-3.png";
import logo from "../assets/logo512.png";
import signlingo from "../assets/signlingo.png";
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
          <img src={api} alt="dukeapi"></img>
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
          <img src={logo} alt="Custom App"></img>
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
          <img src={signlingo} alt="Sign Lingo"></img>
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
      <section className="Mrowx">

      <div id="">
          <img src="" alt="Image"></img>
          <h1>
            <a Href="#">
              project name
            </a>
          </h1>
          <p className="Mdescription">

          </p>
        </div>
        <div id="">
          <img src="" alt="Image"></img>
          <h1>
            <a Href="#">
              project name
            </a>
          </h1>
          <p className="Mdescription">

          </p>
        </div>
        <div id="">
          <img src="" alt="Image"></img>
          <h1>
            <a Href="#">
              project name
            </a>
          </h1>
          <p className="Mdescription">

          </p>
        </div>
      </section>
      <section className="Mrowx">
      <div id="">
          <img src="" alt="Image"></img>
          <h1>
            <a Href="#">
              project name
            </a>
          </h1>
          <p className="Mdescription">

          </p>
        </div>
        <div id="">
          <img src="" alt="Image"></img>
          <h1>
            <a Href="#">
              project name
            </a>
          </h1>
          <p className="Mdescription">

          </p>
        </div>
        <div id="">
          <img src="" alt="Image"></img>
          <h1>
            <a Href="#">
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
          <img src={api} alt="dukeapi"></img>
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
          <img src={logo} alt="Custom App"></img>
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
          <img src={signlingo} alt="Sign Lingo"></img>
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
      <section className="rowx">

      <div id="">
          <img src="" alt="Image"></img>
          <h1>
            <a Href="#">
              project name
            </a>
          </h1>
          <p className="description">

          </p>
        </div>
        <div id="">
          <img src="" alt="Image"></img>
          <h1>
            <a Href="#">
              project name
            </a>
          </h1>
          <p className="description">

          </p>
        </div>
        <div id="">
          <img src="" alt="Image"></img>
          <h1>
            <a Href="#">
              project name
            </a>
          </h1>
          <p className="description">

          </p>
        </div>
      </section>
      <section className="rowx">
      <div id="">
          <img src="" alt="Image"></img>
          <h1>
            <a Href="#">
              project name
            </a>
          </h1>
          <p className="description">

          </p>
        </div>
        <div id="">
          <img src="" alt="Image"></img>
          <h1>
            <a Href="#">
              project name
            </a>
          </h1>
          <p className="description">

          </p>
        </div>
        <div id="">
          <img src="" alt="Image"></img>
          <h1>
            <a Href="#">
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
