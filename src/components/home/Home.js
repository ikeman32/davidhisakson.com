import React from "react";
import api from "../assets/api-icon-3.png";
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
          <div id="Mabout">
            <h3>About the Author</h3>
            <div className="Mimgbox">
              <img src={me} alt="Me"></img>
            </div>
            <ul>
              <li>
                Graduate of <a href="https://lambdaschool.com/">Lambda School</a>
              </li>
              <li>US Army Veteran 1990 - 1998</li>
              <li>
                <Link id="MLink" to="/About">
                  read more...
                </Link>
              </li>
            </ul>
          </div>
          <div id="Mgithub">
            <ul>
              <li><img align="left" alt="ikeman32's Github Stats" src="https://github-readme-stats.vercel.app/api?username=ikeman32&show_icons=true&hide_border=true&theme=blue-green" /></li>
            </ul>
          </div>
          </section>
          <section className="Mbottom_panel">
          <div id="mission">
            <h3>To boldly code what no one has coded before!</h3>
            <p>Languages and Tools</p>
            <ul id='tech-stack'>
              <li><img src="https://img.icons8.com/color/48/000000/visual-studio.png"/></li>
              <li><img src="https://img.icons8.com/plasticine/48/000000/react.png"/></li>
              <li><img src="https://img.icons8.com/dusk/48/000000/javascript-logo.png"/></li>
              <li><img src="https://img.icons8.com/color/48/000000/python.png"/></li>
              <li><img src="https://img.icons8.com/color/48/000000/nodejs.png"/></li>
              <li><img src="https://img.icons8.com/nolan/48/html-filetype.png"/></li>
              <li><img src="https://img.icons8.com/nolan/48/css-filetype.png"/></li>
              <li><img src="https://img.icons8.com/color/48/000000/sass.png"/></li>
              <li><img src="http://lesscss.org/public/img/less_logo.png" height='48px' width='48px'/></li>
              <li><img src="https://img.icons8.com/color/48/000000/redux.png"/></li>
              <li><img src="https://img.icons8.com/color/48/000000/git.png"/></li>
              <li><img src="https://img.icons8.com/fluent/48/000000/github.png"/></li>
              <li><img src="https://img.icons8.com/color/48/000000/linux.png"/></li>
              <li><img src="https://avatars3.githubusercontent.com/u/13409222?s=200&v=4" height='48px' width='48px'/></li>
            </ul>
          </div>
          </section>
        </div>
      </OnMobile>
      <OnDesktop>
        <section className="top_panel">
          <div id="about">
            <h3>About the Author</h3>
            <div className="imgbox">
              <img src={me} alt="Me"></img>
            </div>
            <ul>
              <li>
                Graduate of <a href="https://lambdaschool.com/">Lambda School</a>
              </li>
              <li>US Army Veteran 1990 - 1998</li>
              <li>
                <Link id="Link" to="/About">
                  read more...
                </Link>
              </li>
            </ul>
          </div>
          <div id="github">
            <ul>
              <li><img align="left" alt="ikeman32's Github Stats" src="https://github-readme-stats.vercel.app/api?username=ikeman32&show_icons=true&hide_border=true&theme=blue-green" /></li>
            </ul>
          </div>
        </section>
        <section className="bottom_panel">
          <div id="mission">
            <h3>To boldly code what no one has coded before!</h3>
            <p>Languages and Tools</p>
            <ul id='tech-stack'>
              <li><img src="https://img.icons8.com/color/64/000000/visual-studio.png"/></li>
              <li><img src="https://img.icons8.com/plasticine/64/000000/react.png"/></li>
              <li><img src="https://img.icons8.com/dusk/64/000000/javascript-logo.png"/></li>
              <li><img src="https://img.icons8.com/color/48/000000/python.png"/></li>
              <li><img src="https://nodejs.org/static/images/logo.svg" height='64' width='64'/></li>
              <li><img src="https://img.icons8.com/nolan/64/html-filetype.png"/></li>
              <li><img src="https://img.icons8.com/nolan/64/css-filetype.png"/></li>
              <li><img src="https://img.icons8.com/color/64/000000/sass.png"/></li>
              <li><img src="http://lesscss.org/public/img/less_logo.png" height='64px' width='64px'/></li>
              <li><img src="https://img.icons8.com/color/64/000000/redux.png"/></li>
              <li><img src="https://img.icons8.com/color/64/000000/git.png"/></li>
              <li><img src="https://img.icons8.com/fluent/64/000000/github.png"/></li>
              <li><img src="https://img.icons8.com/color/64/000000/linux.png"/></li>
              <li><img src="https://avatars3.githubusercontent.com/u/13409222?s=200&v=4" height='64px' width='64px'/></li>
            </ul>
          </div>


        </section>
      </OnDesktop>
    </div>
  );
};

export default Home;
