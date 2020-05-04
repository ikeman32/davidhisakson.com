import React from "react";
import "./portfolio.scss";
import api from "../assets/API.jpg";
import logo from "../assets/logo512.png";
import signlingo from "../assets/signlingo.png";

const Portfolio = () => {
  /*Put all of your hooks, functions, etc here */

  return (
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
              Custom App
            </a>
          </h1>
          <p className="description">
            A custom Create React App template to develope a React App.
          </p>
        </div>
        <div id="signlingo">
          <img src={signlingo} alt="Sign Lingo"></img>
          <h1>
            <a Href="https://github.com/Lambda-School-Labs/signlingo-be">
              Sign Lingo
            </a>
          </h1>
          <p className="description">
            The Backend portion of Signlingo a web app to learn American Sign
            Language.
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
  );
};

export default Portfolio;
