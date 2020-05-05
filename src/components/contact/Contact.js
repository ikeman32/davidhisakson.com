import React from "react";
import { layoutGenerator } from "react-break";
import "./contact.scss";

const Contact = () => {
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
        <div className="Mcontact_container">
          <section className="Mform_section">
            <form action="" method="post" className="contact_form">
              <div id="Mname">
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="Minfo">
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="Company" placeholder="Company" />
              </div>
              <div className="Msubject">
                <select name="subject" id="Msubj" placeholder="Subject">
                  <option value="Inquiry">Inquiry</option>
                  <option value="">Are you available</option>
                  <option value="">Interview requested</option>
                </select>
              </div>
              <div className="Mmessage">
                <textarea
                  name="message"
                  id="Mmsg"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="Mbtns">
                <input type="reset" name="rested" value="Reset" />
                <input type="submit" name="submit" value="Submit" />
              </div>
            </form>
          </section>
        </div>
      </OnMobile>
      <OnDesktop>
        <div className="contact_container">
          <section className="form_section">
            <form action="" method="post" className="contact_form">
              <div id="name">
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="info">
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="Company" placeholder="Company" />
              </div>
              <div className="subject">
                <select name="subject" id="subj" placeholder="Subject">
                  <option value="Inquiry">Inquiry</option>
                  <option value="">Are you available</option>
                  <option value="">Interview requested</option>
                </select>
              </div>
              <div className="message">
                <textarea
                  name="message"
                  id="msg"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="btns">
                <input type="reset" name="rested" value="Reset" />
                <input type="submit" name="submit" value="Submit" />
              </div>
            </form>
          </section>
        </div>
      </OnDesktop>
    </div>
  );
};

export default Contact;
