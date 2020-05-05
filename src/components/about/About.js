import React from "react";
import { layoutGenerator } from "react-break";
import "./about.scss";
import "./aboutMobile.scss";
import me from "../assets/me.jpg";

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
          <section className="Mprofile">
            <div id="Mimage">
              <img src={me} alt="Me.jpg"></img>
            </div>

            <div id="Minfo">
              <h1>David H Isakson II</h1>
              <p>
                Location: <br></br> Moses Lake
              </p>
              <p>
                Occupation: <br></br>Full Stack Web Developer
              </p>
              <p>
                Email: <br></br>david.isakson.ii@gmail.com
              </p>
              <p>
                Github: <br></br>https://github.com/ikeman32
              </p>
            </div>
          </section>
          <p className="MmissionStatement">
            To boldly code what no developer has coded before!
          </p>
          <hr></hr>
          <section className="Meducation">
            <table className="Medu">
              <tr>
                <th>
                  <h2>Education</h2>
                </th>
              </tr>
              <tr>
                <td>Lambda School</td>
                <td className="noDisplay">Full Stack Web Develepment</td>
                <td>2019 - 2020</td>
              </tr>
              <tr>
                <td>Wenatche Valley College</td>
                <td className="noDisplay">Business Information Tech</td>
                <td>1999 - 2001</td>
              </tr>
            </table>
            <div class="Mskills">
              <h2>Skills</h2>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>LESS</li>
                <li>SASS</li>
              </ul>
            </div>
          </section>
          <section className="Mhistory">
            <table>
              <tr>
                <td id="Mtable-head">
                  <h2>Work History</h2>
                </td>
              </tr>
              <tr>
                <td>ABM Industries</td>
                <td className="noDisplay">Part-Time Janitor</td>
                <td>2019</td>
              </tr>
              <tr>
                <td>Bud Clary Toyota of Moses Lake</td>
                <td className="noDisplay">Service Technician</td>
                <td>2016 - 2019</td>
              </tr>
              <tr>
                <td>Wal-Mart</td>
                <td className="noDisplay">Unloader | Service Technician</td>
                <td>2012 - 2016</td>
              </tr>
              <tr>
                <td>Okanogan Inn</td>
                <td className="noDisplay">Desk Clerk | Ast Manager| Manager</td>
                <td>2008 - 2012</td>
              </tr>
              <tr>
                <td>Multiple Clients</td>
                <td className="noDisplay">Payroll | Bookkeeper</td>
                <td>2007 - 2010</td>
              </tr>
              <tr>
                <td>Various Employers</td>
                <td className="noDisplay">Odd Jobs</td>
                <td>2002 - 2007</td>
              </tr>
              <tr>
                <td>Meeker Street Market</td>
                <td className="noDisplay">Stocker</td>
                <td>2001</td>
              </tr>
              <tr>
                <td>Omak Cab</td>
                <td className="noDisplay">Taxi Driver</td>
                <td>1999 - 2000</td>
              </tr>
              <tr>
                <td>Westside Pizza</td>
                <td className="noDisplay">Delivery Driver</td>
                <td>1998 - 1999</td>
              </tr>
              <tr>
                <td>US Army</td>
                <td className="noDisplay">Motor Transport</td>
                <td>1990 - 1998</td>
              </tr>
            </table>
          </section>
        </div>
      </OnMobile>
      <OnDesktop>
        <div className="about_container">
          <section className="profile">
            <div id="image">
              <img src={me} alt="Me.jpg"></img>
            </div>

            <div id="info">
              <h1>David H Isakson II</h1>
              <p>Location: Moses Lake</p>
              <p>Occupation: Full Stack Web Developer</p>
              <p>Email: david.isakson.ii@gmail.com</p>
              <p>Github: https://github.com/ikeman32</p>
            </div>
          </section>
          <p className="missionStatement">
            To boldly code what no developer has coded before!
          </p>
          <hr></hr>
          <section className="education">
            <table className="edu">
              <tr>
                <th>
                  <h2>Education</h2>
                </th>
              </tr>
              <tr>
                <td>Lambda School</td>
                <td>Full Stack Web Develepment</td>
                <td>2019 - 2020</td>
              </tr>
              <tr>
                <td>Wenatche Valley College</td>
                <td>Business Information Tech</td>
                <td>1999 - 2001</td>
              </tr>
            </table>
            <div class="skills">
              <h2>Skills</h2>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>LESS</li>
                <li>SASS</li>
              </ul>
            </div>
          </section>
          <section className="history">
            <table>
              <tr>
                <td id="table-head">
                  <h2>Work History</h2>
                </td>
              </tr>
              <tr>
                <td>ABM Industries</td>
                <td>Part-Time Janitor</td>
                <td>2019</td>
              </tr>
              <tr>
                <td>Bud Clary Toyota of Moses Lake</td>
                <td>Service Technician</td>
                <td>2016 - 2019</td>
              </tr>
              <tr>
                <td>Wal-Mart</td>
                <td>Unloader | Service Technician</td>
                <td>2012 - 2016</td>
              </tr>
              <tr>
                <td>Okanogan Inn</td>
                <td>Desk Clerk | Ast Manager| Manager</td>
                <td>2008 - 2012</td>
              </tr>
              <tr>
                <td>Multiple Clients</td>
                <td>Payroll | Bookkeeper</td>
                <td>2007 - 2010</td>
              </tr>
              <tr>
                <td>Various Employers</td>
                <td>Odd Jobs</td>
                <td>2002 - 2007</td>
              </tr>
              <tr>
                <td>Meeker Street Market</td>
                <td>Stocker</td>
                <td>2001</td>
              </tr>
              <tr>
                <td>Omak Cab</td>
                <td>Taxi Driver</td>
                <td>1999 - 2000</td>
              </tr>
              <tr>
                <td>Westside Pizza</td>
                <td>Delivery Driver</td>
                <td>1998 - 1999</td>
              </tr>
              <tr>
                <td>US Army</td>
                <td>Motor Transport</td>
                <td>1990 - 1998</td>
              </tr>
            </table>
          </section>
        </div>
      </OnDesktop>
    </div>
  );
};

export default About;
