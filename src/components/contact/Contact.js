import React, {useState} from "react";
import { layoutGenerator } from "react-break";
import axios from 'axios';
import "./contact.scss";
import "./contactMobile.scss";

const Contact = () => {
  const [client, setClient] = useState({
    fname: '',
    lname: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e)=>{
    setClient({
      ...client, [e.target.name]: e.target.value
    });
  };

  const submitHandler = (e) =>{
    e.preventDefault();
    axios
      .post('http://localhost:3300/send', client)
      .then(res =>{
        const { data } = res;
        console.log("post", data);

      })
  }

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
            <form onSubmit={submitHandler} className="Mcontact_form">
              <div id="Mname">
                <input
                  type="text"
                  name="fname"
                  value={client.fname}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lname"
                  value={client.lname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="Minfo">
                <input
                  type="email"
                  name="email"
                  value={client.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required />
                <input
                  type="text"
                  name="company"
                  value={client.company}
                  onChange={handleChange}
                  placeholder="Company" />
              </div>
              <div className="Msubject">
                <select
                  name="subject"
                  id="Msubj"
                  value={client.subject}
                  onChange={handleChange}
                  placeholder="Subject">
                  <option value="Inquiry">Inquiry</option>
                  <option value="">Are you available</option>
                  <option value="">Interview requested</option>
                </select>
              </div>
              <div className="Mmessage">
                <textarea
                  name="message"
                  id="Mmsg"
                  value={client.message}
                  onChange={handleChange}
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
            <form  className="contact_form">
              <div id="name">
                <input
                  type="text"
                  name="fname"
                  value={client.fname}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lname"
                  value={client.lname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="info">
                <input type="email"
                  name="email"
                  value={client.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required />
                <input type="text"
                  name="company"
                  value={client.company}
                  onChange={handleChange}
                  placeholder="Company" />
              </div>
              <div className="subject">
                <select
                  name="subject"
                  id="subj"
                  value={client.subject}
                  onChange={handleChange}
                  placeholder="Subject">
                  <option value="Inquiry">Inquiry</option>
                  <option value="">Are you available</option>
                  <option value="">Interview requested</option>
                </select>
              </div>
              <div className="message">
                <textarea
                  name="message"
                  id="msg"
                  value={client.message}
                  onChange={handleChange}
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
