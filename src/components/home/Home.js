import React from "react";
import api from "../assets/API.jpg";
import logo from "../assets/logo512.png";
import signlingo from "../assets/signlingo.png";
import me from "../assets/me.jpg";
import { Link } from "react-router-dom";
import { layoutGenerator } from "react-break";
import "./home.scss";
import "./homeMobile.scss";

const Home = () => {
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
    <div className="home_container">
      <OnAtLeastTablet></OnAtLeastTablet>
      <OnAtMostPhablet></OnAtMostPhablet>
      <OnMobile>
        <div className="Mhome_container">
          <section className="Mtop_panel">
            <div id="Mapi">
              <img src={api} alt="dukeapi"></img>
              <h1>
                <a href="https://www.npmjs.com/package/dukeapi">dukeapi</a>
              </h1>
            </div>
            <div id="Mcustom_app">
              <img src={logo} alt="Custom App"></img>
              <h1>
                <a href="https://www.npmjs.com/package/cra-template-duke">
                  Custom App
                </a>
              </h1>
            </div>
            <div id="Msignlingo">
              <img src={signlingo} alt="Sign Lingo"></img>
              <h1>
                <a Href="https://github.com/Lambda-School-Labs/signlingo-be">
                  Sign Lingo
                </a>
              </h1>
            </div>
          </section>
          <section className="Mbottom_panel">
            <div id="Mblog">
              <h3>Blog Posts</h3>
              <details>
                <summary>
                  <a href="http://allthingsdev.tech/">From My Blog</a>
                </summary>
                <ul>
                  <li>
                    <a href="http://www.allthingsdev.tech/index.php/blog/create-a-react-app-template">
                      Create a React App Template
                    </a>
                  </li>
                  <li>
                    <a href="http://www.allthingsdev.tech/index.php/blog/that-moment-when-things-start-to-click">
                      That Moment When Things Start to Clic
                    </a>
                  </li>
                  <li>
                    <a href="http://www.allthingsdev.tech/index.php/blog/google-really-is-your-friend">
                      Google Really is your Friend
                    </a>
                  </li>
                  <li>
                    <a href="http://www.allthingsdev.tech/index.php/blog/get-a-free-domain-name-and-free-hosting">
                      Get a Free Domain Name and Free Hosting
                    </a>
                  </li>
                  <li>
                    <a href="http://www.allthingsdev.tech/index.php/blog/a-background-in-web-development-is-quite-useful">
                      A Background in Web Development is Quite Useful
                    </a>
                  </li>
                </ul>
              </details>
              <br></br>
              <details>
                <summary>
                  <a href="https://dev.to/ikeman32">From Dev.to</a>
                </summary>
                <ul>
                  <li>
                    <a href="https://dev.to/ikeman32/boilerplate-for-a-custom-react-template-45hd">
                      Boilerplate for a Custom React Template
                    </a>
                  </li>
                </ul>
              </details>
              <br></br>
              <details>
                <summary>
                  <a href="https://www.youtube.com/channel/UCL11jXWKQ0kY6ljqoTRY_mw">
                    From My Youtube Channel
                  </a>
                </summary>
                <ul>
                  <li>
                    <a href="https://www.youtube.com/watch?v=fuOMSySIq5I">
                      Authenticating with Google using Okta Walk Through
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/watch?v=NrL9jYgAjcw">
                      Have a RESTful API with JWT Built and Working in About a
                      Minute
                    </a>
                  </li>
                </ul>
              </details>
            </div>
            <div id="Mservices">
              <ul>
                <li>Comming Soon</li>
              </ul>
            </div>
            <div id="Mabout">
              <h3>About the Author</h3>
              <div className="Mimgbox">
                <img src={me} alt="Me"></img>
              </div>
              <ul>
                <li>
                  Student at{" "}
                  <a href="https://lambdaschool.com/">Lambda School</a>
                </li>
                <li>US Army Veteran</li>
                <li>
                  <Link id="MLink" to="/About">
                    read more...
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </OnMobile>
      <OnDesktop>
        <section className="top_panel">
          <div id="api">
            <img src={api} alt="dukeapi"></img>
            <h1>
              <a href="https://www.npmjs.com/package/dukeapi">dukeapi</a>
            </h1>
          </div>
          <div id="custom_app">
            <img src={logo} alt="Custom App"></img>
            <h1>
              <a href="https://www.npmjs.com/package/cra-template-duke">
                Custom App
              </a>
            </h1>
          </div>
          <div id="signlingo">
            <img src={signlingo} alt="Sign Lingo"></img>
            <h1>
              <a Href="https://github.com/Lambda-School-Labs/signlingo-be">
                Sign Lingo
              </a>
            </h1>
          </div>
        </section>
        <section className="bottom_panel">
          <div id="blog">
            <h3>Blog Posts</h3>
            <details>
              <summary>
                <a href="http://allthingsdev.tech/">From My Blog</a>
              </summary>
              <ul>
                <li>
                  <a href="http://www.allthingsdev.tech/index.php/blog/create-a-react-app-template">
                    Create a React App Template
                  </a>
                </li>
                <li>
                  <a href="http://www.allthingsdev.tech/index.php/blog/that-moment-when-things-start-to-click">
                    That Moment When Things Start to Clic
                  </a>
                </li>
                <li>
                  <a href="http://www.allthingsdev.tech/index.php/blog/google-really-is-your-friend">
                    Google Really is your Friend
                  </a>
                </li>
                <li>
                  <a href="http://www.allthingsdev.tech/index.php/blog/get-a-free-domain-name-and-free-hosting">
                    Get a Free Domain Name and Free Hosting
                  </a>
                </li>
                <li>
                  <a href="http://www.allthingsdev.tech/index.php/blog/a-background-in-web-development-is-quite-useful">
                    A Background in Web Development is Quite Useful
                  </a>
                </li>
              </ul>
            </details>
            <br></br>
            <details>
              <summary>
                <a href="https://dev.to/ikeman32">From Dev.to</a>
              </summary>
              <ul>
                <li>
                  <a href="https://dev.to/ikeman32/boilerplate-for-a-custom-react-template-45hd">
                    Boilerplate for a Custom React Template
                  </a>
                </li>
              </ul>
            </details>
            <br></br>
            <details>
              <summary>
                <a href="https://www.youtube.com/channel/UCL11jXWKQ0kY6ljqoTRY_mw">
                  From My Youtube Channel
                </a>
              </summary>
              <ul>
                <li>
                  <a href="https://www.youtube.com/watch?v=fuOMSySIq5I">
                    Authenticating with Google using Okta Walk Through
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=NrL9jYgAjcw">
                    Have a RESTful API with JWT Built and Working in About a
                    Minute
                  </a>
                </li>
              </ul>
            </details>
          </div>
          <div id="services">
            <ul>
              <li>Comming Soon</li>
            </ul>
          </div>
          <div id="about">
            <h3>About the Author</h3>
            <div className="imgbox">
              <img src={me} alt="Me"></img>
            </div>
            <ul>
              <li>
                Student at <a href="https://lambdaschool.com/">Lambda School</a>
              </li>
              <li>US Army Veteran</li>
              <li>
                <Link id="Link" to="/About">
                  read more...
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </OnDesktop>
    </div>
  );
};

export default Home;
