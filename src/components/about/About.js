import React from "react";
import { layoutGenerator } from "react-break";
import "./about.scss";
import "./aboutMobile.scss";

const About = () => {
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
        <div className="Mabout_container">
        <iframe src="https://resume.creddle.io/embed/1t096pf4ebj" title='resume'
            seamless></iframe>
        </div>
      </OnMobile>
      <OnDesktop>
        <div className="about_container">
          <iframe src="https://resume.creddle.io/embed/1t096pf4ebj" title='resume'
            width="850" height="1100" seamless></iframe>
        </div>
      </OnDesktop>
    </div>
  );
};

export default About;
